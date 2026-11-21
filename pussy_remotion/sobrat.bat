@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Сборка pussy_remotion.zip из частей...
copy /b pussy_remotion.zip.001 + pussy_remotion.zip.002 pussy_remotion.zip
echo Готово: pussy_remotion.zip
pause
