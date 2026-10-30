// 09 · ПУСТЫНЯ  (insert: "Всё, с меня хватит... пускай меня валят. — Вставай.")
CH_V0 = 636.7;
const [T_START, T_END] = chRange(9);
function buildScenes() {
  const D = [0, 0]; divider(D, 9, 'ПУСТЫНЯ', T_START);
  hold(T_START, Wt('становится') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · lawyer for criminals: small dealers, then the cartel; Lalo sends him to the desert for $7M bail
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const cl = card({ x: A1[0] - 420, y: A1[1] - 60, w: 560, h: 400, rot: -.03, order: 100, lined: true, tIn: Wt('адвокатом') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('КЛИЕНТЫ:', -240, -140); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  cl.cl = [checkLine('ПРЕСТУПНИКИ', Wt('преступников') + .1, 'v', -220, -60), checkLine('МЕЛКИЕ ДИЛЕРЫ', Wt('дилеров') + .1, 'v', -220, 20), checkLine('КАРТЕЛЬ', Wt('картеля') + .1, 'v', -220, 100)];
  pw('lalo', Wt('лало') - .4, { x: A1[0] + 460, y: A1[1] - 180, w: 520, rot: .04, order: 110, off: 2, caption: capt('ЛАЛО САЛАМАНКА', Wt('саламанка')), capSize: 22 });
  const bl = card({ x: A1[0] + 460, y: A1[1] + 260, w: 520, h: 200, rot: -.03, order: 120, color: '#e9efe0', lined: false, tIn: Wt('миллионами') - .4, dur: .3, enter: 'slide', dx: 400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `800 72px ${MONO}`, '#2c5a2a', 'center'); drawTyped(g, it.b, t, 0, 60, `700 26px ${MONO}`, INK, 'center'); } });
  bl.a = typed('$7 000 000', Wt('миллионами') - .2, .06); bl.b = typed('залог · из пустыни', Wt('залога') - .2, .04);
  goTo(A1, Wt('становится') + .3, Wt('адвокатом') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('адвокатом') + .1, Wt('картеля') + .4, A1[0] - 420, A1[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('лало') + .2, A1[0] + 440, A1[1] - 160, 1.05, .015); camKey(Wt('миллионами') + .3, A1[0] + 440, A1[1] + 220, 1.08, -.01); camKey(Wt('залога') + .3, A1[0] + 440, A1[1] + 240, 1.18, .01);

  // S2 · ambush on the way back; Mike Ehrmantraut saves him; two days on foot
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1.05);
  const am = pw('ambush', Wt('обратном') - .4, { x: A2[0] - 420, y: A2[1] - 140, w: 620, rot: -.03, order: 200, off: 2, caption: capt('ЗАСАДА', Wt('нападают')), capSize: 26 });
  am.stamps = [stamp('НАПАДЕНИЕ', Wt('нападают') + .1, { x: 0, y: 60, size: 60, rot: -.07, shake: 18 })];
  pw('mikesave', Wt('спасает') - .4, { x: A2[0] + 460, y: A2[1] - 100, w: 560, rot: .04, order: 210, off: 2, caption: capt('МАЙК ЭРМАНТРАУТ', Wt('эрмантраут')), capSize: 24 });
  const wk = pw('walk', Wt('два') - .4, { x: A2[0] + 0, y: A2[1] + 360, w: 620, rot: -.015, order: 220, off: 3 });
  wk.stamps = [stamp('2 ДНЯ ПЕШКОМ', Wt('идут') + .1, { x: 0, y: 80, size: 54, rot: -.06, shake: 12 })];
  goTo(A2, Wt('залога') + .9, Wt('обратном') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('обратном') + .1, Wt('нападают') + .5, A2[0] - 420, A2[1] - 140, 1.05, -.015, { dz: .05 });
  camKey(Wt('спасает') + .2, A2[0] + 440, A2[1] - 100, 1.05, .015); camKey(Wt('два') + .2, A2[0], A2[1] + 300, 1.0, -.01);

  // S3 · drinking his own urine; lies down in the sand, begs Mike to leave him (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1.05);
  pw('urine', Wt('пьёт') - .4, { x: A3[0] - 620, y: A3[1] - 200, w: 480, rot: -.05, order: 300, off: 2, caption: capt('ЧТОБЫ ВЫЖИТЬ', Wt('выжить') - .2), capSize: 22 });
  pw('crawl', Wt('ложится') - .4, { x: A3[0] - 620, y: A3[1] + 220, w: 480, rot: .04, order: 305, off: 3, caption: capt('«БРОСЬ МЕНЯ»', Wt('бросить') - .2), capSize: 22 });
  dlgShot('d_desert', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  goTo(A3, Wt('идут') + 1.2, Wt('пьёт') + .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('пьёт') + .1, Wt('выжить') + .4, A3[0] - 600, A3[1] - 200, 1.08, -.015, { dz: .05 });
  camKey(Wt('ложится') + .2, A3[0] - 600, A3[1] + 200, 1.08, .015);
  camKey(DLGT.d_desert + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_desert + 19.6, A3[0] + 180, A3[1] + 40, 1.2, .01);

  // S4 · Mike's lesson: everyone in this desert took a wrong turn once — and didn't have to
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, 1.05);
  pw('tree', Wt('объясняет') - .4, { x: A4[0] - 380, y: A4[1] - 40, w: 720, rot: -.02, order: 400, off: 3 });
  const tn = card({ x: A4[0] + 520, y: A4[1] - 80, w: 520, h: 420, rot: .03, order: 410, lined: false, tIn: Wt('каждый') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 8; g.lineCap = 'round'; const p = Math.min(1, Math.max(0, (t - it.t0) / 1.2));
      g.beginPath(); g.moveTo(0, 180); g.lineTo(0, 180 - 200 * Math.min(1, p * 2)); if (p > .5) g.lineTo(-170 * (p - .5) * 2, 20 - 120 * (p - .5) * 2); g.stroke();
      g.setLineDash([12, 12]); g.strokeStyle = '#888'; if (p > .5) { g.beginPath(); g.moveTo(0, -20); g.lineTo(0, -20 - 140 * (p - .5) * 2); g.stroke(); } g.setLineDash([]);
      drawTyped(g, it.a, t, -150, -130, `800 34px ${SANS}`, RED, 'center'); drawTyped(g, it.b, t, 60, -180, `700 26px ${MONO}`, '#666', 'left'); } });
  tn.t0 = Wt('свернул') - .2; tn.a = typed('НЕ ТУДА', Wt('туда') - .1, .06); tn.b = typed('мог не сворачивать', Wt('сворачивать') - .3, .03);
  goTo(A4, DLGT.d_desert + 19.8, Wt('объясняет') - .2, A4[0] - 860, A4[1] - 460);
  camKey(Wt('объясняет') + .3, A4[0] - 380, A4[1] - 40, 1.05, -.01); camKey(Wt('каждый') + .2, A4[0] + 500, A4[1] - 80, 1.05, .015); camKey(Wt('сворачивать') + .5, A4[0] + 500, A4[1] - 60, 1.15, .01);

  // S5 · home, he lies to Kim that it went smoothly; the lie between them; he wrecks what kept him afloat
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('candle', Wt('вернувшись') - .4, { x: A5[0] - 420, y: A5[1] - 40, w: 640, rot: -.02, order: 500, off: 2, caption: capt('«ВСЁ ПРОШЛО СПОКОЙНО»', Wt('спокойно')), capSize: 22 });
  const ly = card({ x: A5[0] + 540, y: A5[1] - 60, w: 580, h: 360, rot: .03, order: 510, lined: false, tIn: Wt('когда-то') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -200, -110, `700 28px ${MONO}`); drawTyped(g, it.b, t, -250, -50, `800 34px ${SANS}`); drawPen(g, it.p, t);
      drawTyped(g, it.c, t, -200, 40, `700 28px ${MONO}`); drawTyped(g, it.d, t, -200, 110, `800 54px ${SANS}`, RED); } });
  ly.a = typed('раньше:', Wt('когда-то') - .1, .04); ly.b = typed('ЧЕСТНЫ ДРУГ С ДРУГОМ', Wt('честны') - .2, .03); ly.p = pen([[-260, -50], [260, -56]], Wt('теперь') + .1, .3, { width: 7 });
  ly.c = typed('теперь:', Wt('теперь') - .1, .04); ly.d = typed('ЛОЖЬ', Wt('ложь') - .1, .08);
  card({ x: A5[0] + 40, y: A5[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, scrawls: [scrawl('рушит то, что держало на плаву', Wt('разрушает') - .1, .9, { size: 46, rot: -.04 })] });
  goTo(A5, Wt('сворачивать') + .9, Wt('вернувшись') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('вернувшись') + .1, Wt('деталь') + .3, A5[0] - 420, A5[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('когда-то') + .2, A5[0] + 500, A5[1] - 60, 1.08, .015); camKey(Wt('ложь') + .5, A5[0] + 500, A5[1] + 20, 1.18, .01);
  camKey(Wt('разрушает') + .3, A5[0] + 40, A5[1] + 220, .9, 0); camKey(T_END, A5[0] + 40, A5[1] + 260, .98, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
