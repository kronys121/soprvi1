@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Сборка christopher_remotion.zip из частей...
copy /b christopher_remotion.zip.001 + christopher_remotion.zip.002 christopher_remotion.zip
echo Готово: christopher_remotion.zip
pause
