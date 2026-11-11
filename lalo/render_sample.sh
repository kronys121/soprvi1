#!/bin/bash
# renders sample.html (30 s re-edit sample) and muxes it with mix_sample.wav -> out/lalo_sample_v2.mp4
set -e
cd "$(dirname "$0")"; export NODE_PATH=$(npm root -g); W=${1:-4}
n=$(node -e "const t=require('./sample_tl.js'); console.log(Math.round(t.FILM_END*60))"); dir=/home/user/render/lsample; rm -rf $dir; mkdir -p $dir ../out
per=$(( (n + W - 1) / W ))
for w in $(seq 0 $((W-1))); do s=$((w*per)); e=$(( (w+1)*per )); [ $e -gt $n ] && e=$n; ( nice -n 5 node render_main.js sample.html $dir 0 60 $s $e 2>&1 | grep -E "err|Error" || true ) & done; wait
got=$(ls $dir | wc -l); [ "$got" -eq "$n" ] || { echo "$got of $n frames"; exit 1; }
I=$(ffmpeg -hide_banner -i mix_sample.wav -af ebur128 -f null - 2>&1 | grep -E "^\s+I:" | tail -1 | awk '{print $2}'); G=$(python3 -c "print(-14-($I))")
ffmpeg -loglevel error -y -framerate 60 -i $dir/f%05d.jpg -i mix_sample.wav -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -r 60 -af "volume=${G}dB,alimiter=limit=0.89:level=false" -c:a aac -b:a 256k -ar 48000 -shortest -movflags +faststart ../out/lalo_sample_v2.mp4
rm -rf $dir; echo SAMPLE_DONE
