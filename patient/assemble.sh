#!/bin/bash
# Assemble intro frames (T 0-14.4) + main frames (T 14.4-125.0) + mix.wav into the final MP4.
# usage: assemble.sh <intro_frames_dir> <main_frames_dir> <out.mp4>
set -e
here=$(cd "$(dirname "$0")" && pwd); ID=$1; MD=$2; OUT=$3; tmp=$(mktemp -d)
n_i=$(ls $ID | wc -l); n_m=$(ls $MD | wc -l)
[ "$n_i" -eq 864 ] || { echo "intro frames: $n_i (expected 864)"; exit 1; }
[ "$n_m" -eq 6636 ] || { echo "main frames: $n_m (expected 6636)"; exit 1; }
ffmpeg -loglevel error -y -framerate 60 -start_number 0 -i $ID/f%04d.jpg -c:v libx264 -preset medium -crf 16 -pix_fmt yuv420p -r 60 $tmp/a.mp4
ffmpeg -loglevel error -y -framerate 60 -start_number 0 -i $MD/f%05d.jpg -c:v libx264 -preset medium -crf 16 -pix_fmt yuv420p -r 60 $tmp/b.mp4
printf "file '%s'\nfile '%s'\n" $tmp/a.mp4 $tmp/b.mp4 > $tmp/list.txt
ffmpeg -loglevel error -y -f concat -safe 0 -i $tmp/list.txt -c copy $tmp/v.mp4
ffmpeg -loglevel error -y -i $tmp/v.mp4 -i $here/mix.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 256k -ar 48000 -movflags +faststart $OUT
rm -rf $tmp
ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate,pix_fmt,nb_frames,sample_rate,channels:format=duration -of compact $OUT
