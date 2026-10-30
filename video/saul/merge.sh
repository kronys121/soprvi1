#!/bin/sh
# Склеивает saul_part00..23.mp4 в saul_full.mp4 (нужен ffmpeg)
cd "$(dirname "$0")" && ffmpeg -f concat -safe 0 -i list.txt -c copy saul_full.mp4
