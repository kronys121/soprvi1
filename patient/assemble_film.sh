#!/bin/bash
# Final film: concat chapter segments (exact frame counts from timeline.js) + mix_film.wav -> out MP4 (AAC, about -14 LUFS)
set -e
here=$(cd "$(dirname "$0")" && pwd); S=/home/user/render/seg; OUT=${1:-/home/user/soprvi1/out/sopranos_full.mp4}; tmp=$(mktemp -d)
declare -A NF=([0]=864 [1]=6636)
for k in 2 3 4 5 6 7 8 9 10 11; do NF[$k]=$(node -e "const t=require('$here/timeline.js'); const [a,b]=t.chRange($k); console.log(Math.round((b-a)*60))"); done
: > $tmp/list.txt; total=0
for k in 0 1 2 3 4 5 6 7 8 9 10 11; do
  f=$S/ch$(printf %02d $k).mp4; have=$(ffprobe -v error -count_packets -select_streams v -show_entries stream=nb_read_packets -of csv=p=0 $f)
  want=${NF[$k]}; total=$((total+want))
  if [ "$have" -ne "$want" ]; then echo "ch$k: $have -> $want"; ffmpeg -loglevel error -y -i $f -frames:v $want -c:v libx264 -preset medium -crf 12 -pix_fmt yuv420p $tmp/c$k.mp4; f=$tmp/c$k.mp4; fi
  echo "file '$f'" >> $tmp/list.txt
done
echo "total frames $total"
I=$(ffmpeg -hide_banner -i $here/mix_film.wav -af ebur128 -f null - 2>&1 | grep -E "^\s+I:" | tail -1 | awk '{print $2}'); G=$(python3 -c "print(-14-($I))"); echo "loudness $I LUFS, gain $G dB"
ffmpeg -loglevel error -y -f concat -safe 0 -i $tmp/list.txt -i $here/mix_film.wav -map 0:v -map 1:a \
  -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -r 60 -af "volume=${G}dB,alimiter=limit=0.89:level=false" -c:a aac -b:a 256k -ar 48000 -movflags +faststart $OUT
rm -rf $tmp
ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate,pix_fmt,nb_frames,sample_rate,channels:format=duration,size -of compact $OUT
