# Досье: Начо Варга — проект Remotion

Проект для рендера ролика в [Remotion](https://www.remotion.dev/) (11:11, 1920×1080, 60 к/с, звук уже сведён).
Архив `nacho_remotion.zip` (160 МБ) разрезан на 2 части, потому что GitHub не принимает файлы больше 100 МБ.
Части — это куски одного файла, по отдельности они не открываются.

## Как собрать архив

**Windows:** скачай `nacho_remotion.zip.001`, `nacho_remotion.zip.002` и `sobrat.bat` в одну папку,
запусти `sobrat.bat` двойным щелчком — рядом появится `nacho_remotion.zip`.

Вручную (командная строка в этой папке):

    copy /b nacho_remotion.zip.001 + nacho_remotion.zip.002 nacho_remotion.zip

Или в 7-Zip: правой кнопкой по `nacho_remotion.zip.001` → 7-Zip → «Объединить файлы».

**macOS / Linux:**

    cat nacho_remotion.zip.001 nacho_remotion.zip.002 > nacho_remotion.zip

Проверка (SHA-256 собранного архива):
`98bd6db5776325b525c9a9a22f7e3e3aec82f3b6eb9b1ba0949e62e8715b2785`

## Как отрендерить

Нужен Node.js 18+. Распакуй архив, перейди в папку `remotion` и выполни:

    npm install
    npm run prepare-frames
    npm run render

Готовый ролик — `remotion/out/nacho.mp4`. Подробности (отдельные главы, Studio, потоки) — в `remotion/README.md` внутри архива.

`preview.jpg` — обложка 1280×720.
