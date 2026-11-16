# Досье: Кристофер Молтисанти — проект Remotion

Ролик 14:38, 1920×1080, 60 к/с, 12 глав, голос + вставки из сериала в дубляже + музыка и шумы (звук уже сведён, −14 LUFS).

Каждая глава — страница `public/christopher/chapter.html?ch=N` с canvas-движком (стол, полароиды, склейки, штампы, вставки).
Remotion открывает её во `<IFrame>` и на каждом кадре вызывает `renderAt(t)`; звук — `public/audio.m4a`.

## Что нужно
- Node.js 18 или новее (https://nodejs.org)
- ~3 ГБ свободного места

## Веб-интерфейс (Remotion Studio)

**Windows:** двойной щелчок по `studio.bat` (в первый раз сам выполнит `npm install`). Или в консоли: `npm install`, потом `npm start`.
Откроется браузер на http://localhost:3000:
- слева — композиции: `Christopher` (весь ролик) и `Chapter00` … `Chapter11` (по главам);
- в центре — просмотр, внизу — таймлайн с главами и звуком (в Studio кадры рисуются без размытия движения — для скорости;
  при рендере качество полное);
- **Render** (справа внизу) — окно рендера: формат уже настроен (H.264, CRF 20, AAC 256k), выбери число потоков
  (Concurrency) и папку, нажми Render; ход рендера — во вкладке Jobs справа.

## Как отрендерить из консоли

1. Собери архив из частей: Windows — запусти `sobrat.bat`; macOS/Linux — `cat christopher_remotion.zip.0* > christopher_remotion.zip`. Распакуй `christopher_remotion.zip`.
2. В папке проекта:

       npm install
       npm run render

   `render` сначала запускает `prepare-clips`: он один раз распаковывает 136 клипов из `clips/` в JPEG-кадры
   (`public/christopher/assets/frames`, ~1,3 ГБ, 1–3 минуты; ffmpeg берётся из пакета Remotion, ставить ничего не нужно;
   клип перераспаковывается, только если его mp4 поменялся), потом рендерит в 8 потоков → `out/christopher_final.mp4`.

Рендер 52 710 кадров идёт долго: на 8-поточном ПК примерно 1,5–2,5 часа. Если потоков меньше 8 — поменяй `--concurrency=8`
в `package.json` (в конфиг число потоков не прописано специально, иначе рендер ломается на слабых машинах), или запусти:

    npm run prepare-clips
    npx remotion render Christopher out/christopher_final.mp4 --concurrency=4

Проверочный кадр: `npm run still` → `out/still.jpg`.

## Как устроено
- Сцены рисует собственный canvas-движок (без React): `public/christopher/chapter.html?ch=N` + `window.renderAt(t)` — детерминированный кадр на момент `t`.
- Remotion — только рендерер: `src/Chapter.jsx` ставит `<IFrame>` со страницей главы и на каждом кадре вызывает `renderAt`
  (`delayRender` → `continueRender`); `src/Film.jsx` ставит 13 глав подряд и общий звук `public/audio.m4a` (не обрезается).
- Клипы в движке — последовательности JPEG, не видео; WebGL и эффекты Remotion не используются (всё — canvas 2D).
- Шрифты лежат в проекте (Inter Display, DejaVu Sans Mono, Oswald, Caveat), системные не нужны.
- Каждый план держится на экране минимум 2 с.

## Посмотреть и отрендерить кусок
- `npm start` — Remotion Studio в браузере (перемотка медленная: каждый кадр рисуется заново).
- Отдельная глава со своим куском звука: `npx remotion render Chapter05 out/ch05.mp4` (Chapter00 … Chapter11).
- Диапазон кадров: `npx remotion render Christopher out/part.mp4 --frames=0-3599`.

## Главы
| № | Глава | Начало |
|---|---|---|
| 00 | Вступление | 0:00 |
| 01 | Напарник | 0:53 |
| 02 | Отец | 1:51 |
| 03 | Туко | 2:39 |
| 04 | Гектор | 3:25 |
| 05 | Таблетки | 3:56 |
| 06 | Поводок | 4:49 |
| 07 | Лало | 5:32 |
| 08 | Ворота | 6:32 |
| 09 | Беглец | 7:43 |
| 10 | Признание | 8:50 |
| 11 | Вердикт | 9:48 |
| 12 | Финал | 10:49 |

Тексты для публикации (название, описание, теги, таймкоды) — `YOUTUBE.md`, обложка — `preview.jpg`.
