# Ролик «Досье: Начо Варга» под Remotion — для передачи в другой чат

Репозиторий: `kronys121/soprvi1`, ветка `claude/intelligent-brown-5dbah6`, папка `nacho/`.
Серия досье по «Во все тяжкие» / «Лучше звоните Солу». Голос — ElevenLabs (голос автора), вставки — оригинальный дубляж, графика — код.

## Главная идея
Сцены рисует собственный canvas-движок (HTML + JS, без React): страница `nacho/chapter.html?ch=N` с функцией `window.renderAt(t)`,
которая детерминированно рисует кадр на момент `t` секунд (стол-доска, полароиды с клипами, жёсткие склейки, штампы, подписи от руки,
крупные слова, вставки на весь экран как «найденная плёнка» с субтитрами). Remotion — только рендерер: в композиции `<IFrame>` со страницей,
на каждом кадре `delayRender` → `renderAt(t)` → `continueRender`. Звук — готовый микс одним файлом.

## Где что лежит
| Путь | Что это |
|---|---|
| `patient/engine.js` | ядро: слова озвучки `Wt()`, предметы на столе, камера, motion blur, штампы, нити |
| `patient/common.js` | карточки, папка главы `divider`, чек-листы |
| `patient/fx2.js` | монтаж v2: `seg/ck` (склейки), полароид, `slam` (слова на экран), `fullClip` (вставка-плёнка), `hand`, `dymo`, `flash`, `glitch`, предметы стола |
| `nacho/ncommon.js` | помощники ролика: `S()`/`buildShots` (план держится ≥ 2 с), `P()` (полароид + план), `note`, `faces`, `tape` (вставка дубляжа), `opener`, `dress` |
| `nacho/chapters/ch00…ch12.js` | **сцены по главам** — главное, что пишется под ролик (привязка к словам: `w('слово', n)`) |
| `nacho/timeline.js` | время голоса → время ролика: паузы перед главами (1.8 с), места вставок дубляжа, `chRange(k)` |
| `nacho/voice/` | `orig.mp3` + `result.json` (ElevenLabs) → `prep_voice.py` вырезает паузы → `result.mp3`, `words.json` |
| `nacho/picks.txt`, `dlg.txt` | клипы из серий (`ключ серия начало длина`) и вставки дубляжа; `make_media.py`, `extract_media.py` режут их из прокси серий |
| `nacho/audio_film.py` | звук: гитара (Karplus-Strong, ля минор), фоли по событиям `sfx/chNN.json`, комната, голос, вставки, дакинг → `mix_film.wav` |
| `nacho/tools/` | `make_remotion.sh` (сборка пакета), `shots.js` (короткие планы), `grid.py`, `mosaic.sh` (проверочные листы) |
| `nacho/remotion/` | **проект Remotion** (то, что отдаётся автору на рендер) |
| `nacho_remotion/` | готовый архив проекта частями по 96 МБ + `sobrat.bat` |
| `thumb/make_thumb.py` | превью: слово за человеком (rembg), фото автора без приближения |

## Проект Remotion (`nacho/remotion/`)
- `src/Chapter.jsx` — `<IFrame src=staticFile('nacho/chapter.html')+'?ch=N'>`, ждёт `window.ready`, на кадр вызывает `renderAt(t0 + frame/60)`.
- `src/Film.jsx` — 13 `<Sequence>` подряд + `<Audio src=audio.m4a>` (не обрезается); `OneChapter` — глава со своим куском звука.
- `src/chapters.json` — начало и длина каждой главы в кадрах (из `timeline.js`).
- `tools/make_remotion.sh` собирает `public/` (страница + движок + шрифты Inter Display/DejaVu Sans Mono/Oswald/Caveat, кадры-стоп, звук −14 LUFS)
  и `clips/` (кадры клипов → короткие mp4).
- `scripts/prepare-clips.mjs` — на ПК автора режет `clips/*.mp4` обратно в jpg ffmpeg'ом из `node_modules/@remotion/compositor-*/`, пересобирает клип, если mp4 поменялся.
- Автор запускает: `npm install` → `npm run render` (= `prepare-clips` + `remotion render … --concurrency=8`) → `out/nacho_final.mp4`.

## Учтено
- Нет WebGL/эффектов Remotion, нет `<Video>` — только canvas 2D и последовательности jpg.
- Встроенный ffmpeg Remotion без фильтров: клипы уже 960×540 с нужной частотой, при распаковке фильтры не нужны.
- Потоки — флагом в `npm run render`, не в конфиге.
- Голос не обрезается; каждый план держится ≥ 2 с; шрифты в пакете.

## Как пересобрать после правок
1. Правка глав → проверочные кадры: `node render_main.js "chapter.html?ch=N" --stills dir t1,t2…`, `node tools/shots.js`.
2. Изменился таймлайн → пересобрать события звука (`node render_main.js "chapter.html?ch=N" --sfx sfx/chNN.json` для всех глав) и `python3 audio_film.py`.
3. `tools/make_remotion.sh` → проверить `npx remotion still Nacho … --browser-executable=/opt/pw-browsers/chromium_headless_shell-*/chrome-linux/headless_shell`.
4. Заархивировать `remotion/` без `node_modules`, `out`, кадров клипов → `nacho_remotion/` частями + `sobrat.bat`.
