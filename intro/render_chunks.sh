# usage: render_chunks.sh page.html outname  -> renders 900 frames in 2 parallel workers, chunks of 150 with fresh browser
set -e; page=$1; name=$2; mkdir -p frames_$name; rm -f frames_$name/*.jpg
worker(){ for s in "$@"; do node render.js $page --frames frames_$name $s 150; done; }
worker 0 300 600 & worker 150 450 750 & wait
ffmpeg -y -loglevel error -framerate 60 -i frames_$name/f%04d.jpg -c:v libx264 -preset medium -crf 17 -pix_fmt yuv420p -r 60 v$name.mp4
