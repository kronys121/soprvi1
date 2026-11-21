# Досье: Большой Пусси — проект Remotion

Проект для рендера ролика в [Remotion](https://www.remotion.dev/) (12:31, 1920×1080, 60 к/с, звук уже сведён).
Архив `pussy_remotion.zip` (117 МБ) разрезан на 2 части, потому что GitHub не принимает файлы больше 100 МБ.
Части — это куски одного файла, по отдельности они не открываются.

## Как собрать архив

**Windows:** скачай `pussy_remotion.zip.001`, `pussy_remotion.zip.002` и `sobrat.bat` в одну папку,
запусти `sobrat.bat` двойным щелчком — рядом появится `pussy_remotion.zip`.

Вручную (командная строка в этой папке):

    copy /b pussy_remotion.zip.001 + pussy_remotion.zip.002 pussy_remotion.zip

Или в 7-Zip: правой кнопкой по `pussy_remotion.zip.001` → 7-Zip → «Объединить файлы».

**macOS / Linux:**

    cat pussy_remotion.zip.001 pussy_remotion.zip.002 > pussy_remotion.zip

Проверка (SHA-256 собранного архива):
`681ca00d57f54d9b9dd3cb7895b5d1d11eda7a42004eec898759de014e434c06`

## Веб-интерфейс

В папке `remotion` дважды щёлкни `studio.bat` — откроется Remotion Studio в браузере (http://localhost:3000): просмотр ролика, таймлайн и кнопка **Render**.
Рендер одной кнопкой без браузера — `render.bat`.

## Как отрендерить из консоли

Нужен Node.js 18+. Распакуй архив, перейди в папку `remotion` и выполни:

    npm install
    npm run render

Готовый ролик — `remotion/out/pussy_final.mp4` (рендер в 8 потоков; кадры клипов распаковываются автоматически). Подробности (отдельные главы, Studio, потоки) — в `remotion/README.md` внутри архива.

`preview.jpg` — обложка 1280×720.
