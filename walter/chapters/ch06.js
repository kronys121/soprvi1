// 06 · СКАЖИ МОЁ ИМЯ  (two original-dialogue inserts: knocks, say my name)
CH_V0 = 380.2;
const [T_START, T_END] = chRange(6);
function buildScenes() {
  const D = [0, 0]; divider(D, 6, 'СКАЖИ МОЁ ИМЯ', T_START);
  hold(T_START, Wt('середине') - .1, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Skyler is afraid for him -> "I am the one who knocks" (original dub)
  const A1 = [2000, -100]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('skyler2', Wt('скайлер') - .2, { x: A1[0] - 700, y: A1[1] - 260, w: 440, rot: -.06, order: 100, caption: capt('«ТЫ В ОПАСНОСТИ»', Wt('боится')), capSize: 22 });
  const kn = dlgShot('d_knocks', A1[0] + 60, A1[1] + 20, { w: 1000, order: 110 });
  const ks = card({ x: A1[0] + 60, y: A1[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  ks.s = stamp('Я И ЕСТЬ ОПАСНОСТЬ', DLGT.d_knocks + 7.0, { size: 56, rot: -.06, shake: 16 });
  goTo(A1, Wt('середине') - .1, Wt('скайлер') + .1, A1[0] - 900, A1[1] - 450);
  hold(Wt('скайлер') + .1, Wt('сериала') + .1, A1[0] - 400, A1[1] - 120, .95, -.02, { dz: .06 });
  camKey(DLGT.d_knocks - .1, A1[0] + 60, A1[1] + 20, 1.12, 0); camKey(DLGT.d_knocks + 10.4, A1[0] + 60, A1[1] + 60, 1.32, .01);

  // S2 · season 5: no more mask -> "Say my name" (original dub)
  const A2 = [4500, -100]; lamp(A2[0], A2[1] - 200, 2000, 1);
  typedCard({ x: A2[0] - 760, y: A2[1] - 380, w: 460, h: 150, rot: -.04, order: 200, lined: false, tIn: Wt('пятом') - .2, dur: .3, enter: 'slide', dx: -400, dy: 0 }, [[typed('СЕЗОН 5', Wt('пятом'), .05), 0, 16, `700 48px ${MONO}`, INK, 'center']]);
  card({ x: A2[0] - 760, y: A2[1] - 200, w: 1, h: 1, shadow: 0, lit: false, order: 205, tIn: 0, scrawls: [scrawl('МАСКИ НЕТ', Wt('маски') - .05, .45, { size: 60, rot: -.05 })] });
  dlgShot('d_say', A2[0] + 80, A2[1] + 40, { w: 1000, order: 210 });
  const sm = card({ x: A2[0] + 80, y: A2[1] + 500, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sm.s = stamp('ХАЙЗЕНБЕРГ', DLGT.d_say + 9.8, { size: 80, rot: -.06, shake: 20 });
  goTo(A2, DLGT.d_knocks + 10.6, Wt('пятом') + .1, A2[0] - 1000, A2[1] - 500);
  hold(Wt('пятом') + .1, Wt('требует') + .1, A2[0] - 560, A2[1] - 200, 1.0, -.02, { dz: .06 });
  camKey(DLGT.d_say - .1, A2[0] + 80, A2[1] + 40, 1.12, 0); camKey(DLGT.d_say + 9.2, A2[0] + 80, A2[1] + 20, 1.45, .01); camKey(DLGT.d_say + 14.9, A2[0] + 80, A2[1] + 120, 1.15, 0);

  // S3 · money is no longer needed: the vault, out of the business — too late
  const A3 = [4500, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  pw('vaultmoney', Wt('деньги') - .2, { x: A3[0] - 380, y: A3[1] - 60, w: 760, rot: -.02, order: 300, off: 0 });
  const cnt = typedCard({ x: A3[0] + 560, y: A3[1] - 160, w: 480, h: 260, rot: .04, order: 310, tIn: Wt('гору') - .1, dur: .3, enter: 'slide', dx: 400, dy: -200 },
    [[typed('СУММА:', Wt('наличных'), .05), -200, -40, `700 36px ${MONO}`], [typed('не пересчитать', Wt('пересчитать'), .03), -200, 30, `400 32px ${MONO}`]]);
  const out = card({ x: A3[0] + 560, y: A3[1] + 170, w: 480, h: 160, rot: -.03, order: 320, lined: false, tIn: Wt('остановимся') - .2, dur: .25, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 40px ${MONO}`) });
  out.cl = [checkLine('ВЫШЕЛ ИЗ ДЕЛА', Wt('выходит') + .1, 'v', -200, 0)];
  const late = card({ x: A3[0] + 560, y: A3[1] + 330, w: 1, h: 1, shadow: 0, lit: false, order: 330, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  late.s = stamp('ПОЗДНО', Wt('поздно') + .05, { size: 90, rot: -.08, shake: 14 });
  goTo(A3, DLGT.d_say + 14.9, Wt('деньги') + .1, A3[0] - 800, A3[1] - 360);
  hold(Wt('деньги') + .1, Wt('пересчитать') + .4, A3[0] - 160, A3[1] - 80, .95, -.01, { dz: .08 });
  camKey(Wt('просит'), A3[0] + 500, A3[1] + 80, 1.1, .015); camKey(Wt('поздно') + .5, A3[0] + 520, A3[1] + 200, 1.15, .02);

  // S4 · Mike shot by the river; nine witnesses in three prisons
  const A4 = [2100, 1900]; lamp(A4[0], A4[1] - 200, 2100, 1);
  const mk_ = pw('mikeshot', Wt('незадолго') - .2, { x: A4[0] - 380, y: A4[1] - 60, w: 680, rot: -.02, order: 400, off: 3 });
  mk_.stamps = [stamp('МАЙК', Wt('майка') + .05, { x: 0, y: 40, size: 70, rot: -.08, shake: 16 })];
  const pr = card({ x: A4[0] + 520, y: A4[1] - 20, w: 520, h: 560, rot: .03, order: 410, color: '#e6e1d4', lined: false, tIn: Wt('казнь') - .2, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t) => { g.fillStyle = INK; g.font = `700 32px ${MONO}`; g.textAlign = 'center'; g.fillText('3 ТЮРЬМЫ · 2 МИНУТЫ', 0, -220);
      for (let k = 0; k < 9; k++) { const x = -160 + (k % 3) * 160, y = -110 + Math.floor(k / 3) * 120, tk = Wt('девяти') + k * .14; g.strokeStyle = INK; g.lineWidth = 3; g.strokeRect(x - 50, y - 45, 100, 90);
        g.fillStyle = '#3a3a3a'; g.beginPath(); g.arc(x, y - 10, 20, 0, 7); g.fill(); g.fillRect(x - 32, y + 14, 64, 26);
        if (t > tk) { const p = clamp((t - tk) / .12); g.strokeStyle = RED; g.lineWidth = 7; g.beginPath(); g.moveTo(x - 46, y - 40); g.lineTo(x - 46 + 92 * p, y - 40 + 80 * p); g.stroke(); } } } });
  for (let k = 0; k < 9; k++) sfx('pen', Wt('девяти') + k * .14, { dur: .1 });
  card({ x: A4[0], y: A4[1] + 480, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('ПЕРЕСТАЛ ПРИТВОРЯТЬСЯ', Wt('притворяться') - .2, .6, { size: 54, rot: -.04 })] });
  goTo(A4, Wt('поздно') + .5, Wt('незадолго') + .1, A4[0] - 800, A4[1] - 360);
  hold(Wt('незадолго') + .1, Wt('партнёра') + .3, A4[0] - 360, A4[1] - 40, 1.12, -.015, { dz: .06 });
  camKey(Wt('казнь') + .2, A4[0] + 500, A4[1] - 20, 1.08, .015); camKey(Wt('минуты') + .5, A4[0] + 520, A4[1] + 10, 1.15, .02);
  camKey(Wt('если') + .2, A4[0] + 60, A4[1] + 260, .82, 0); camKey(T_END, A4[0] + 60, A4[1] + 380, .98, -.01);

  ensureFG([[900, 700, 'ashtray', 1.1, 1.9], [3300, 900, 'smoke', 1.6, 1.5, 0, .8], [6000, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
