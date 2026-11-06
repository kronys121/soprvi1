// 07 · ГУС  (insert: Gus on the road "Не надо... Смерть Гектора Саламанки не в моих интересах. В настоящий момент.")
CH_V0 = 391.6;
const [T_START, T_END] = chRange(7);
function buildScenes() {
  const D = [0, 0]; divider(D, 7, 'ГУС', T_START);
  hold(T_START, Wt('гус') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Gus hates Hector too, but has his own plans — and Mike is needed alive (original dub: the first meeting)
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1.05);
  pw('gusarrive', Wt('ненавидит') - .4, { x: A1[0] - 620, y: A1[1] - 180, w: 480, rot: -.05, order: 100, off: 2, caption: capt('ГУС ФРИНГ', Wt('гектора')), capSize: 24 });
  const al = card({ x: A1[0] - 620, y: A1[1] + 240, w: 480, h: 160, rot: .03, order: 105, lined: false, tIn: Wt('планы') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 15, `800 34px ${SANS}`, RED, 'center') });
  al.a = typed('МАЙК НУЖЕН ЖИВЫМ', Wt('живым') - .6, .04);
  dlgShot('d_gusmeet', A1[0] + 180, A1[1] - 20, { w: 900, order: 110 });
  goTo(A1, Wt('гус') + .2, Wt('тоже') - .1, A1[0] - 860, A1[1] - 460);
  hold(Wt('тоже') - .1, Wt('планы') + .1, A1[0] - 600, A1[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('живым') + .1, A1[0] - 600, A1[1] + 220, 1.1, .015);
  camKey(DLGT.d_gusmeet + .1, A1[0] + 180, A1[1] - 20, 1.08, 0); camKey(DLGT.d_gusmeet + 29, A1[0] + 180, A1[1] + 40, 1.2, .01);

  // S2 · an alliance of the two most restrained men: alike — no wasted words, every step planned, respect for professionalism
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('gusmeet', Wt('союз') - .5, { x: A2[0] - 320, y: A2[1] - 100, w: 800, rot: -.015, order: 200, off: 2, caption: capt('СОЮЗ ДВУХ САМЫХ СДЕРЖАННЫХ', Wt('вселенной') - .3), capSize: 22 });
  const lk = card({ x: A2[0] + 640, y: A2[1] - 60, w: 440, h: 360, rot: .03, order: 210, lined: true, tIn: Wt('похожи') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 26px ${MONO}`; g.textAlign = 'left'; g.fillText('ОБА:', -190, -130); drawChecks(g, t, it.cl, `700 24px ${MONO}`); } });
  lk.cl = [checkLine('НЕ ТРАТЯТ СЛОВ', Wt('слов') + .1, 'v', -180, -60), checkLine('ПРОДУМЫВАЮТ ШАГИ', Wt('шаг') + .1, 'v', -180, 10), checkLine('ЦЕНЯТ ПРОФИ', Wt('профессионализм') + .1, 'v', -180, 80)];
  goTo(A2, DLGT.d_gusmeet + 29.3, Wt('начинается') - .2, A2[0] - 860, A2[1] - 440);
  camKey(Wt('начинается'), A2[0] - 320, A2[1] - 100, 1.0, -.01); camKey(Wt('похожи') + .2, A2[0] + 600, A2[1] - 40, 1.05, .015); camKey(Wt('профессионализм') + .4, A2[0] + 600, A2[1], 1.12, .015);

  // S3 · the difference: Gus — revenge and power; Mike — Kaylee
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const df = card({ x: A3[0] - 100, y: A3[1] - 40, w: 900, h: 420, rot: -.015, order: 300, lined: false, tIn: Wt('разница') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -150); g.lineTo(0, 170); g.stroke(); drawTyped(g, it.hd, t, 0, -180, `700 28px ${MONO}`, '#666', 'center');
      drawTyped(g, it.a, t, -225, -90, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -225, 10, `800 40px ${SANS}`, '#888', 'center');
      drawTyped(g, it.c, t, 225, -90, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.d, t, 225, 10, `800 44px ${SANS}`, RED, 'center'); } });
  df.hd = typed('разница', Wt('разница') - .1, .05); df.a = typed('ГУС', Wt('гус', 4) - .1, .07); df.b = typed('месть · власть', Wt('мести') - .3, .04); df.c = typed('МАЙК', Wt('майк', 3) - .1, .07); df.d = typed('КЕЙЛИ', Wt('кейли') - .1, .07);
  goTo(A3, Wt('профессионализм') + .7, Wt('есть') - .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('есть') - .1, Wt('кейли') + .6, A3[0] - 100, A3[1] - 60, 1.05, -.01, { dz: .05 });

  // S4 · Madrigal "security consultant": a clean salary, money finally into his granddaughter's account; knowingly works for a drug lord
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const md = card({ x: A4[0] - 360, y: A4[1] - 60, w: 700, h: 420, rot: -.02, order: 400, color: '#f3efe2', lined: false, tIn: Wt('устраивает') - .3, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t, it) => { g.fillStyle = '#1f2a44'; g.fillRect(-350, -210, 700, 70); g.fillStyle = '#fff'; g.font = `800 34px ${SANS}`; g.textAlign = 'center'; g.fillText('MADRIGAL ELEKTROMOTOREN', 0, -162);
      drawTyped(g, it.a, t, -310, -80, `700 28px ${MONO}`); drawTyped(g, it.b, t, -310, -20, `800 36px ${SANS}`); drawTyped(g, it.c, t, -310, 60, `700 28px ${MONO}`, '#2c5a2a'); drawTyped(g, it.d, t, -310, 120, `700 26px ${MONO}`); } });
  md.a = typed('должность:', Wt('консультантом') - .2, .04); md.b = typed('КОНСУЛЬТАНТ ПО БЕЗОПАСНОСТИ', Wt('безопасности') - .4, .025); md.c = typed('чистая зарплата', Wt('чистую') - .1, .04); md.d = typed('→ на счёт внучки', Wt('счёт') - .2, .04);
  pw('gusmike', Wt('наркобарона') - .6, { x: A4[0] + 560, y: A4[1] - 60, w: 460, rot: .04, order: 410, off: 3, caption: capt('ЗНАЕТ, НА КОГО РАБОТАЕТ', Wt('работает') - .3), capSize: 18 });
  card({ x: A4[0] + 100, y: A4[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('Кейли важнее чистых рук', Wt('важнее') - .3, .6, { size: 52, rot: -.04 })] });
  goTo(A4, Wt('кейли') + .9, Wt('устраивает') - .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('устраивает') - .1, Wt('налоговой') + .3, A4[0] - 360, A4[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('наркобарона') + .1, A4[0] + 540, A4[1] - 60, 1.05, .015); camKey(Wt('важнее') + .3, A4[0] + 100, A4[1] + 200, .9, 0); camKey(T_END, A4[0] + 100, A4[1] + 220, .98, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
