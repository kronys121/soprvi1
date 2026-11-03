// 07 · МИНЕРАЛЫ  (insert: "Это же камни, Хэнк! — Это минералы!")
CH_V0 = 426.7;
const [T_START, T_END] = chRange(7);
function buildScenes() {
  const D = [0, 0]; divider(D, 7, 'МИНЕРАЛЫ', T_START);
  hold(T_START, Wt('выжил') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · he survived, but the doctors say he may never walk again
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('familywait', Wt('врачи') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 100, off: 2, caption: capt('ВРАЧИ', Wt('говорят')), capSize: 26 });
  const dx = card({ x: A1[0] + 560, y: A1[1] - 40, w: 480, h: 300, rot: .03, order: 110, color: '#f3efe2', lined: false, tIn: Wt('может') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 24px ${MONO}`; g.textAlign = 'left'; g.fillText('ПРОГНОЗ:', -200, -90); drawTyped(g, it.a, t, -200, -20, `800 36px ${SANS}`, RED); drawTyped(g, it.b, t, -200, 40, `800 36px ${SANS}`, RED); } });
  dx.a = typed('МОЖЕТ НИКОГДА', Wt('никогда') - .3, .04); dx.b = typed('НЕ ХОДИТЬ', Wt('ходить') - .3, .05);
  goTo(A1, Wt('выжил') + .2, Wt('врачи') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('врачи') - .1, Wt('может') + .2, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('ходить') + .3, A1[0] + 520, A1[1] - 40, 1.12, .015);

  // S2 · a different Hank: in bed, won't get up, snaps at Marie who nurses him day and night, refuses rehab, pushes everyone away
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .9);
  pw('hankrehab', Wt('грубит') - .5, { x: A2[0] - 560, y: A2[1] - 40, w: 520, rot: -.04, order: 200, off: 4, caption: capt('МАРИ · ДЕНЬ И НОЧЬ', Wt('ночью') - .2), capSize: 22 });
  const bd = card({ x: A2[0] + 280, y: A2[1] - 60, w: 620, h: 420, rot: .02, order: 210, lined: true, tIn: Wt('другого') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('ДРУГОЙ ХЭНК:', -270, -150); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  bd.cl = [checkLine('НЕ ХОЧЕТ ВСТАВАТЬ', Wt('вставать') + .1, 'v', -250, -70), checkLine('ГРУБИТ МАРИ', Wt('грубит') + .3, 'v', -250, 0), checkLine('ОТКАЗ ОТ РЕАБИЛИТАЦИИ', Wt('реабилитации') + .1, 'v', -250, 70), checkLine('ОТТАЛКИВАЕТ ВСЕХ', Wt('всех') + .1, 'v', -250, 140)];
  card({ x: A2[0], y: A2[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, scrawls: [scrawl('не святой мученик — и в этом честность', Wt('честность') - .4, .8, { size: 44, rot: -.03 })] });
  goTo(A2, Wt('ходить') + .7, Wt('видим') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('видим') + .1, Wt('кровати') + .3, A2[0] + 280, A2[1] - 60, 1.05, .01, { dz: .05 });
  camKey(Wt('грубит') + .1, A2[0] - 540, A2[1] - 40, 1.05, -.015); camKey(Wt('реабилитации') + .1, A2[0] + 300, A2[1] + 20, 1.08, .015);
  camKey(Wt('честность') + .3, A2[0], A2[1] + 260, .88, 0); camKey(Wt('мученика') + .3, A2[0], A2[1] + 280, .92, 0);

  // S3 · how helplessness humiliates a proud man: easier to be angry than to admit he needs help
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const ph = card({ x: A3[0] - 100, y: A3[1] - 40, w: 880, h: 420, rot: -.015, order: 300, lined: false, tIn: Wt('показывает') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -380, -130, `800 44px ${SANS}`, INK); drawTyped(g, it.b, t, -380, -60, `700 30px ${MONO}`, INK); drawTyped(g, it.c, t, -380, 10, `800 44px ${SANS}`, RED);
      drawTyped(g, it.d, t, -380, 110, `700 28px ${MONO}`); drawTyped(g, it.e, t, -380, 160, `700 28px ${MONO}`, '#888'); } });
  ph.a = typed('ГОРДЫЙ ЧЕЛОВЕК', Wt('гордого') - .1, .04); ph.b = typed('унижен', Wt('унижает') - .1, .05); ph.c = typed('БЕСПОМОЩНОСТЬЮ', Wt('беспомощность') - .1, .04);
  ph.d = typed('злиться — легче', Wt('злиться') - .3, .04); ph.e = typed('признать, что нужна помощь — нет', Wt('помощь') - .6, .03);
  goTo(A3, Wt('мученика') + .5, Wt('показывает') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('показывает') + .1, Wt('беспомощность') + .6, A3[0] - 200, A3[1] - 100, 1.08, -.015, { dz: .05 });
  camKey(Wt('помощь') + .3, A3[0] - 120, A3[1] + 80, 1.08, -.01);

  // S4 · treatment costs a fortune; Skyler's story: Walt won at cards — the best doctors, paid for with meth money
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const bl = card({ x: A4[0] - 520, y: A4[1] - 100, w: 520, h: 400, rot: -.03, order: 400, color: '#eef0e6', lined: false, tIn: Wt('лечение') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 26px ${MONO}`; g.textAlign = 'left'; g.fillText('СЧЁТ ЗА ЛЕЧЕНИЕ', -220, -140);
      drawTyped(g, it.a, t, -220, -70, `800 48px ${MONO}`, INK); drawTyped(g, it.b, t, -220, 0, `700 26px ${MONO}`, '#666'); drawTyped(g, it.c, t, -220, 80, `700 28px ${MONO}`, '#2c5a2a'); drawTyped(g, it.d, t, -220, 140, `700 26px ${MONO}`, INK); } });
  bl.a = typed('$ $ $ $', Wt('огромных') - .1, .1); bl.b = typed('страховка: не всё', Wt('страховка') - .1, .04); bl.c = typed('оплачено: Уолтер', Wt('скайлер') - .1, .04); bl.d = typed('«выигрыш в карты»', Wt('выигрышей') - .2, .04);
  const rh = pw('rehab', Wt('лечат') - .5, { x: A4[0] + 360, y: A4[1] - 80, w: 720, rot: .02, order: 410, off: 1, caption: capt('ЛУЧШИЕ СПЕЦИАЛИСТЫ', Wt('специалисты') - .3), capSize: 24 });
  rh.stamps = [stamp('НА ДЕНЬГИ ОТ МЕТА', Wt('метамфетамина') - .4, { x: 0, y: 80, size: 54, rot: -.07, shake: 16 })];
  card({ x: A4[0] - 100, y: A4[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('встаёт на ноги благодаря самому крупному из них', Wt('встаёт') - .2, 1.0, { size: 40, rot: -.03 })] });
  goTo(A4, Wt('помощь') + .7, Wt('лечение') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('лечение') + .1, Wt('=всё') + .3, A4[0] - 520, A4[1] - 100, 1.1, -.015, { dz: .05 });
  camKey(Wt('карты') + .3, A4[0] - 480, A4[1] + 20, 1.1, -.01); camKey(Wt('лечат') + .2, A4[0] + 360, A4[1] - 80, 1.02, .015); camKey(Wt('метамфетамина') + .3, A4[0] + 360, A4[1] - 40, 1.12, .015);
  camKey(Wt('встаёт') + .3, A4[0], A4[1] + 220, .86, 0); camKey(Wt('них') + .4, A4[0], A4[1] + 240, .9, 0);

  // S5 · learning to walk, he orders minerals online; box after box; "they're minerals" (original dub) — a need to control something
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('mineralnight', Wt('=пока') - .2, { x: A5[0] - 620, y: A5[1] - 180, w: 480, rot: -.05, order: 500, off: 4, caption: capt('МИНЕРАЛЫ ИЗ ИНТЕРНЕТА', Wt('интернете')), capSize: 20 });
  pw('mineralbox', Wt('коробки') - .4, { x: A5[0] - 620, y: A5[1] + 240, w: 480, rot: .04, order: 505, off: 4, caption: capt('КОРОБКА ЗА КОРОБКОЙ', Wt('другой') - .2), capSize: 20 });
  dlgShot('d_minerals', A5[0] + 180, A5[1] - 20, { w: 900, order: 510 });
  const ct = card({ x: A5[0] + 180, y: A5[1] + 440, w: 760, h: 160, rot: -.015, order: 520, lined: false, tIn: Wt('смешная') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -340, -20, `700 28px ${MONO}`); drawTyped(g, it.b, t, -340, 40, `800 36px ${SANS}`, RED); } });
  ct.a = typed('жизнь разваливается —', Wt('собственная') - .2, .03); ct.b = typed('НУЖНО ХОТЬ ЧТО-ТО КОНТРОЛИРОВАТЬ', Wt('контролировать') - .6, .025);
  goTo(A5, Wt('них') + .5, Wt('=пока') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('=пока') + .1, Wt('минералы') + .3, A5[0] - 600, A5[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('коробки') + .2, A5[0] - 600, A5[1] + 220, 1.08, .015);
  camKey(DLGT.d_minerals + .1, A5[0] + 180, A5[1] - 20, 1.08, 0); camKey(DLGT.d_minerals + 4.2, A5[0] + 180, A5[1], 1.15, .01);
  camKey(Wt('контролировать') + .2, A5[0] + 180, A5[1] + 300, 1.0, -.01); camKey(T_END, A5[0] + 180, A5[1] + 320, 1.08, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
