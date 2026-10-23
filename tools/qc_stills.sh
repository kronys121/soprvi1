#!/bin/bash
# usage: qc_stills.sh html out.jpg t1,t2,...  -> renders stills via render_main.js and tiles them (6 per row) with time labels
html=$1; out=$2; times=$3; d=$(mktemp -d); T2=$(mktemp -d)
NODE_PATH=$(npm root -g) node $(dirname ${html%%\?*})/render_main.js $html --stills $d $times 2>&1 | grep -E "\[err\]|Error" | head -5
i=0; for f in $(ls $d/t*.jpg | sort -t t -k2 -n); do n=$(basename $f .jpg); ffmpeg -loglevel error -y -i $f -vf "scale=480:-1,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='$n':x=4:y=4:fontsize=18:fontcolor=yellow:box=1:boxcolor=black" $T2/a$(printf %03d $i).png; i=$((i+1)); done
rows=$(( (i + 5) / 6 )); ffmpeg -loglevel error -y -i $T2/a%03d.png -vf tile=6x$rows -frames:v 1 $out; rm -rf $d $T2
