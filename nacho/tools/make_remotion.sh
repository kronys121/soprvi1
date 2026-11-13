#!/bin/bash
# Assembles the Remotion package: remotion/{public,clips,src/chapters.json}. Run from anywhere.
set -e
N=$(cd "$(dirname "$0")/.." && pwd); R=$N/remotion; P=$R/public; ROOT=$(dirname $N)
rm -rf $P; mkdir -p $P/intro $P/patient/fonts $P/fonts $P/nacho/chapters $P/nacho/assets/stills $P/nacho/assets/frames $R/clips
cp $ROOT/intro/lib.js $P/intro/; cp $ROOT/patient/{engine,common,fx2}.js $P/patient/; cp $ROOT/patient/fonts/{Caveat,Oswald}.ttf $P/patient/fonts/
cp /usr/share/fonts/opentype/inter/InterDisplay-{Regular,Medium,SemiBold,Bold,ExtraBold,Black}.otf $P/fonts/
cp /usr/share/fonts/truetype/dejavu/DejaVuSansMono{,-Bold}.ttf $P/fonts/
cp $N/{words.js,media.js,timeline.js,ncommon.js} $P/nacho/; cp $N/chapters/*.js $P/nacho/chapters/; cp $N/assets/stills/*.jpg $P/nacho/assets/stills/
# page: same as chapter.html, plus bundled fonts (Inter Display, DejaVu Sans Mono are system fonts on the render box)
FF='@font-face{font-family:"Inter Display";src:url(../fonts/InterDisplay-Regular.otf);font-weight:400}@font-face{font-family:"Inter Display";src:url(../fonts/InterDisplay-Medium.otf);font-weight:500}@font-face{font-family:"Inter Display";src:url(../fonts/InterDisplay-SemiBold.otf);font-weight:600}@font-face{font-family:"Inter Display";src:url(../fonts/InterDisplay-Bold.otf);font-weight:700}@font-face{font-family:"Inter Display";src:url(../fonts/InterDisplay-ExtraBold.otf);font-weight:800}@font-face{font-family:"Inter Display";src:url(../fonts/InterDisplay-Black.otf);font-weight:900}@font-face{font-family:"DejaVu Sans Mono";src:url(../fonts/DejaVuSansMono.ttf);font-weight:400}@font-face{font-family:"DejaVu Sans Mono";src:url(../fonts/DejaVuSansMono-Bold.ttf);font-weight:700}'
sed -e "s#<style>#<style>$FF#" $N/chapter.html > $P/nacho/chapter.html
grep -q 'InterDisplay-Black' $P/nacho/chapter.html
# clips: JPEG frame folders -> lossless-ish H.264, unpacked again by scripts/prepare-clips.mjs
for d in $N/assets/frames/*/; do k=$(basename $d)
  [ -f $R/clips/$k.mp4 ] || ffmpeg -nostdin -loglevel error -y -framerate 24000/1001 -i $d/f%05d.jpg -c:v libx264 -preset slow -crf 16 -pix_fmt yuv420p $R/clips/$k.mp4; done
# soundtrack, normalised to -14 LUFS like assemble_film.sh
I=$(ffmpeg -hide_banner -i $N/mix_film.wav -af ebur128 -f null - 2>&1 | grep -E "^\s+I:" | tail -1 | awk '{print $2}'); G=$(python3 -c "print(-14-($I))")
ffmpeg -nostdin -loglevel error -y -i $N/mix_film.wav -af "volume=${G}dB,alimiter=limit=0.89:level=false" -c:a aac -b:a 256k -ar 48000 $P/audio.m4a
# chapter table for the compositions
cd $N && node -e "
const t=require('./timeline.js'); const titles=['Вступление','Напарник','Отец','Туко','Гектор','Таблетки','Поводок','Лало','Ворота','Беглец','Признание','Вердикт','Финал'];
let from=0; const out=[]; for(let k=0;k<=12;k++){const [a,b]=t.chRange(k); const n=Math.round((b-a)*60); out.push({ch:k,title:titles[k],t0:a,frames:n,from}); from+=n;}
require('fs').writeFileSync('$R/src/chapters.json', JSON.stringify(out,null,1)); console.log('frames',from);"
du -sh $P $R/clips
