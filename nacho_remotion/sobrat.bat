@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Сборка nacho_remotion.zip из частей...
copy /b nacho_remotion.zip.001 + nacho_remotion.zip.002 nacho_remotion.zip
echo Готово: nacho_remotion.zip
pause
