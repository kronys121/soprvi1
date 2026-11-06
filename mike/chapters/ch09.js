// 09 · НАЧО
CH_V0 = 499.7;
const [T_START, T_END] = chRange(9);
function buildScenes() {
  const D = [0, 0]; divider(D, 9, 'НАЧО', T_START);
  hold(T_START, Wt('история') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · what Mike's word is worth: Nacho, caught between the cartel, Gus and Lalo; his honest old father in danger
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('nachophone', Wt('начо') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 100, off: 2, caption: capt('НАЧО ЗВОНИТ ОТЦУ', Wt('окончательно') - .3), capSize: 24 });
  const tg = card({ x: A1[0] + 560, y: A1[1] - 60, w: 460, h: 360, rot: .03, order: 110, lined: true, tIn: Wt('работает') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 26px ${MONO}`; g.textAlign = 'left'; g.fillText('РАБОТАЕТ НА:', -190, -120); drawChecks(g, t, it.cl, `700 26px ${MONO}`); } });
  tg.cl = [checkLine('КАРТЕЛЬ', Wt('картель') + .1, 'v', -170, -40), checkLine('ГУСА', Wt('гуса') + .1, 'v', -170, 30), checkLine('ЛАЛО', Wt('лало') + .1, 'v', -170, 100)];
  card({ x: A1[0] - 300, y: A1[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('отец — под угрозой', Wt('угрозой') - .4, .5, { size: 50, rot: -.04 })] });
  goTo(A1, Wt('история') + .2, Wt('слово') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('слово') - .1, Wt('окончательно') + .3, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('работает') + .1, A1[0] + 520, A1[1] - 40, 1.05, .015); camKey(Wt('угрозой') + .3, A1[0] + 60, A1[1] + 200, .9, 0);

  // S2 · Mike sees not a gangster but a son; he promises: your father won't be touched
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .9);
  pw('van', Wt('видит') - .4, { x: A2[0] - 340, y: A2[1] - 20, w: 760, rot: -.015, order: 200, off: 2 });
  const pm = card({ x: A2[0] + 620, y: A2[1] - 60, w: 440, h: 300, rot: .03, order: 210, color: '#f6f1e3', lined: false, tIn: Wt('обещает') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -60, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 20, `700 italic 36px "DejaVu Serif"`, RED, 'center'); } });
  pm.a = typed('обещание Майка:', Wt('обещает') - .1, .04); pm.b = typed('«отца не тронут»', Wt('тронут') - .6, .04, { silent: true });
  card({ x: A2[0] - 300, y: A2[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, scrawls: [scrawl('не бандит — сын', Wt('бандита') - .2, .5, { size: 52, rot: -.04 })] });
  goTo(A2, Wt('угрозой') + .6, Wt('видит') - .1, A2[0] - 860, A2[1] - 440);
  camKey(Wt('видит'), A2[0] - 340, A2[1] - 20, 1.02, -.01); camKey(Wt('бандита') + .2, A2[0] - 200, A2[1] + 160, .9, 0); camKey(Wt('обещает') + .2, A2[0] + 600, A2[1] - 40, 1.08, .015);

  // S3 · cornered, Nacho chooses how to die to save his father; Mike watches it through the scope
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1.05);
  pw('nachokneel', Wt('загоняют') - .4, { x: A3[0] - 360, y: A3[1] - 20, w: 760, rot: -.015, order: 300, off: 2, caption: capt('САМ ВЫБИРАЕТ, КАК УМЕРЕТЬ', Wt('умереть')), capSize: 22 });
  pw('mikescope', Wt('видит', 2) - .4, { x: A3[0] + 600, y: A3[1] - 120, w: 440, rot: .04, order: 310, off: 1, caption: capt('МАЙК ВИДИТ ЭТО', Wt('глазами')), capSize: 20 });
  goTo(A3, Wt('тронут') + .6, Wt('загоняют') - .2, A3[0] - 860, A3[1] - 460);
  hold(Wt('загоняют') - .2, Wt('отца', 2) + .3, A3[0] - 360, A3[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('видит', 2) + .1, A3[0] + 580, A3[1] - 100, 1.08, .015); camKey(Wt('глазами') + .5, A3[0] + 580, A3[1] - 80, 1.16, .015);

  // S4 · Mike keeps his word; then goes to the old man and looks him in the eye — no one asked; he knows what losing a son is
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const kp = card({ x: A4[0] - 520, y: A4[1] - 100, w: 520, h: 380, rot: -.03, order: 400, lined: true, tIn: Wt('выполняет') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 26px ${MONO}`) });
  kp.cl = [checkLine('СЛОВО СДЕРЖАНО', Wt('обещание') + .1, 'v', -220, -120), checkLine('ОТЦА НЕ ТРОНУЛИ', Wt('покое') + .1, 'v', -220, -50), checkLine('ПРИЕХАЛ САМ', Wt('приезжает') + .1, 'v', -220, 20), checkLine('НИКТО НЕ ПРОСИЛ', Wt('просил') + .1, 'v', -220, 90)];
  pw('mikeup', Wt('старику') - .5, { x: A4[0] + 380, y: A4[1] - 60, w: 660, rot: .02, order: 410, off: 2 });
  const tr = card({ x: A4[0], y: A4[1] + 420, w: 900, h: 160, rot: -.015, order: 420, lined: false, tIn: Wt('каково') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -410, -20, `700 28px ${MONO}`); drawTyped(g, it.b, t, -410, 40, `800 36px ${SANS}`, RED); } });
  tr.a = typed('знает, каково — потерять сына', Wt('каково') - .1, .03); tr.b = typed('ОТЕЦ ИМЕЕТ ПРАВО НА ПРАВДУ', Wt('право') - .4, .03);
  goTo(A4, Wt('глазами') + .9, Wt('выполняет') - .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('выполняет') - .1, Wt('приезжает') + .3, A4[0] - 520, A4[1] - 100, 1.08, -.015, { dz: .05 });
  camKey(Wt('=глаза') + .1, A4[0] + 380, A4[1] - 60, 1.02, .015); camKey(Wt('каково') + .2, A4[0], A4[1] + 260, .95, 0); camKey(T_END, A4[0], A4[1] + 280, 1.05, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
