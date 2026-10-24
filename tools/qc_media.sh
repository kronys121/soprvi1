#!/bin/bash
# usage: qc_media.sh assets_dir out.jpg [keys...] -> 3 frames per clip + stills, tiled
A=$1; OUT=$2; shift 2; T=$(mktemp -d); i=0
keys=${@:-$(ls $A/frames)}
for k in $keys; do n=$(ls $A/frames/$k | wc -l); for j in 1 $((n/2)) $n; do ffmpeg -loglevel error -y -i $A/frames/$k/f$(printf %05d $j).jpg -vf "scale=200:112,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='$k $j':x=2:y=2:fontsize=12:fontcolor=yellow:box=1:boxcolor=black" $T/a$(printf %03d $i).png; i=$((i+1)); done; done
for f in $(ls $A/stills 2>/dev/null); do ffmpeg -loglevel error -y -i $A/stills/$f -vf "scale=200:112,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='${f%.jpg}':x=2:y=2:fontsize=12:fontcolor=cyan:box=1:boxcolor=black" $T/a$(printf %03d $i).png; i=$((i+1)); done
ffmpeg -loglevel error -y -i $T/a%03d.png -vf tile=12x$(( (i+11)/12 )) -frames:v 1 $OUT; rm -rf $T
