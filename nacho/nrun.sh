#!/bin/bash
# renders all Nacho chapters in sequence (skips finished ones), then assembles
cd "$(dirname "$0")"
for k in $(seq 0 12); do nn=$(printf %02d $k); [ -f /home/user/render/nseg/ch$nn.mp4 ] && continue; ./render_chapter.sh $k 4 || { echo "FAIL ch$k"; exit 1; }; done
./assemble_film.sh && echo ALL_RENDERED
