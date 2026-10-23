// 07 · АКТЁР
CH_V0 = 365.2;
const [T_START, T_END] = chRange(7);
function buildScenes() {
  const D = [0, 0]; divider(D, 7, 'АКТЁР', T_START);
  hold(T_START, Wt('нельзя') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · James Gandolfini (A1)
  const A1 = [1900, -200]; lamp(A1[0], A1[1] - 200, 1700, 1);
  photo({ x: A1[0] - 330, y: A1[1], w: 620, rot: -.03, order: 100, tIn: Wt('сказать') - .1, dur: .3, enter: 'drop', dx: -150, dy: -240, src: { still: 'gandolfini' } });
  typedCard({ x: A1[0] + 470, y: A1[1] + 40, w: 640, h: 420, rot: .03, order: 110, tIn: Wt('сказать') + .1, dur: .3, enter: 'slide', dx: 500, dy: 0,
    extra: (g) => { g.fillStyle = '#121010'; g.beginPath(); g.moveTo(320, -210); g.lineTo(320, -90); g.lineTo(200, -210); g.fill(); } },
    [[typed('ДЖЕЙМС', Wt('джеймсе'), .05), -290, -60, `800 60px ${SANS}`], [typed('ГАНДОЛЬФИНИ', Wt('гандольфини'), .04), -290, 20, `800 60px ${SANS}`], [typed('1961 — 2013', Wt('гандольфини') + .7, .05, { silent: true }), -290, 110, `400 36px ${MONO}`, '#5a4a3a']]);
  link(A1[0] - 630, A1[1] - 270, Wt('нельзя') + .3, Wt('сказать') + .2);
  travel(Wt('нельзя') + .3, Wt('сказать') + .2);
  hold(Wt('сказать') + .2, Wt('гандольфини') + .9, A1[0] + 90, A1[1] + 20, 1.1, .015, { dz: .1 });

  // S2 · charming, funny, tired, alive (A2)
  const A2 = [4300, 0]; lamp(A2[0], A2[1] - 200, 2200, 1);
  [['ОБАЯТЕЛЬНЫЙ', 'обаятельным', { still: 'charm' }], ['СМЕШНОЙ', 'смешным', vid('laugh', Wt('смешным') - .2, 1.8)], ['УСТАЛЫЙ', 'усталым', { still: 'tired' }], ['ЖИВОЙ', 'живым', vid('irritated', Wt('живым') - .3, 0)]].forEach(([lab, w, src], i) => {
    const t = Wt(w) - .05, x = A2[0] + (i - 1.5) * 560, y = A2[1] + (i % 2 ? 90 : -70);
    photo({ x, y, w: 500, rot: (i % 2 ? .05 : -.05), order: 200 + i, tIn: t, dur: .26, enter: 'pop', src, caption: typed(lab, t + .05, .03, { silent: true }), capSize: 26 });
  });
  link(A2[0] - 1100, A2[1] - 300, Wt('гандольфини') + .9, Wt('сделал'));
  travel(Wt('гандольфини') + .9, Wt('сделал'));
  camKey(Wt('сделал'), A2[0] - 840, A2[1] - 40, 1.1, -.02); camKey(Wt('смешным') + .3, A2[0] - 300, A2[1] + 20, 1.08, -.005);
  camKey(Wt('усталым') + .3, A2[0] + 280, A2[1] + 20, 1.08, .01); camKey(Wt('живым') + .5, A2[0], A2[1] + 10, .72, 0);

  // S3 · film strip: kids -> terror (A3)
  const A3 = [4300, 1800]; lamp(A3[0], A3[1] - 200, 2300, 1);
  item({ x: A3[0], y: A3[1], w: 2000, h: 620, rot: -.01, order: 300, tIn: Wt('его') - .3, dur: .4, enter: 'slide', dx: -2400, dy: 0,
    srcs: t => [vid('breakfast', Wt('сцене') - .2, 0), vid('rage', Wt('следующей') - .1, 0)],
    draw: (g, t) => {
      g.fillStyle = '#141211'; g.fillRect(-1000, -310, 2000, 620);
      g.fillStyle = '#d8d0c0'; for (let x = -980; x < 1000; x += 70) { g.beginPath(); g.roundRect(x, -290, 38, 30, 6); g.fill(); g.beginPath(); g.roundRect(x, 260, 38, 30, 6); g.fill(); }
      const fr = (src, x, label, tl) => { const im = got(srcUrl(src, t)); g.fillStyle = '#000'; g.fillRect(x - 440, -230, 880, 460); if (im) g.drawImage(im, x - 420, -220, 840, 440 * 840 / 880 * .99); if (t > tl) { g.fillStyle = '#f2ede4'; g.font = `800 40px ${SANS}`; g.textAlign = 'center'; g.fillText(label, x, 300 - 82); } };
      fr(vid('breakfast', Wt('сцене') - .2, 0), -480, 'ДУРАЧИТСЯ', Wt('дурачиться')); fr(vid('rage', Wt('следующей') - .1, 0), 480, 'ПУГАЕТ', Wt('пугать'));
    } });
  sfx('slide', Wt('его') - .7, { dur: .5 });
  link(A3[0] - 1000, A3[1] - 340, Wt('живым') + .6, Wt('его') + .1);
  travel(Wt('живым') + .6, Wt('его') + .1);
  camKey(Wt('его') + .1, A3[0] - 480, A3[1], 1.15, -.01); camKey(Wt('детьми') + .4, A3[0] - 420, A3[1] + 10, 1.22, -.015);
  camKey(Wt('следующей') + .2, A3[0] + 470, A3[1] + 10, 1.2, .015); camKey(Wt('дрожи') + .5, A3[0] + 500, A3[1], 1.32, .02);

  // S4 · flat villain vs living man (A4)
  const A4 = [1900, 1900]; lamp(A4[0], A4[1] - 200, 2200, 1);
  const cut = card({ x: A4[0] - 520, y: A4[1] - 40, w: 560, h: 640, rot: -.04, order: 400, color: '#f0ece2', tIn: Wt('злодея') - .1, dur: .3, enter: 'drop', dx: -200, dy: -260, lined: false,
    text: (g, t, it) => { g.fillStyle = '#121010'; g.beginPath(); g.arc(0, -110, 100, 0, 7); g.fill(); g.beginPath(); g.moveTo(-220, 230); g.quadraticCurveTo(-200, 10, 0, 0); g.quadraticCurveTo(200, 10, 220, 230); g.fill();
      g.fillStyle = '#f0ece2'; g.fillRect(-60, -95, 40, 10); g.fillRect(20, -95, 40, 10); drawTyped(g, it.ty, t, 0, 290, `700 34px ${MONO}`, INK, 'center'); drawStamp(g, it.st, t); } });
  cut.ty = typed('СЛАБЫЙ АКТЁР', Wt('слабый'), .04); cut.st = stamp('НЕНАВИДЕТЬ', Wt('ненавидеть') + .05, { x: 0, y: 60, size: 60, rot: -.1, shake: 12 });
  const live = photo({ x: A4[0] + 460, y: A4[1] - 40, w: 620, rot: .04, order: 410, tIn: Wt('злодея', 2) - .1, dur: .3, enter: 'drop', dx: 200, dy: -260, src: vid('mug', Wt('злодея', 2) - .2, 0) });
  tag({ x: A4[0] + 460, y: A4[1] + 330, w: 480, rot: -.04, label: 'ЖИВОЙ ЧЕЛОВЕК', tIn: Wt('живой') + .05, order: 420, size: 40 });
  live.stamps = [stamp('НЕНАВИДЕТЬ', Wt('получается') - .35, { x: 0, y: 30, size: 60, rot: .08, shake: 8, alpha: .8 })];
  live.pens = [pen([[-230, 34], [230, 20]], Wt('получается') + .05, .25, { width: 10 })];
  link(A4[0] - 790, A4[1] - 360, Wt('дрожи') + .5, Wt('злодея') + .3);
  travel(Wt('дрожи') + .5, Wt('злодея') + .3);
  hold(Wt('злодея') + .3, Wt('ненавидеть') + .7, A4[0] - 500, A4[1] + 10, 1.2, -.02, { dz: .06 });
  camKey(Wt('злодея', 2) + .2, A4[0] + 380, A4[1] + 20, 1.15, .015); camKey(Wt('получается') + .4, A4[0] + 20, A4[1] + 40, .82, 0); camKey(T_END, A4[0], A4[1] + 40, .86, -.005);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [600, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
