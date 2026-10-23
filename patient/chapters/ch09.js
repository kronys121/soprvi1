// 09 · ФИНАЛ
CH_V0 = 440.9;
const [T_START, T_END] = chRange(9);
function buildScenes() {
  const D = [0, 0]; divider(D, 9, 'ФИНАЛ', T_START);
  hold(T_START, Wt('последняя') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the diner (A1)
  const A1 = [2200, -100]; lamp(A1[0], A1[1] - 200, 2300, 1);
  typedCard({ x: A1[0] - 900, y: A1[1] - 330, w: 560, h: 170, rot: -.04, order: 100, lined: false, tIn: Wt('последняя') + .1, dur: .3, enter: 'slide', dx: -400, dy: 0 },
    [[typed('СЕЗОН 6 · СЕРИЯ 21', Wt('последняя') + .25, .025), 0, -10, `700 32px ${MONO}`, INK, 'center'], [typed('ПОСЛЕДНЯЯ', Wt('серия') + .1, .04, { silent: true }), 0, 44, `800 36px ${SANS}`, RED, 'center']]);
  photo({ x: A1[0] - 360, y: A1[1] + 40, w: 720, rot: -.02, order: 110, tIn: Wt('тони') - .15, dur: .3, enter: 'drop', dx: -150, dy: -240, src: vid('dinertony', Wt('тони') - .2, 0) });
  item({ x: A1[0] - 360, y: A1[1] - 330, w: 140, h: 160, order: 115, shadow: .6, tIn: Wt('над') - .1, dur: .25, enter: 'pop',
    draw: (g, t) => { const d = t - Wt('колокольчик'), sw = d > 0 ? Math.exp(-d * 3) * Math.sin(d * 18) * .5 : 0; g.save(); g.translate(0, -60); g.rotate(sw);
      g.fillStyle = '#c9a54a'; g.beginPath(); g.moveTo(-50, 100); g.quadraticCurveTo(-50, 0, 0, 0); g.quadraticCurveTo(50, 0, 50, 100); g.closePath(); g.fill(); g.fillStyle = '#8a6a2a'; g.beginPath(); g.arc(0, 108, 12, 0, 7); g.fill(); g.restore(); } });
  sfx('bell', Wt('колокольчик'));
  photo({ x: A1[0] + 500, y: A1[1] - 140, w: 560, rot: .05, order: 120, tIn: Wt('семья') - .1, dur: .28, enter: 'drop', dx: 200, dy: -200, src: vid('dinerbell', Wt('семья') - .2, 0) });
  const jb = typedCard({ x: A1[0] + 520, y: A1[1] + 330, w: 620, h: 220, rot: -.03, order: 130, color: '#efe6cf', lined: false, tIn: Wt('играет') - .2, dur: .3, enter: 'slide', dx: 400, dy: 300,
    extra: (g) => { g.strokeStyle = '#8e1610'; g.lineWidth = 4; g.strokeRect(-290, -95, 580, 190); } },
    [[typed('JOURNEY', Wt('journey') - .1, .05), 0, -15, `800 50px ${SANS}`, INK, 'center'], [typed("DON'T STOP BELIEVIN'", Wt('journey') + .3, .03, { silent: true }), 0, 45, `700 30px ${MONO}`, '#8e1610', 'center']]);
  link(A1[0] - 1150, A1[1] - 420, Wt('последняя') + .3, Wt('серия') + .3);
  travel(Wt('последняя') + .3, Wt('серия') + .3);
  camKey(Wt('серия') + .3, A1[0] - 760, A1[1] - 200, 1.2, -.02); camKey(Wt('закусочной') + .3, A1[0] - 360, A1[1] - 20, 1.15, -.01);
  camKey(Wt('семья') + .2, A1[0] + 300, A1[1] - 60, 1.05, .01); camKey(Wt('journey') + .3, A1[0] + 420, A1[1] + 180, 1.15, .02); camKey(Wt('черным') - .02, A1[0] + 380, A1[1] + 150, 1.25, .025);

  // S2 · cut to black (hard, silent)
  const tB0 = Wt('черным') - .1, tB1 = Wt('почти') + .05;
  OVERLAYS.push((g, t) => { if (t >= tB0 && t < tB1 + .3) { g.fillStyle = `rgba(0,0,0,${t < tB1 ? 1 : 1 - (t - tB1) / .3})`; g.fillRect(0, 0, W, H); } });
  sfx('cutblack', tB0, { dur: tB1 - tB0 });

  // S3 · twenty years of theories (A3)
  const A3 = [2200, 1900]; lamp(A3[0], A3[1] - 200, 2000, .9);
  const th = [['ОН УМЕР?', -620, -260, -.08], ['ЖИВ?', 480, -300, .07], ['ЭТО СОН?', -560, 260, .05], ['ВЫСТРЕЛ?', 560, 220, -.06], ['ЖИЗНЬ ИДЁТ?', 0, -20, .02]];
  th.forEach(([lab, dx, dy, r], i) => {
    const t = tB1 + .1 + i * .55;
    typedCard({ x: A3[0] + dx, y: A3[1] + dy, w: 460, h: 150, rot: r, order: 300 + i, lined: false, tIn: t, dur: .26, enter: 'drop', dx: 0, dy: -200 }, [[typed(lab, t + .05, .04, { silent: true }), 0, 18, `800 48px ${SANS}`, INK, 'center']]);
  });
  const zg = typedCard({ x: A3[0], y: A3[1] + 520, w: 640, h: 150, rot: -.015, order: 320, lined: false, tIn: Wt('финал') - .1, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('ЗАГАДКА', Wt('важен'), .05), 0, 18, `800 60px ${SANS}`, INK, 'center']]);
  zg.pens = [pen([[-170, 6], [170, -4]], Wt('загадкой') + .2, .25, { width: 10 })];
  camKey(tB1 + .02, A3[0], A3[1] - 20, .78, 0); camKey(Wt('значит') + .3, A3[0] + 20, A3[1] + 60, .85, .01);
  hold(Wt('финал'), Wt('загадкой') + .7, A3[0], A3[1] + 450, 1.2, -.01, { dz: .06 });

  // S4 · Chase leaves the verdict to us (A4)
  const A4 = [4600, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const vf = card({ x: A4[0] - 120, y: A4[1], w: 900, h: 600, rot: .015, order: 400, lined: true, tIn: Wt('чейз') - .2, dur: .3, enter: 'slide', dx: -600, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -400, -100, `700 36px ${MONO}`); drawTyped(g, it.b, t, -400, 0, `700 46px ${MONO}`);
      g.fillStyle = INK; g.font = `400 30px ${MONO}`; g.textAlign = 'left'; g.fillText('ПОДПИСЬ:', -400, 180); g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(-220, 184); g.lineTo(380, 184); g.stroke();
      drawTyped(g, it.c, t, -400, 100, `700 46px ${MONO}`); } });
  vf.a = typed('ДЕЛО: ТОНИ СОПРАНО', Wt('тони', 2) - .3, .03); vf.b = typed('ПРИГОВОР: ______', Wt('приговор'), .04); vf.c = typed('ВЫНОСИТ: ЗРИТЕЛЬ', Wt('решение'), .035);
  item({ x: A4[0] + 260, y: A4[1] + 260, w: 900, h: 80, order: 410, tIn: Wt('оставил') - .1, dur: .45, enter: 'slide', dx: 900, dy: 200, drot: .4, rot: -.45,
    anim: (t) => ({ L: .25 * eio(prog(t, Wt('нам') - .4, Wt('нам') + .3)) }),
    draw: (g) => { g.fillStyle = '#141110'; g.beginPath(); g.roundRect(-420, -22, 760, 44, 22); g.fill(); g.fillStyle = '#c9a54a'; g.fillRect(200, -23, 48, 46); g.fillStyle = '#1b1715';
      g.beginPath(); g.moveTo(-420, -18); g.lineTo(-500, 0); g.lineTo(-420, 18); g.fill(); g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(-400, -16, 720, 6); } });
  link(A4[0] - 560, A4[1] - 330, Wt('загадкой') + .7, Wt('чейз') + .2);
  travel(Wt('загадкой') + .7, Wt('чейз') + .2);
  hold(Wt('чейз') + .2, Wt('приговор') + .6, A4[0] - 100, A4[1] - 20, 1.18, .015, { dz: .06 });
  camKey(Wt('решение') - .1, A4[0], A4[1] + 120, .98, 0); camKey(T_END, A4[0] + 120, A4[1] + 200, 1.25, -.02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3600, 900, 'smoke', 1.6, 1.5, 0, .8], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8], [6000, 2600, 'cup', 1.0, 1.9]]);
  CAMK.sort((a, b) => a.t - b.t);
}
