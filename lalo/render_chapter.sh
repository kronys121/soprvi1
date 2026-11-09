#!/bin/bash
# usage: render_chapter.sh <ch> [workers]  -> /home/user/render/lseg/chNN.mp4
# renders in chunks of 1200 frames: each chunk is encoded and its JPEG frames deleted, so disk use stays small
set -e
ch=$1; W=${2:-3}; cd "$(dirname "$0")"; export NODE_PATH=$(npm root -g)
read t0 n <<< $(node -e "const t=require('./timeline.js'); const [a,b]=t.chRange($ch); console.log(a, Math.round((b-a)*60))")
nn=$(printf %02d $ch); dir=/home/user/render/l$nn; mkdir -p $dir /home/user/render/lseg; CH=1200
: > $dir/parts.txt
for c0 in $(seq 0 $CH $((n-1))); do
  c1=$((c0+CH)); [ $c1 -gt $n ] && c1=$n; part=$dir/p$(printf %05d $c0).mp4
  if [ ! -f $part ]; then
    per=$(( (c1 - c0 + W - 1) / W ))
    for w in $(seq 0 $((W-1))); do
      s=$((c0+w*per)); e=$((c0+(w+1)*per)); [ $e -gt $c1 ] && e=$c1; [ $s -ge $e ] && continue
      ( nice -n 5 node render_main.js "chapter.html?ch=$ch" $dir $t0 60 $s $e 2>&1 | grep -E "err|Error" || true ) &
    done; wait
    got=$(ls $dir/f*.jpg 2>/dev/null | wc -l); [ "$got" -eq $((c1-c0)) ] || { echo "ch$nn chunk $c0: $got of $((c1-c0)) frames"; exit 1; }
    ffmpeg -loglevel error -y -framerate 60 -start_number $c0 -i $dir/f%05d.jpg -frames:v $((c1-c0)) -c:v libx264 -preset medium -crf 21 -pix_fmt yuv420p -r 60 $part.tmp.mp4 && mv $part.tmp.mp4 $part
    rm -f $dir/f*.jpg
  fi
  echo "file '$part'" >> $dir/parts.txt
done
ffmpeg -loglevel error -y -f concat -safe 0 -i $dir/parts.txt -c copy /home/user/render/lseg/ch$nn.mp4
rm -rf $dir; echo "ch$nn done $n frames"
