# Досье: Начо Варга — проект Remotion

Ролик 11:11, 1920×1080, 60 к/с, 13 глав, голос + вставки из сериала в дубляже + музыка и шумы (звук уже сведён, −14 LUFS).

Каждая глава — страница `public/nacho/chapter.html?ch=N` с canvas-движком (стол, полароиды, склейки, штампы, вставки).
Remotion открывает её во `<IFrame>` и на каждом кадре вызывает `renderAt(t)`; звук — `public/audio.m4a`.

## Что нужно
- Node.js 18 или новее (https://nodejs.org)
- ~2 ГБ свободного места

## Как отрендерить

1. Собери архив из частей: Windows — запусти `sobrat.bat`; macOS/Linux — `cat nacho_remotion.zip.0* > nacho_remotion.zip`. Распакуй `nacho_remotion.zip`.
2. В папке проекта:

       npm install
       npm run prepare-frames
       npm run render

   `prepare-frames` один раз распаковывает 102 клипа из `clips/` в JPEG-кадры (`public/nacho/assets/frames`, ~730 МБ, 1–3 минуты; ffmpeg берётся из Remotion).
   `render` пишет `out/nacho.mp4`.

Рендер 40 281 кадра идёт долго: на 8-ядерном ПК примерно 1–2 часа. Можно задать число потоков:

    npx remotion render Nacho out/nacho.mp4 --concurrency=6

## Посмотреть и отрендерить кусок
- `npm start` — Remotion Studio в браузере (перемотка медленная: каждый кадр рисуется заново).
- Отдельная глава со своим куском звука: `npx remotion render Chapter05 out/ch05.mp4` (Chapter00 … Chapter12).
- Диапазон кадров: `npx remotion render Nacho out/part.mp4 --frames=0-3599`.

## Главы
| № | Глава | Начало |
|---|---|---|
| 00 | Вступление | 0:00 |
| 01 | Напарник | 0:53 |
| 02 | Отец | 1:50 |
| 03 | Туко | 2:38 |
| 04 | Гектор | 3:23 |
| 05 | Таблетки | 3:51 |
| 06 | Поводок | 4:45 |
| 07 | Лало | 5:27 |
| 08 | Ворота | 6:27 |
| 09 | Беглец | 7:36 |
| 10 | Признание | 8:42 |
| 11 | Вердикт | 9:40 |
| 12 | Финал | 10:40 |

Тексты для публикации (название, описание, теги, таймкоды) — `YOUTUBE.md`, обложка — `preview.jpg`.
