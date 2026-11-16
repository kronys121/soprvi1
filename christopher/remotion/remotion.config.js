import { Config } from '@remotion/cli/config';
// Defaults for both `npm run render` and the Render button in Remotion Studio (web UI).
// Кадры рисует canvas-движок внутри iframe; число потоков не задаётся здесь специально
// (на машинах с <8 ядрами это ломает рендер) — выбери его в окне Render или во флаге --concurrency.
Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(92);
Config.setCodec('h264');
Config.setCrf(20);
Config.setAudioCodec('aac');
Config.setAudioBitrate('256k');
Config.setOverwriteOutput(true);
Config.setDelayRenderTimeoutInMilliseconds(180000);
Config.setStudioPort(3000);
