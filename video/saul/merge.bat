@echo off
rem Склеивает saul_part00..23.mp4 в saul_full.mp4 (нужен ffmpeg: https://ffmpeg.org/download.html)
cd /d "%~dp0"
ffmpeg -f concat -safe 0 -i list.txt -c copy saul_full.mp4
pause
