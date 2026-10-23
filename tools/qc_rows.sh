#!/bin/bash
# usage: qc_rows.sh out_prefix clip1.mp4 clip2.mp4 ... -> rows of 10 evenly spaced frames per clip, 8 clips per sheet
out=$1; shift; tmp=$(mktemp -d); i=0
for f in "$@"; do
  d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f"); n=$(basename "$f" .mp4)
  for k in 0 1 2 3 4 5 6 7 8 9; do t=$(python3 -c "print($d*($k+0.5)/10)")
    ffmpeg -loglevel error -y -ss $t -i "$f" -frames:v 1 -vf "scale=200:114,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='$( [ $k = 0 ] && echo "$n " )$(printf %.0f $t)s':x=2:y=2:fontsize=12:fontcolor=yellow:box=1:boxcolor=black@0.7" $tmp/f_$(printf %03d $i)_$k.png; done
  ffmpeg -loglevel error -y -i $tmp/f_$(printf %03d $i)_%d.png -vf tile=10x1 $tmp/row_$(printf %03d $i).png; i=$((i+1))
done
ls $tmp/row_*.png | split -l 8 - $tmp/grp_
j=1; for g in $tmp/grp_*; do args=(); for r in $(cat $g); do args+=(-i $r); done; c=$(wc -l < $g)
  if [ $c -gt 1 ]; then ffmpeg -loglevel error -y "${args[@]}" -filter_complex vstack=inputs=$c ${out}_$j.jpg; else cp $(cat $g) ${out}_$j.jpg; fi; j=$((j+1)); done
rm -rf $tmp
