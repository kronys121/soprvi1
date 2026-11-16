# Досье: Кристофер Молтисанти — проект Remotion

Проект для рендера ролика в [Remotion](https://www.remotion.dev/) (14:38, 1920×1080, 60 к/с, звук уже сведён).
Архив `christopher_remotion.zip` (190 МБ) разрезан на 2 части, потому что GitHub не принимает файлы больше 100 МБ.
Части — это куски одного файла, по отдельности они не открываются.

## Как собрать архив

**Windows:** скачай `christopher_remotion.zip.001`, `christopher_remotion.zip.002` и `sobrat.bat` в одну папку,
запусти `sobrat.bat` двойным щелчком — рядом появится `christopher_remotion.zip`.

Вручную (командная строка в этой папке):

    copy /b christopher_remotion.zip.001 + christopher_remotion.zip.002 christopher_remotion.zip

Или в 7-Zip: правой кнопкой по `christopher_remotion.zip.001` → 7-Zip → «Объединить файлы».

**macOS / Linux:**

    cat christopher_remotion.zip.001 christopher_remotion.zip.002 > christopher_remotion.zip

Проверка (SHA-256 собранного архива):
`8eeb6184bf9614e33aeeebbc20d2432fb67af46993afaec4d995b35208eb3610`

## Веб-интерфейс

В папке `remotion` дважды щёлкни `studio.bat` — откроется Remotion Studio в браузере (http://localhost:3000): просмотр ролика, таймлайн и кнопка **Render**.
Рендер одной кнопкой без браузера — `render.bat`.

## Как отрендерить из консоли

Нужен Node.js 18+. Распакуй архив, перейди в папку `remotion` и выполни:

    npm install
    npm run render

Готовый ролик — `remotion/out/christopher_final.mp4` (рендер в 8 потоков; кадры клипов распаковываются автоматически). Подробности (отдельные главы, Studio, потоки) — в `remotion/README.md` внутри архива.

`preview.jpg` — обложка 1280×720.
