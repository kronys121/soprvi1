@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist node_modules (
  echo Установка зависимостей ^(один раз, пара минут^)...
  call npm install
)
echo Запуск Remotion Studio: откроется браузер на http://localhost:3000
echo Рендер: кнопка Render справа внизу ^(Composition: Nacho^).
call npm start
pause
