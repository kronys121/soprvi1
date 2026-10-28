@echo off
rem Склеивает gus_part00..11.mp4 в gus_full.mp4 (нужен ffmpeg: https://ffmpeg.org/download.html)
cd /d "%~dp0"
ffmpeg -f concat -safe 0 -i list.txt -c copy gus_full.mp4
pause
