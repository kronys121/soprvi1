// 10 · ТУАЛЕТ  (insert: flashback audio over Hank's face: "Посвящено W.W.... Уолтер Уайт? — Ты меня раскусил.")
CH_V0 = 621.2;
const [T_START, T_END] = chRange(10);
function buildScenes() {
  const D = [0, 0]; divider(D, 10, 'ТУАЛЕТ', T_START);
  hold(T_START, Wt('сезон') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · season five: Gus dead, Hank head of the office, back on his feet; life is good; the family at Walt's pool
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1.05);
  const ok = card({ x: A1[0] - 560, y: A1[1] - 60, w: 480, h: 380, rot: -.03, order: 100, lined: true, tIn: Wt('гус') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('5 СЕЗОН:', -200, -130); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  ok.cl = [checkLine('ГУС МЁРТВ', Wt('мёртв') + .1, 'v', -180, -50), checkLine('НАЧАЛЬНИК ОТДЕЛА', Wt('начальником') + .3, 'v', -180, 20), checkLine('СНОВА НА НОГАХ', Wt('ногах') + .1, 'v', -180, 90)];
  pw('poolparty', Wt('жизнь') - .4, { x: A1[0] + 300, y: A1[1] - 20, w: 760, rot: .015, order: 110, off: 3, caption: capt('СЕМЬЯ У УОЛТЕРА ВО ДВОРЕ', Wt('дворе')), capSize: 24 });
  goTo(A1, Wt('сезон') + .2, Wt('гус') - .1, A1[0] - 860, A1[1] - 400);
  hold(Wt('гус') - .1, Wt('ногах') + .4, A1[0] - 560, A1[1] - 60, 1.08, -.015, { dz: .05 });
  camKey(Wt('налаживается') + .2, A1[0] + 300, A1[1] - 20, 1.0, .015); camKey(Wt('дворе') + .4, A1[0] + 300, A1[1], 1.1, .015);

  // S2 · in the bathroom he picks up a book: Leaves of Grass; the inscription "To my other favorite W.W." — signed Gale
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .9);
  pw('hanktoilet', Wt('заходит') - .4, { x: A2[0] - 620, y: A2[1] - 180, w: 480, rot: -.05, order: 200, off: 2, caption: capt('ТУАЛЕТ', Wt('туалет')), capSize: 26 });
  pw('bookcover', Wt('листья') - .5, { x: A2[0] - 620, y: A2[1] + 240, w: 480, rot: .04, order: 205, off: 1, caption: capt('«ЛИСТЬЯ ТРАВЫ» · УИТМЕН', Wt('уитмена') - .3), capSize: 20 });
  const ins = card({ x: A2[0] + 260, y: A2[1] - 40, w: 760, h: 520, rot: .015, order: 210, color: '#f6f1e3', lined: false, tIn: Wt('первой') - .3, dur: .35, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -300, -150, `400 italic 36px "DejaVu Serif"`); drawTyped(g, it.b, t, -300, -80, `400 italic 36px "DejaVu Serif"`); drawTyped(g, it.c, t, -300, -10, `700 italic 54px "DejaVu Serif"`, RED);
      drawTyped(g, it.d, t, -300, 70, `400 italic 32px "DejaVu Serif"`); drawTyped(g, it.e, t, -300, 120, `400 italic 32px "DejaVu Serif"`); drawTyped(g, it.f, t, 120, 210, `400 italic 36px "DejaVu Serif"`); } });
  ins.a = typed('Моему другому', Wt('моему') - .1, .05, { silent: true }); ins.b = typed('любимому', Wt('любимому') - .1, .05, { silent: true }); ins.c = typed('W.W.', Wt('любимому') + .7, .12, { silent: true });
  ins.d = typed('Работать с тобой', Wt('работать') - .1, .04, { silent: true }); ins.e = typed('было честью.', Wt('честью') - .2, .05, { silent: true }); ins.f = typed('— Г. Б.', Wt('гейла') - .2, .08, { silent: true });
  goTo(A2, Wt('дворе') + .6, Wt('заходит') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('заходит') + .1, Wt('полистать') + .3, A2[0] - 600, A2[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('листья') + .1, A2[0] - 600, A2[1] + 220, 1.08, .015); camKey(Wt('надпись') + .1, A2[0] + 260, A2[1] - 40, 1.0, .01); camKey(Wt('гейла') + .5, A2[0] + 280, A2[1] - 20, 1.12, .015);

  // S3 · on the toilet, he recognises the handwriting; the whole picture assembles; then the past replays in his head (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1800, .85);
  pw('hankrealize', Wt('гейла') + .9, { x: A3[0] - 620, y: A3[1] - 180, w: 480, rot: -.05, order: 300, off: 1, caption: capt('ЭТОТ ПОЧЕРК', Wt('почерк')), capSize: 22 });
  const pz = card({ x: A3[0] - 620, y: A3[1] + 260, w: 480, h: 360, rot: .03, order: 305, lined: true, tIn: Wt('картинка') - .5, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 24px ${MONO}`) });
  pz.cl = [checkLine('ГОД ЗА ГОДОМ', Wt('годом') + .1, 'v', -200, -130), checkLine('УЖИН ЗА УЖИНОМ', Wt('ужином') + .1, 'v', -200, -70), checkLine('ДЕНЬГИ НА ЛЕЧЕНИЕ', Wt('лечение') + .1, 'v', -200, -10),
    checkLine('ПРОПАДАЛ ПО НОЧАМ', Wt('ночам') + .1, 'v', -200, 50), checkLine('«ТЫ МЕНЯ ПОЙМАЛ»', Wt('поймал') + .1, 'v', -200, 110)];
  dlgShot('d_toilet', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  goTo(A3, Wt('гейла') + .7, Wt('сидит') + .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('сидит') + .1, Wt('лице') + .3, A3[0] - 600, A3[1] - 160, 1.1, -.015, { dz: .06 });
  camKey(Wt('годом') + .1, A3[0] - 600, A3[1] + 240, 1.1, .015); camKey(Wt('поймал') + .3, A3[0] - 600, A3[1] + 260, 1.15, .015);
  camKey(DLGT.d_toilet + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_toilet + 24.7, A3[0] + 180, A3[1] + 40, 1.25, .01);

  // S4 · the greatest detective of the show solves the case of his life on the toilet: no chase, no evidence under a microscope — a book by the toilet
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const gd = card({ x: A4[0] - 100, y: A4[1] - 40, w: 900, h: 460, rot: -.015, order: 400, lined: true, tIn: Wt('величайший') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -400, -170, `700 28px ${MONO}`); drawTyped(g, it.b, t, -400, -110, `800 38px ${SANS}`, RED); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  gd.a = typed('величайший сыщик сериала', Wt('величайший') - .1, .03); gd.b = typed('ГЛАВНОЕ ДЕЛО ЖИЗНИ — В ТУАЛЕТЕ', Wt('туалете') - .6, .025);
  gd.cl = [checkLine('ПОГОНЯ', Wt('погони') + .1, 'x', -380, -20), checkLine('УЛИКА ПОД МИКРОСКОПОМ', Wt('микроскопом') + .1, 'x', -380, 50), checkLine('КНИГА У УНИТАЗА', Wt('унитазом') + .1, 'v', -380, 120)];
  card({ x: A4[0] - 100, y: A4[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 410, tIn: 0, scrawls: [scrawl('унизительно — и очень по-человечески', Wt('унизительного') - .2, .8, { size: 48, rot: -.03 })] });
  goTo(A4, DLGT.d_toilet + 24.9, Wt('величайший') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('величайший') + .1, Wt('празднике') + .3, A4[0] - 200, A4[1] - 140, 1.05, -.01, { dz: .05 });
  camKey(Wt('человеческого') + .3, A4[0] - 100, A4[1] + 220, .92, 0); camKey(Wt('погони') + .2, A4[0] - 150, A4[1] + 40, 1.05, -.01); camKey(T_END, A4[0] - 100, A4[1] + 100, 1.12, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
