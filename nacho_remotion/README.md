# Досье: Начо Варга — проект Remotion

Проект для рендера ролика в [Remotion](https://www.remotion.dev/) (11:21, 1920×1080, 60 к/с, звук уже сведён).
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
`32c4fda69f103778df9ca2705540f753c3d7e869b960ea616fbb017c990e0378`

## Как отрендерить

Нужен Node.js 18+. Распакуй архив, перейди в папку `remotion` и выполни:

    npm install
    npm run render

Готовый ролик — `remotion/out/nacho_final.mp4` (рендер в 8 потоков; кадры клипов распаковываются автоматически). Подробности (отдельные главы, Studio, потоки) — в `remotion/README.md` внутри архива.

`preview.jpg` — обложка 1280×720.
