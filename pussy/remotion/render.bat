@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist node_modules call npm install
call npm run render
echo Готово: out\pussy_final.mp4
pause
