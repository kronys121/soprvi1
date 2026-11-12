#!/bin/bash
# mosaic.sh dir out.jpg -> 4x4 tile of stills sorted by time
d=$1; out=$2; t=$(mktemp -d); i=0
for f in $(ls $d/*.jpg | sort -V); do cp $f $t/$(printf %03d $i).jpg; i=$((i+1)); done
ffmpeg -v error -y -framerate 1 -i $t/%03d.jpg -vf "scale=480:270,tile=4x4" -frames:v 1 $out; rm -rf $t
