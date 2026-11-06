// 13 · ДЕВЯТЬ  (insert: Mike — "мои люди… я плачу им, потому что так правильно")
CH_V0 = 682.5;
const [T_START, T_END] = chRange(13);
function buildScenes() {
  const D = [0, 0]; divider(D, 13, 'ДЕВЯТЬ', T_START);
  hold(T_START, Wt('остаются') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · obligations: nine of his men in prison; they know everything — and stay silent, because Mike pays them every month
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const nn = card({ x: A1[0] - 420, y: A1[1] - 40, w: 640, h: 440, rot: -.02, order: 100, lined: false, tIn: Wt('девять') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { const k = Math.max(0, Math.min(9, Math.floor((t - it.t0) / .12)));
      g.font = `800 120px ${SANS}`; g.fillStyle = RED; g.textAlign = 'center'; if (t >= it.t0) g.fillText(String(k), -170, -40);
      g.font = `700 26px ${MONO}`; g.fillStyle = INK; g.textAlign = 'left'; if (t >= it.t0 + .3) g.fillText('ЛЮДЕЙ', -80, -80); if (t >= it.t1) g.fillText('В ТЮРЬМЕ', -80, -30);
      drawChecks(g, t, it.cl, `700 24px ${MONO}`); } });
  nn.t0 = Wt('девять') - .1; nn.t1 = Wt('тюрьме') - .1;
  nn.cl = [checkLine('ЗНАЮТ ВСЁ', Wt('знают') + .1, 'v', -260, 70), checkLine('МОЛЧАТ', Wt('молчат') + .1, 'v', -260, 140)];
  pw('nineman', Wt('сидят') - .3, { x: A1[0] + 560, y: A1[1] - 100, w: 480, rot: .04, order: 110, off: 2 });
  pw('moneycount', Wt('платит') - .4, { x: A1[0] + 560, y: A1[1] + 280, w: 480, rot: -.03, order: 120, off: 2, caption: capt('КАЖДЫЙ МЕСЯЦ', Wt('месяц')), capSize: 22 });
  goTo(A1, Wt('остаются') + .2, Wt('девять') - .3, A1[0] - 760, A1[1] - 400);
  hold(Wt('девять') - .3, Wt('молчат') + .3, A1[0] - 300, A1[1] - 20, 1.0, -.015, { dz: .05 });
  camKey(Wt('платит') + .1, A1[0] + 540, A1[1] + 260, 1.05, .015);

  // S2 · "издержки наследства" (original dub: Mike insists on paying his men)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .9);
  const lg = card({ x: A2[0] - 620, y: A2[1] - 300, w: 1, h: 1, shadow: 0, lit: false, order: 190, tIn: 0, scrawls: [scrawl('«издержки наследства»', Wt('издержки') - .2, .8, { size: 46, rot: -.05 })] });
  dlgShot('d_mymen', A2[0] + 100, A2[1] - 20, { w: 940, order: 200 });
  goTo(A2, Wt('семьям') + .3, Wt('называет') - .1, A2[0] - 860, A2[1] - 440);
  camKey(Wt('называет') + .2, A2[0] - 300, A2[1] - 160, 1.0, -.01);
  camKey(DLGT.d_mymen + .1, A2[0] + 100, A2[1] - 20, 1.08, 0); camKey(DLGT.d_mymen + 38, A2[0] + 100, A2[1] + 40, 1.2, .01);

  // S3 · that's why he ties up with Walter; Lydia proposes to kill them — Mike refuses: he doesn't give up his own
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const wy = typedCard({ x: A3[0] - 520, y: A3[1] - 140, w: 520, h: 300, rot: -.03, order: 300, tIn: Wt('ради') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0 },
    [[typed('деньги нужны:', Wt('нужны') - .2, .04), -220, -80, `700 26px ${MONO}`, '#888'], [typed('— для Кейли', Wt('кейли') - .2, .04), -220, -20, `800 32px ${SANS}`], [typed('— для тех, кто доверился', Wt('доверился') - .5, .03), -220, 40, `800 32px ${SANS}`]]);
  pw('lydialist', Wt('лидия') - .4, { x: A3[0] + 300, y: A3[1] - 80, w: 680, rot: .02, order: 310, off: 2, caption: capt('ЛИДИЯ: «УБРАТЬ ИХ»', Wt('убрать')), capSize: 24 });
  const nr = card({ x: A3[0] - 500, y: A3[1] + 300, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  nr.s = stamp('СВОИХ НЕ СДАЁТ', Wt('сдаёт') - .1, { size: 64, rot: -.06, shake: 16 });
  goTo(A3, DLGT.d_mymen + 38.2, Wt('ради') - .2, A3[0] - 860, A3[1] - 460);
  hold(Wt('ради') - .2, Wt('лидия') - .3, A3[0] - 520, A3[1] - 140, 1.08, -.015, { dz: .05 });
  camKey(Wt('лидия') + .1, A3[0] + 300, A3[1] - 80, 1.02, .015); camKey(Wt('отказывается') + .1, A3[0] - 200, A3[1] + 160, .92, 0);

  // S4 · even cornered, even when a deal could save him — not one name; for Walter people are pieces, for Mike — obligations
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('mikeface3', Wt('прижимают') - .5, { x: A4[0] - 560, y: A4[1] - 140, w: 480, rot: -.05, order: 400, off: 2, caption: capt('НИ ОДНОГО ИМЕНИ', Wt('имени') - .3), capSize: 22 });
  const cm = card({ x: A4[0] + 300, y: A4[1] - 40, w: 820, h: 380, rot: .015, order: 410, lined: false, tIn: Wt('поймёт') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.strokeStyle = '#999'; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -150); g.lineTo(0, 150); g.stroke();
      drawTyped(g, it.a, t, -200, -100, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -200, 10, `700 28px ${MONO}`, '#666', 'center');
      drawTyped(g, it.c, t, 200, -100, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.d, t, 200, 10, `800 30px ${SANS}`, RED, 'center'); } });
  cm.a = typed('УОЛТЕР', Wt('уолтера') - .1, .05); cm.b = typed('фигуры на доске', Wt('фигуры') - .1, .04); cm.c = typed('МАЙК', Wt('майка', 2) - .1, .05); cm.d = typed('ОБЯЗАТЕЛЬСТВА', Wt('обязательства', 2) - .2, .04);
  goTo(A4, Wt('сдаёт') + .7, Wt('прижимают') - .3, A4[0] - 860, A4[1] - 460);
  hold(Wt('прижимают') - .3, Wt('имени') + .3, A4[0] - 560, A4[1] - 140, 1.08, -.015, { dz: .05 });
  camKey(Wt('поймёт') + .1, A4[0] + 300, A4[1] - 40, 1.02, .015);

  // S5 · irony: these nine names will be the cause of his death
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1800, .8);
  const nm = card({ x: A5[0] - 100, y: A5[1] - 20, w: 760, h: 420, rot: -.02, order: 500, lined: true, tIn: Wt('ирония') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { g.font = `700 24px ${MONO}`; g.textAlign = 'left';
      for (let i = 0; i < 9; i++) { if (t < it.t0 + i * .18) break; g.fillStyle = INK; g.fillText(`${i + 1}. ███████ ██████`, -320 + (i >= 5 ? 360 : 0), -150 + (i % 5) * 50); }
      drawTyped(g, it.b, t, 0, 150, `800 40px ${SANS}`, RED, 'center'); } });
  nm.t0 = Wt('девять', 2) - .4; nm.b = typed('ПРИЧИНА ЕГО СМЕРТИ', Wt('причиной') - .2, .04);
  goTo(A5, Wt('обязательства', 2) + .8, Wt('ирония') - .2, A5[0] - 860, A5[1] - 460);
  hold(Wt('ирония') - .2, T_END, A5[0] - 100, A5[1] - 20, 1.02, -.01, { dz: .1 });

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
