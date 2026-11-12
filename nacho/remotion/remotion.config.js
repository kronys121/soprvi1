import { Config } from '@remotion/cli/config';
// кадры рисует canvas-движок внутри iframe; JPEG-скриншоты страницы, 60 fps
Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(92);
Config.setOverwriteOutput(true);
Config.setDelayRenderTimeoutInMilliseconds(180000);
