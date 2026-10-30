// 14 · ВЕРДИКТ
CH_V0 = 982.5;
const [T_START, T_END] = chRange(14);
function buildScenes() {
  const D = [0, 0]; divider(D, 14, 'ВЕРДИКТ', T_START);
  hold(T_START, Wt('умер') - .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · so when did Jimmy McGill die? four candidates on the board
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2200, 1);
  const hq = card({ x: A1[0], y: A1[1] - 470, w: 900, h: 130, rot: -.01, order: 100, lined: false, tIn: Wt('умер') - .4, dur: .3, enter: 'slide', dx: 0, dy: -300,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 15, `800 44px ${SANS}`, INK, 'center') });
  hq.a = typed('КОГДА УМЕР ДЖИММИ МАКГИЛЛ?', Wt('умер') - .2, .035);
  const cand = [['dadstore', 'МАГАЗИН ОТЦА', Wt('может'), -470, -120, 2], ['chuckcold', '«НЕ ТАК УЖ МНОГО»', Wt('может', 2), 470, -120, 4],
    ['speech4', 'КОМИССИЯ: ИГРАТЬ ГОРЕ', Wt('может', 3), -470, 300, 6], ['lalo', 'ХОВАРД НА ПОЛУ', Wt('может', 4), 470, 300, 6]];
  cand.forEach(([k, c, tm, dx, dy, off], i) => pw(k, tm - .3, { x: A1[0] + dx, y: A1[1] + dy, w: 520, rot: [-.04, .03, .03, -.04][i], order: 110 + i, off, caption: capt(c + ' ?', tm + .4), capSize: 20 }));
  goTo(A1, Wt('умер') - .2, Wt('макгилл') + .2, A1[0] - 760, A1[1] - 700);
  hold(Wt('макгилл') + .2, Wt('может') + .3, A1[0], A1[1] - 320, .9, -.01, { dz: .03 });
  camKey(Wt('может') + .5, A1[0] - 470, A1[1] - 120, 1.08, -.015); camKey(Wt('может', 2) + .4, A1[0] + 470, A1[1] - 120, 1.08, .015);
  camKey(Wt('может', 3) + .4, A1[0] - 470, A1[1] + 300, 1.08, -.015); camKey(Wt('может', 4) + .4, A1[0] + 470, A1[1] + 300, 1.08, .015);
  camKey(Wt('гостиной') + .4, A1[0] + 470, A1[1] + 300, 1.15, .015);

  // S2 · the finale's answer: Jimmy didn't die — alive under Saul's suit; Saul was a painkiller, not a villain
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const ans = card({ x: A2[0] - 200, y: A2[1] - 60, w: 880, h: 480, rot: -.015, order: 200, lined: false, tIn: Wt('финал') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -400, -170, `700 30px ${MONO}`); drawTyped(g, it.b, t, -400, -90, `800 52px ${SANS}`, RED); drawTyped(g, it.c, t, -400, -20, `700 30px ${MONO}`);
      drawTyped(g, it.d, t, -400, 60, `700 30px ${MONO}`); drawPen(g, it.p, t); drawTyped(g, it.e, t, -400, 130, `800 42px ${SANS}`); drawTyped(g, it.f, t, -400, 190, `700 26px ${MONO}`, '#555'); } });
  ans.a = typed('ответ финала:', Wt('финал') - .1, .04); ans.b = typed('ДЖИММИ НЕ УМЕР', Wt('умер', 2) - .5, .04); ans.c = typed('жив — под костюмом Сола', Wt('жив') - .2, .03);
  ans.d = typed('Сол = злодей', Wt('злодеем') - .5, .04); ans.p = pen([[-250, 60], [-150, 56]], Wt('обезболивающим') - .2, .25, { width: 7 }); ans.e = typed('Сол = ОБЕЗБОЛИВАЮЩЕЕ', Wt('обезболивающим') - .1, .035);
  ans.f = typed('вина: брат · Ховард · Ким', Wt('вину') - .2, .03);
  pw('saulface', Wt('костюмом') - .4, { x: A2[0] + 640, y: A2[1] - 20, w: 420, rot: .05, order: 210 });
  goTo(A2, Wt('гостиной') + 1.0, Wt('финал') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('финал') + .1, Wt('годы') + .3, A2[0] - 200, A2[1] - 140, 1.05, -.015, { dz: .05 });
  camKey(Wt('костюмом') + .2, A2[0] + 200, A2[1] - 20, .92, .01); camKey(Wt('способом') + .2, A2[0] - 200, A2[1] + 100, 1.08, -.01); camKey(Wt('ким') + .5, A2[0] - 200, A2[1] + 140, 1.15, -.01);

  // S3 · he gave Saul up — not for freedom or money, for the one person he was ashamed before; to be seen as real
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, .95);
  const gv = card({ x: A3[0] - 560, y: A3[1] - 60, w: 520, h: 380, rot: -.03, order: 300, lined: true, tIn: Wt('отказаться') - .5, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('ОТКАЗАЛСЯ ОТ СОЛА РАДИ:', -230, -140); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  gv.cl = [checkLine('СВОБОДЫ', Wt('свободы') + .1, 'x', -210, -60), checkLine('ДЕНЕГ', Wt('денег') + .1, 'x', -210, 20), checkLine('ОДНОГО ЧЕЛОВЕКА', Wt('человека') + .1, 'v', -210, 100)];
  const kc = pw('kimcourt', Wt('одного') - .4, { x: A3[0] + 300, y: A3[1] - 20, w: 760, rot: .015, order: 310, off: 2 });
  card({ x: A3[0] + 300, y: A3[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('увидела его настоящим', Wt('увидела') - .2, .7, { size: 54, rot: -.04 })] });
  goTo(A3, Wt('ким') + 1.0, Wt('отказаться') - .3, A3[0] - 860, A3[1] - 460);
  hold(Wt('отказаться') - .3, Wt('денег') + .4, A3[0] - 560, A3[1] - 60, 1.08, -.015, { dz: .05 });
  camKey(Wt('одного') + .2, A3[0] + 300, A3[1] - 20, 1.0, .015); camKey(Wt('стыдно') + .3, A3[0] + 300, A3[1], 1.12, .01); camKey(Wt('настоящим') + .4, A3[0] + 300, A3[1] + 200, .95, 0);

  // S4 · Saul vs Walter: Heisenberg to the end, a confession out of pride; Jimmy's confession is shame — and shame won
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('waltface', Wt('уолтера') - .3, { x: A4[0] - 600, y: A4[1] - 160, w: 460, rot: -.04, order: 400, caption: capt('ХАЙЗЕНБЕРГ', Wt('хайзенбергом')), capSize: 24 });
  pw('saultalk', Wt('признание', 2) - .4, { x: A4[0] + 600, y: A4[1] - 160, w: 460, rot: .04, order: 405, off: 5, caption: capt('ДЖЕЙМС МАКГИЛЛ', Wt('стыда') - .3), capSize: 24 });
  const vs = card({ x: A4[0], y: A4[1] + 320, w: 900, h: 300, rot: -.01, order: 410, lined: false, tIn: Wt('признание') - .4, dur: .3, enter: 'slide', dx: 0, dy: 400,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -120); g.lineTo(0, 60); g.stroke();
      drawTyped(g, it.a, t, -225, -70, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, -225, 0, `800 52px ${SANS}`, '#888', 'center');
      drawTyped(g, it.c, t, 225, -70, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.d, t, 225, 0, `800 52px ${SANS}`, RED, 'center'); drawTyped(g, it.e, t, 0, 115, `800 34px ${SANS}`, INK, 'center'); } });
  vs.a = typed('признание Уолтера', Wt('признание') - .1, .03); vs.b = typed('ГОРДОСТЬ', Wt('гордости') - .3, .05);
  vs.c = typed('признание Джимми', Wt('признание', 2) - .1, .03); vs.d = typed('СТЫД', Wt('стыда') - .2, .07); vs.e = typed('стыд оказался сильнее гордости', Wt('=стыд') - .1, .03);
  goTo(A4, Wt('настоящим') + 1.0, Wt('отличие') - .2, A4[0] - 860, A4[1] - 460);
  hold(Wt('отличие') - .2, Wt('уолтера') + .2, A4[0] - 300, A4[1] - 60, .95, -.01, { dz: .03 });
  camKey(Wt('хайзенбергом') + .2, A4[0] - 560, A4[1] - 160, 1.08, -.015); camKey(Wt('скайлер') + .2, A4[0] - 225, A4[1] + 240, 1.05, -.01);
  camKey(Wt('признание', 2) + .2, A4[0] + 500, A4[1] - 60, 1.0, .015); camKey(Wt('=стыд') + .2, A4[0], A4[1] + 320, 1.05, 0); camKey(Wt('гордости', 2) + .3, A4[0], A4[1] + 340, 1.12, .01);

  // S5 · Chuck said people don't change; the show seemed to prove him right — the last ten minutes proved him wrong
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('chuckface', Wt('чак', 2) - .4, { x: A5[0] - 600, y: A5[1] - 120, w: 460, rot: -.04, order: 500, off: 4, caption: capt('«ЛЮДИ НЕ МЕНЯЮТСЯ»', Wt('меняются') - .3), capSize: 22 });
  const ch = card({ x: A5[0] + 300, y: A5[1] - 60, w: 640, h: 420, rot: .02, order: 510, lined: false, tIn: Wt('весь') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -280, -130, `700 28px ${MONO}`); drawTyped(g, it.b, t, -280, -70, `800 44px ${SANS}`, '#888'); drawPen(g, it.p, t);
      drawTyped(g, it.c, t, -280, 20, `700 28px ${MONO}`); drawTyped(g, it.d, t, -280, 90, `800 50px ${SANS}`, RED); } });
  ch.a = typed('весь сериал:', Wt('весь') - .1, .04); ch.b = typed('ЧАК ПРАВ', Wt('=прав') - .3, .05); ch.p = pen([[-290, -70], [-20, -76]], Wt('ошибался') - .1, .3, { width: 8 });
  ch.c = typed('последние 10 минут:', Wt('последние') - .1, .03); ch.d = typed('ЧАК ОШИБАЛСЯ', Wt('ошибался') + .1, .05);
  goTo(A5, Wt('гордости', 2) + .9, Wt('чак', 2) + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('чак', 2) + .1, Wt('меняются') + .3, A5[0] - 600, A5[1] - 120, 1.08, -.015, { dz: .05 });
  camKey(Wt('весь') + .2, A5[0] + 300, A5[1] - 60, 1.05, .015); camKey(Wt('ошибался') + .5, A5[0] + 300, A5[1] + 20, 1.15, .015);

  // S6 · 86 years in prison — and maybe the only truly happy ending in the whole Breaking Bad universe
  const A6 = [6800, 950]; lamp(A6[0], A6[1] - 200, 2100, 1.05);
  pw('finger', Wt('восемьдесят') - .4, { x: A6[0] - 60, y: A6[1] - 60, w: 860, rot: -.01, order: 600, off: 6 });
  const he = card({ x: A6[0] - 60, y: A6[1] + 420, w: 820, h: 160, rot: -.015, order: 610, lined: false, tIn: Wt('восемьдесят') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -370, -25, `700 30px ${MONO}`); drawTyped(g, it.b, t, -370, 45, `800 40px ${SANS}`, RED); } });
  he.a = typed('86 лет тюрьмы =', Wt('восемьдесят') - .1, .04); he.b = typed('СЧАСТЛИВЫЙ КОНЕЦ', Wt('счастливый') - .1, .05);
  goTo(A6, Wt('ошибался') + 1.0, Wt('восемьдесят') + .1, A6[0] - 860, A6[1] - 460);
  camKey(Wt('восемьдесят') + .2, A6[0] - 60, A6[1] - 60, 1.0, 0); camKey(Wt('счастливый') + .2, A6[0] - 60, A6[1] + 200, .92, -.01); camKey(T_END, A6[0] - 60, A6[1] + 160, 1.05, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
