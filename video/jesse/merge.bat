@echo off
rem Склеивает jesse_part00..11.mp4 в jesse_full.mp4 (нужен ffmpeg: https://ffmpeg.org/download.html)
cd /d "%~dp0"
ffmpeg -f concat -safe 0 -i list.txt -c copy jesse_full.mp4
pause
