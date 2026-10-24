// 09 · ВЕРДИКТ
CH_V0 = 572.3;
const [T_START, T_END] = chRange(9);
function buildScenes() {
  const D = [0, 0]; divider(D, 9, 'ВЕРДИКТ', T_START);
  hold(T_START, Wt('когда') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · when did the teacher become a monster? candidates
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1);
  const qs = card({ x: A1[0] - 460, y: A1[1] - 20, w: 660, h: 600, rot: -.025, order: 100, lined: true, tIn: Wt('когда') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.hd, t, -290, -210, `700 36px ${MONO}`); it.l.forEach(([ty, y, c]) => drawTyped(g, ty, t, -270, y, `400 32px ${MONO}`, c)); } });
  qs.hd = typed('КОГДА?', Wt('когда'), .06);
  qs.l = [[typed('1. подвал · Крейзи-8', Wt('задушил'), .03), -110], [typed('2. смерть Джейн', Wt('смотрел'), .03), -40], [typed('3. отравил ребёнка', Wt('отравил'), .03), 30], [typed('4. …всегда?', Wt('всегда') - .4, .05), 130, RED]];
  qs.stamps = [stamp('РАК СНЯЛ ЗАПРЕТ', Wt('запрет'), { x: 10, y: 240, size: 44, rot: -.07, shake: 14 })];
  pw('strangle', Wt('задушил') - .2, { x: A1[0] + 180, y: A1[1] - 300, w: 420, rot: .05, order: 110, off: 0 });
  pw('janedie', Wt('смотрел') - .2, { x: A1[0] + 440, y: A1[1] - 20, w: 420, rot: -.04, order: 111, off: 0 });
  pw('lily', Wt('отравил') - .2, { x: A1[0] + 180, y: A1[1] + 260, w: 420, rot: .03, order: 112, off: 3 });
  goTo(A1, Wt('когда') + .2, Wt('учитель') + .2, A1[0] - 800, A1[1] - 400);
  hold(Wt('учитель') + .2, Wt('человека') + .1, A1[0] - 320, A1[1] - 100, 1.0, -.015, { dz: .05 });
  camKey(Wt('подвале') + .2, A1[0] + 220, A1[1] - 120, .9, .01); camKey(Wt('ребёнка') + .5, A1[0] + 300, A1[1] + 40, .85, .01);
  camKey(Wt('всегда') + .3, A1[0] - 420, A1[1] + 60, 1.1, -.015); camKey(Wt('запрет') + .6, A1[0] - 440, A1[1] + 140, 1.2, -.02);

  // S2 · Bryan Cranston: four Emmys, every step visible
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  const bc = typedCard({ x: A2[0] - 640, y: A2[1] - 300, w: 560, h: 260, rot: -.04, order: 200, tIn: Wt('брайан') - .2, dur: .3, enter: 'slide', dx: -400, dy: -200 },
    [[typed('БРАЙАН КРЭНСТОН', Wt('брайан'), .04), -240, -40, `700 36px ${MONO}`], [typed('«ЭММИ» ×', Wt('премии'), .05), -240, 50, `700 34px ${MONO}`]]);
  const em = item({ x: A2[0] - 640, y: A2[1] + 20, w: 560, h: 200, order: 210, shadow: 0, lit: false, tIn: 0, draw: (g, t) => {
    for (let k = 0; k < 4; k++) { const tk = Wt('четыре') + k * .18; if (t < tk) continue; const p = eio(clamp((t - tk) / .2)), x = -180 + k * 120;
      g.save(); g.translate(x, 20 - 40 * (1 - p)); g.globalAlpha = p; g.fillStyle = '#c9a33a'; g.beginPath(); g.moveTo(-24, 70); g.lineTo(24, 70); g.lineTo(14, 50); g.lineTo(-14, 50); g.fill();
      g.fillRect(-5, -20, 10, 72); g.beginPath(); g.arc(0, -36, 18, 0, 7); g.fill(); g.strokeStyle = '#c9a33a'; g.lineWidth = 6; g.beginPath(); g.arc(0, -50, 34, Math.PI * 1.1, Math.PI * 1.9); g.stroke(); g.restore(); } } });
  for (let k = 0; k < 4; k++) sfx('pen', Wt('четыре') + k * .18, { dur: .08 });
  const steps = ['teacher', 'waltface', 'crystal', 'walthat', 'saymyname'];
  steps.forEach((s, k) => pw(s, Wt('каждую') + k * .3, { x: A2[0] + 40 + k * 230, y: A2[1] + 300 - k * 150, w: 360, rot: (k % 2 ? .04 : -.04), order: 220 + k, off: 1 }));
  card({ x: A2[0] + 300, y: A2[1] + 520, w: 1, h: 1, shadow: 0, lit: false, order: 240, tIn: 0, scrawls: [scrawl('НЕ СКАЧОК — ЛЕСТНИЦА', Wt('скачком') - .2, .6, { size: 54, rot: -.04 })] });
  goTo(A2, Wt('запрет') + .6, Wt('брайан') + .1, A2[0] - 900, A2[1] - 450);
  hold(Wt('брайан') + .1, Wt('видим') + .1, A2[0] - 560, A2[1] - 200, 1.12, -.02, { dz: .05 });
  camKey(Wt('ступень') + .4, A2[0] + 480, A2[1] + 0, .85, .01); camKey(Wt('эмми') + .3, A2[0] - 560, A2[1] - 80, 1.1, -.015);
  camKey(Wt('скачком') + .3, A2[0] + 360, A2[1] + 220, .85, 0); camKey(Wt('ним') + .3, A2[0] + 400, A2[1] + 160, .9, .01);

  // S3 · Tony vs Walter: pain first vs a mirror
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  pw('tony', Wt('тони') - .2, { x: A3[0] - 560, y: A3[1] - 120, w: 560, rot: -.04, order: 300, caption: capt('ТОНИ: БОЛЬ → ПОТОМ ПРЕСТУПЛЕНИЯ', Wt('боль'), .03), capSize: 18 });
  const wf = pw('waltface', Wt('уолтеру') - .2, { x: A3[0] + 200, y: A3[1] - 120, w: 560, rot: .04, order: 310, caption: capt('УОЛТЕР: МЫ ВИДИМ В НЁМ СЕБЯ', Wt('себя'), .03), capSize: 18 });
  tag({ x: A3[0] + 640, y: A3[1] - 440, w: 380, rot: .06, label: 'ЗЕРКАЛО', tIn: Wt('себя') + .1, order: 320, size: 44 });
  const und = typedCard({ x: A3[0] - 200, y: A3[1] + 360, w: 760, h: 200, rot: -.02, order: 330, tIn: Wt('обычного') - .2, dur: .3, enter: 'slide', dx: 0, dy: 400 },
    [[typed('обычный человек,', Wt('обычного'), .035), -330, -20, `700 36px ${MONO}`], [typed('которого НЕДООЦЕНИЛИ', Wt('недооценила') - .3, .035), -330, 40, `700 36px ${MONO}`, RED]]);
  card({ x: A3[0] + 560, y: A3[1] + 260, w: 1, h: 1, shadow: 0, lit: false, order: 340, tIn: 0, scrawls: [scrawl('ЕГО РЕВАНШ = НАШ', Wt('выигрываем') - .2, .55, { size: 54, rot: -.06 })] });
  goTo(A3, Wt('ним') + .3, Wt('тони') + .1, A3[0] - 900, A3[1] - 440);
  hold(Wt('тони') + .1, Wt('преступления') + .5, A3[0] - 540, A3[1] - 60, 1.1, -.02, { dz: .05 });
  camKey(Wt('уолтеру') + .3, A3[0] + 200, A3[1] - 80, 1.1, .015); camKey(Wt('себя') + .6, A3[0] + 300, A3[1] - 160, 1.0, .02);
  camKey(Wt('недооценила') + .4, A3[0] - 60, A3[1] + 180, .92, -.01); camKey(Wt('мы', 6) + .3, A3[0] + 240, A3[1] + 200, .85, 0);

  // S4 · Gilligan's trick: never a moment to say "enough"
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, 1);
  const gl = card({ x: A4[0], y: A4[1] - 20, w: 900, h: 560, rot: -.015, order: 400, lined: true, tIn: Wt('приём') - .2, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { drawTyped(g, it.hd, t, -400, -190, `700 40px ${MONO}`); drawChecks(g, t, it.cl, `700 38px ${MONO}`); } });
  gl.hd = typed('ПРИЁМ ГИЛЛИГАНА:', Wt('приём'), .04);
  gl.cl = [checkLine('ПОЛЮБИТЬ ЗЛОДЕЯ', Wt('злодея') + .05, 'x', -360, -70), checkLine('МОМЕНТ «ВСЁ, ХВАТИТ»', Wt('момента') + .1, 'x', -360, 40)];
  gl.stamps = [stamp('НИ РАЗУ', Wt('разу'), { x: 200, y: 170, size: 74, rot: -.08, shake: 16 })];
  card({ x: A4[0] - 140, y: A4[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 410, tIn: 0, scrawls: [scrawl('ВСЁ, ХВАТИТ?', Wt('хватит') - .3, .5, { size: 66, rot: -.05 })] });
  goTo(A4, Wt('мы', 6) + .3, Wt('приём') + .1, A4[0] - 700, A4[1] - 420);
  hold(Wt('приём') + .1, Wt('гиллигана') + .5, A4[0] - 200, A4[1] - 140, 1.15, -.015, { dz: .05 });
  camKey(Wt('злодея') + .3, A4[0] - 60, A4[1] - 60, 1.1, -.01); camKey(Wt('разу') + .4, A4[0] + 100, A4[1] + 80, 1.12, .01);
  camKey(Wt('хватит') + .3, A4[0] - 60, A4[1] + 200, .95, 0); camKey(T_END, A4[0] - 60, A4[1] + 220, 1.0, -.005);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
