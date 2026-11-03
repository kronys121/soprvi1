@echo off
rem Склеивает hank_part00..22.mp4 в hank_full.mp4 (нужен ffmpeg: https://ffmpeg.org/download.html)
cd /d "%~dp0"
ffmpeg -f concat -safe 0 -i list.txt -c copy hank_full.mp4
pause
