#!/bin/bash
# usage: render_chapter.sh <ch> [workers]  -> /home/user/render/sseg/chNN.mp4 (frames rendered, encoded, then deleted)
set -e
ch=$1; W=${2:-3}; cd "$(dirname "$0")"; export NODE_PATH=$(npm root -g)
read t0 n <<< $(node -e "const t=require('./timeline.js'); const [a,b]=t.chRange($ch); console.log(a, Math.round((b-a)*60))")
nn=$(printf %02d $ch); dir=/home/user/render/s$nn; mkdir -p $dir /home/user/render/sseg
per=$(( (n + W - 1) / W ))
for w in $(seq 0 $((W-1))); do
  s=$((w*per)); e=$(( (w+1)*per )); [ $e -gt $n ] && e=$n
  ( for c in $(seq $s 500 $((e-1))); do ce=$((c+500)); [ $ce -gt $e ] && ce=$e; nice -n 5 node render_main.js "chapter.html?ch=$ch" $dir $t0 60 $c $ce 2>&1 | grep -E "err|Error" || true; done ) &
done; wait
got=$(ls $dir | wc -l); [ "$got" -eq "$n" ] || { echo "ch$nn: $got of $n frames"; exit 1; }
ffmpeg -loglevel error -y -framerate 60 -start_number 0 -i $dir/f%05d.jpg -c:v libx264 -preset medium -crf 21 -pix_fmt yuv420p -r 60 /home/user/render/sseg/ch$nn.mp4
rm -rf $dir; echo "ch$nn done $n frames"
