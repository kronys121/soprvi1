// 02 · СЫН
CH_V0 = 112.5;
const [T_START, T_END] = chRange(2);
function buildScenes() {
  // divider
  const D = [0, 0]; divider(D, 2, 'СЫН', T_START);
  hold(T_START, Wt('откуда') + .2, D[0], D[1] + 10, .95, .01, { dz: .14 });

  // S1 · where from? childhood (A1)
  const A1 = [1900, -300]; lamp(A1[0], A1[1] - 200, 1500, 1);
  const kid = photo({ x: A1[0], y: A1[1], w: 760, rot: -.025, order: 100, tIn: Wt('откуда') + .55, dur: .3, enter: 'drop', dx: 0, dy: -240, src: { still: 'young' }, sepia: true,
    caption: typed('ТОНИ · 1967', Wt('откуда') + .8, .04, { silent: true }), capSize: 30 });
  card({ x: A1[0] + 260, y: A1[1] - 60, w: 1, h: 1, shadow: 0, lit: false, order: 110, tIn: 126, scrawls: [scrawl('?', Wt('нем') - .05, .3, { size: 260, rot: .1 })] });
  kid.stamps = [stamp('ДЕТСТВО', Wt('детства'), { x: -90, y: 70, size: 76, rot: -.08, shake: 12 })];
  link(A1[0] - 330, A1[1] - 250, Wt('откуда') + .2, Wt('откуда') + .75);
  travel(Wt('откуда') + .2, Wt('откуда') + .75);
  hold(Wt('откуда') + .75, Wt('детства') + .9, A1[0] + 30, A1[1] + 10, 1.28, -.015, { dz: .1 });

  // S2 · Livia mugshot (A2)
  const A2 = [4200, 100]; lamp(A2[0], A2[1] - 250, 1700, 1);
  const board = item({ x: A2[0], y: A2[1], w: 980, h: 760, rot: .01, order: 200, tIn: T_START,
    draw: (g, t, it) => {
      g.fillStyle = '#2c2d2e'; g.fillRect(-490, -380, 980, 760);
      g.strokeStyle = 'rgba(230,225,215,.45)'; g.fillStyle = 'rgba(230,225,215,.6)'; g.font = `700 22px ${MONO}`; g.textAlign = 'left';
      for (let k = 0; k <= 8; k++) { const y = 300 - k * 80; g.lineWidth = k % 2 ? 1.5 : 3; g.beginPath(); g.moveTo(-490, y); g.lineTo(490, y); g.stroke(); if (k % 2 === 0) g.fillText(`${140 + k * 5}`, -478, y - 8); }
      const im = got(srcUrl(it.src, t)); if (im) g.drawImage(im, -330, -250, 660, 375);
      g.strokeStyle = 'rgba(0,0,0,.6)'; g.lineWidth = 4; g.strokeRect(-330, -250, 660, 375);
      g.fillStyle = '#111'; g.fillRect(-330, 150, 660, 110); g.strokeStyle = '#ddd'; g.lineWidth = 2; g.strokeRect(-322, 158, 644, 94);
      drawTyped(g, it.nm, t, 0, 210, `700 40px ${MONO}`, '#f0ece2', 'center'); drawTyped(g, it.no, t, 0, 244, `400 24px ${MONO}`, '#bdb7aa', 'center');
    }, src: t => t < Wt('мать') + 3.2 ? vid('livia', Wt('мать') - .3) : { still: 'livia' } });
  board.nm = typed('ЛИВИЯ СОПРАНО', Wt('ливия'), .045); board.no = typed('МАТЬ · НЬЮАРК', Wt('ливия') + .7, .03, { silent: true });
  tag({ x: A2[0] - 640, y: A2[1] - 300, rot: -.07, label: 'МАТЬ', tIn: Wt('мать') + .05, order: 210, w: 260 });
  const arm = typedCard({ x: A2[0] + 760, y: A2[1] + 200, w: 520, h: 300, rot: .04, order: 220, tIn: Wt('хотя') - .1, dur: .3, enter: 'slide', dx: 500, dy: 100 },
    [[typed('ОРУЖИЕ:', Wt('берет'), .05), -220, -60, `700 44px ${MONO}`]]);
  arm.stamps = [stamp('НЕТ', Wt('оружие'), { x: 40, y: 50, size: 110, rot: -.1, shake: 14 })];
  link(A2[0] + 450, A2[1] - 360, Wt('детства') + .9, Wt('мать') - .05);
  travel(Wt('детства') + .9, Wt('мать') - .05);
  hold(Wt('мать') - .05, Wt('страшных'), A2[0] - 40, A2[1] - 40, 1.2, .01, { dz: .14 });
  camKey(Wt('хотя') + .2, A2[0] + 280, A2[1] + 60, .95, -.01); hold(Wt('руки'), Wt('оружие') + .35, A2[0] + 560, A2[1] + 140, 1.12, -.015, { dz: .08 });

  // S3 · complains, manipulates, belittles (A3)
  const A3 = [4300, 1800]; lamp(A3[0], A3[1] - 200, 1700, 1);
  photo({ x: A3[0], y: A3[1], w: 820, rot: .015, order: 300, tIn: Wt('она', 2) - .1, dur: .3, enter: 'drop', dx: 0, dy: -260, src: vid('liviacomplain', Wt('она', 2) - .1, 0) });
  [['ЖАЛУЕТСЯ', 'жалуется', -700, -260, -.07], ['МАНИПУЛИРУЕТ', 'манипулирует', 700, -230, .06], ['ОБЕСЦЕНИВАЕТ', 'обесценивает', -60, 430, -.03]].forEach(([lab, w, dx, dy, r]) => {
    const t = Wt(w) + .05; tag({ x: A3[0] + dx, y: A3[1] + dy, w: 460, rot: r, label: lab, tIn: t, order: 310 });
    thread([[A3[0] + dx + (dx < -100 ? 200 : dx > 100 ? -200 : 0), A3[1] + dy + (dy > 0 ? -48 : 0)], [A3[0] + (dx < -100 ? -300 : dx > 100 ? 300 : 0), A3[1] + (dy > 0 ? 260 : -240)]], t, t + .22, { silent: true, sag: .3, width: 4 });
  });
  const son = typedCard({ x: A3[0] + 760, y: A3[1] + 360, w: 560, h: 150, rot: .03, order: 320, tIn: Wt('все', 2) - .05, dur: .25, enter: 'slide', dx: 300, dy: 200, lined: false },
    [[typed('ВСЁ, ЧТО ДЕЛАЕТ СЫН', Wt('все', 2), .03), -250, 15, `700 34px ${MONO}`]]);
  son.pens = [pen([[-262, 4], [80, -2], [262, 8]], Wt('сын') + .05, .3, { width: 8 })];
  link(A3[0] - 420, A3[1] - 260, Wt('оружие') + .35, Wt('она', 2) + .15);
  travel(Wt('оружие') + .35, Wt('она', 2) + .15);
  camKey(Wt('она', 2) + .15, A3[0], A3[1] + 40, .88, .01); camKey(Wt('обесценивает') + .4, A3[0] + 60, A3[1] + 90, .92, .005);
  hold(Wt('все', 2) + .1, Wt('сын') + .5, A3[0] + 520, A3[1] + 260, 1.25, -.02, { dz: .05 });

  // S4 · Green Grove, revenge, conspiracy (A4)
  const A4 = [2000, 2000]; lamp(A4[0] - 200, A4[1] - 200, 2200, 1);
  const gg = photo({ x: A4[0] - 700, y: A4[1] - 60, w: 560, rot: -.05, order: 400, tIn: Wt('престарелых') - .1, dur: .3, enter: 'drop', dx: -200, dy: -200, src: { still: 'greengrove' },
    caption: typed('«ГРИН ГРОУВ»', Wt('престарелых') + .15, .04, { silent: true }), capSize: 28 });
  gg.stamps = [stamp('МЕСТЬ', Wt('мстит'), { x: 0, y: 30, size: 96, rot: -.1, shake: 16 })];
  const cons = photo({ x: A4[0] + 40, y: A4[1] + 40, w: 640, rot: .03, order: 410, tIn: Wt('выясняется') + .1, dur: .3, enter: 'drop', dx: 0, dy: -240, src: vid('conspire', Wt('выясняется'), .2),
    caption: typed('ЛИВИЯ + ДЯДЯ ДЖУНИОР', Wt('подтолкнула'), .03), capSize: 26 });
  const tgt = photo({ x: A4[0] + 800, y: A4[1] - 140, w: 480, rot: .07, order: 420, tIn: Wt('дядю') - .2, dur: .3, enter: 'drop', dx: 200, dy: -200, src: { still: 'work' } });
  tgt.pens = [pen(Array.from({ length: 34 }, (_, k) => [Math.cos(k / 33 * 6.6) * 110 + 40, Math.sin(k / 33 * 6.6) * 90 - 50]), Wt('покушению'), .4, { width: 7 }),
    pen([[40, -170], [40, 70]], Wt('покушению') + .38, .12, { width: 5 }), pen([[-100, -50], [180, -50]], Wt('покушению') + .48, .12, { width: 5 })];
  tgt.stamps = [stamp('ЦЕЛЬ: СЫН', Wt('сына') + .05, { x: 0, y: 110, size: 54, rot: .06, shake: 12 })];
  thread([[A4[0] + 40, A4[1] - 160], [A4[0] + 800, A4[1] - 300]], Wt('подтолкнула'), Wt('джуниора') + .2, {});
  pin(A4[0] + 40, A4[1] - 160, Wt('выясняется') + .2, { silent: true }); pin(A4[0] + 800, A4[1] - 300, Wt('дядю'), { silent: true });
  link(A4[0] - 980, A4[1] - 270, Wt('сын') + .5, Wt('отдает') - .2);
  travel(Wt('сын') + .5, Wt('отдает') - .2);
  hold(Wt('отдает') - .2, Wt('мстит') + .6, A4[0] - 640, A4[1] - 40, 1.25, -.02, { dz: .06 });
  camKey(Wt('выясняется') + .4, A4[0] + 40, A4[1] + 20, 1.05, .01); camKey(Wt('подтолкнула') + .4, A4[0] + 300, A4[1] - 40, .98, .015);
  hold(Wt('покушению') - .2, Wt('сына') + .5, A4[0] + 760, A4[1] - 110, 1.4, .03, { dz: .06 });

  // S5 · season 3 key, flashback (A5)
  const A5 = [-200, 2300]; lamp(A5[0], A5[1] - 200, 2300, .95);
  const key = typedCard({ x: A5[0] - 900, y: A5[1] - 260, w: 560, h: 340, rot: -.03, order: 500, tIn: T_START,
    extra: (g, t) => { const p = eout(prog(t, Wt('ключ') - .1, Wt('ключ') + .3)); if (p <= 0) return; g.save(); g.translate(120, 60); g.rotate(-.5 + (1 - p) * -.6); g.scale(p, p); g.strokeStyle = '#a07a2a'; g.fillStyle = '#c99a3a'; g.lineWidth = 10;
      g.beginPath(); g.arc(-90, 0, 40, 0, 7); g.stroke(); g.fillRect(-50, -8, 160, 16); g.fillRect(70, 8, 14, 30); g.fillRect(95, 8, 14, 22); g.restore(); } },
    [[typed('СЕЗОН 3', Wt('третьем'), .05), -240, -90, `700 40px ${MONO}`], [typed('КЛЮЧ К ПРИСТУПАМ', Wt('ключ') + .2, .03), -240, -30, `400 28px ${MONO}`]]);
  photo({ x: A5[0] - 300, y: A5[1] + 120, w: 460, rot: -.06, order: 510, tIn: Wt('детское') + .1, dur: .3, enter: 'drop', dx: -150, dy: -200, src: { still: 'young' }, sepia: true,
    caption: typed('ВОСПОМИНАНИЕ', Wt('воспоминание'), .03, { silent: true }), capSize: 24 });
  const clv = photo({ x: A5[0] + 300, y: A5[1] - 120, w: 640, rot: .03, order: 520, tIn: Wt('отец') + .05, dur: .3, enter: 'drop', dx: 100, dy: -240, sepia: true,
    src: vid('cleaver', Wt('отец'), 0), caption: typed('ДЖОННИ БОЙ', Wt('джонни'), .05), capSize: 30 });
  clv.stamps = [stamp('ДОЛГ', Wt('долг'), { x: 140, y: 60, size: 90, rot: .08, shake: 16 })];
  const din = photo({ x: A5[0] + 1000, y: A5[1] + 160, w: 640, rot: -.04, order: 530, tIn: Wt('вечером') - .05, dur: .3, enter: 'drop', dx: 200, dy: -200, sepia: true, src: vid('dinner', Wt('вечером'), 0) });
  tag({ x: A5[0] + 760, y: A5[1] + 520, w: 260, rot: -.08, label: 'МЯСО', tIn: Wt('мясо') + .05, order: 540 });
  card({ x: A5[0] + 1060, y: A5[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 550, tIn: T_START, scrawls: [scrawl('СЧАСТЛИВА', Wt('счастлива') - .1, .55, { size: 84, rot: -.08 })] });
  sfx('chop', Wt('отрубает') + .15);
  link(A5[0] - 1150, A5[1] - 430, Wt('сына') + .5, Wt('третьем') - .1);
  travel(Wt('сына') + .5, Wt('третьем') - .1);
  hold(Wt('третьем') - .1, Wt('приступам') + .3, A5[0] - 860, A5[1] - 240, 1.35, .02, { dz: .06 });
  camKey(Wt('воспоминание') + .2, A5[0] - 300, A5[1] + 100, 1.25, -.02);
  hold(Wt('отец') + .2, Wt('долг') + .6, A5[0] + 290, A5[1] - 100, 1.32, .02, { dz: .1 });
  hold(Wt('вечером') + .1, Wt('счастлива') + .35, A5[0] + 1020, A5[1] + 220, 1.25, -.02, { dz: .1 });

  // S6 · violence and comfort braided (A6)
  const A6 = [2300, 3900]; lamp(A6[0], A6[1] - 200, 1800, 1);
  const tBr = Wt('насилие') - .1;
  typedCard({ x: A6[0] - 760, y: A6[1] - 300, w: 460, h: 140, rot: -.04, order: 600, lined: false, tIn: tBr, dur: .3, enter: 'slide', dx: -400, dy: 0 }, [[typed('НАСИЛИЕ', Wt('насилие'), .05), 0, 18, `800 54px ${SANS}`, RED, 'center']]);
  typedCard({ x: A6[0] - 760, y: A6[1] + 300, w: 460, h: 140, rot: .04, order: 600, lined: false, tIn: Wt('семейный') - .1, dur: .3, enter: 'slide', dx: -400, dy: 0 }, [[typed('УЮТ', Wt('уют'), .06), 0, 18, `800 54px ${SANS}`, '#b8860b', 'center']]);
  photo({ x: A6[0] + 640, y: A6[1], w: 620, rot: .02, order: 610, tIn: Wt('голове') - .35, dur: .3, enter: 'drop', dx: 200, dy: -200, src: { still: 'tonyclose' } });
  item({ x: A6[0], y: A6[1], w: 1400, h: 900, shadow: 0, order: 605, tIn: T_START, lit: false,
    draw: (g, t) => {
      const p = eio(prog(t, Wt('насилие') + .2, Wt('голове') + .1)); if (p <= 0) return;
      const x0 = -530, x1 = 330, n = 80, k = Math.floor(n * p);
      [['#c62a22', -300, 0], ['#d4a72c', 300, Math.PI]].forEach(([col, y0, ph]) => {
        g.save(); g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = 9; g.lineCap = 'round'; g.beginPath();
        for (let i = 0; i <= k; i++) { const u = i / n, x = lerp(x0, x1, u), y = y0 * (1 - eio(clamp(u * 1.6))) + Math.sin(u * 18 + ph) * 46 * clamp(u * 2.2); i ? g.lineTo(x + 5, y + 7) : g.moveTo(x + 5, y + 7); } g.stroke();
        g.strokeStyle = col; g.lineWidth = 7; g.beginPath();
        for (let i = 0; i <= k; i++) { const u = i / n, x = lerp(x0, x1, u), y = y0 * (1 - eio(clamp(u * 1.6))) + Math.sin(u * 18 + ph) * 46 * clamp(u * 2.2); i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); g.restore();
      });
    } });
  sfx('zip', Wt('насилие') + .2, { dur: 2.4 });
  link(A6[0] - 1000, A6[1] - 380, Wt('счастлива') + .35, Wt('насилие') + .15);
  travel(Wt('счастлива') + .35, Wt('насилие') + .15);
  camKey(Wt('насилие') + .15, A6[0] - 420, A6[1] - 20, 1.0, -.01); camKey(Wt('голове'), A6[0] + 200, A6[1], 1.02, .01); hold(Wt('голове') + .3, Wt('детства', 2) + .8, A6[0] + 420, A6[1], 1.1, .015, { dz: .05 });

  // S7 · who raised him: evil -> trauma (A7)
  const A7 = [4700, 3700]; lamp(A7[0], A7[1] - 200, 1800, 1);
  photo({ x: A7[0] - 520, y: A7[1] - 330, w: 400, rot: -.06, order: 700, tIn: Wt('кто') - .1, dur: .28, enter: 'drop', dx: -150, dy: -150, src: { still: 'livia' }, sepia: true, caption: typed('МАТЬ', Wt('кто'), .001, { silent: true }), capSize: 24 });
  photo({ x: A7[0] + 520, y: A7[1] - 330, w: 400, rot: .06, order: 701, tIn: Wt('кто') + .05, dur: .28, enter: 'drop', dx: 150, dy: -150, src: vid('cleaver', Wt('кто'), 6.5), sepia: true, caption: typed('ОТЕЦ', Wt('кто'), .001, { silent: true }), capSize: 24 });
  photo({ x: A7[0], y: A7[1] + 60, w: 480, rot: .01, order: 702, tIn: Wt('вырастил') - .1, dur: .28, enter: 'drop', dx: 0, dy: -150, src: { still: 'tonyclose' }, caption: typed('СЫН', Wt('вырастил'), .001, { silent: true }), capSize: 26 });
  const arrows = card({ x: A7[0], y: A7[1], w: 1, h: 1, shadow: 0, lit: false, order: 703, tIn: T_START });
  arrows.pens = [pen([[-400, -180], [-180, -40]], Wt('вырастил') + .1, .25, { width: 7 }), pen([[400, -180], [180, -40]], Wt('вырастил') + .3, .25, { width: 7 })];
  const ev = typedCard({ x: A7[0] + 20, y: A7[1] + 470, w: 900, h: 190, rot: -.015, order: 710, lined: false, tIn: Wt('поступки') - .1, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('ЗЛО', Wt('злом'), .06), -330, 20, `800 64px ${SANS}`]]);
  ev.pens = [pen([[-360, 8], [-180, 2]], Wt('последствием') - .05, .2, { width: 9 })];
  ev.stamps = [stamp('ТРАВМА', Wt('травмы'), { x: 150, y: 0, size: 90, rot: -.07, shake: 16 })];
  link(A7[0] - 720, A7[1] - 520, Wt('детства', 2) + .8, Wt('когда') - .05);
  travel(Wt('детства', 2) + .8, Wt('когда') + .1);
  hold(Wt('когда') + .1, Wt('вырастил') + .8, A7[0], A7[1] - 120, .95, .01, { dz: .08 });
  hold(Wt('поступки') + .3, Wt('травмы') + .8, A7[0] + 40, A7[1] + 380, 1.25, -.015, { dz: .07 });

  // S8 · the show doesn't acquit, it hands us the material (A8)
  const A8 = [6900, 3500]; lamp(A8[0], A8[1] - 200, 2200, 1);
  const form = card({ x: A8[0], y: A8[1], w: 860, h: 560, rot: .015, order: 800, tIn: T_START, lined: true,
    text: (g, t, it) => { drawTyped(g, it.h1, t, -390, -100, `700 36px ${MONO}`); drawChecks(g, t, it.cl); } });
  form.h1 = typed('ВЕРДИКТ СЕРИАЛА', Wt('оправдывает') - .7, .035); form.cl = [checkLine('ОПРАВДАН', Wt('оправдывает') + .05, 'x', -330, 40)];
  const mats = ['s1', 'bbq', 'ducks', 'family', 'melfi', 'livia', 'young', 'greengrove'];
  mats.forEach((k, i) => {
    const a = -.9 + i * .26, t = Wt('материал') - .25 + i * .07;
    photo({ x: A8[0] + Math.sin(a) * 760, y: A8[1] + 560 - Math.cos(a) * 130, w: 330, rot: a * .35, order: 810 + i, tIn: t, dur: .32, enter: 'slide', dx: Math.sin(a) * 900, dy: 700, src: { still: k }, snd: i % 2 === 0 });
  });
  item({ x: A8[0] + 160, y: A8[1] + 120, w: 900, h: 80, order: 830, tIn: Wt('оправдывать') - .1, dur: .45, enter: 'slide', dx: 900, dy: 300, drot: .5, rot: -.35,
    draw: (g) => { g.fillStyle = '#141110'; g.beginPath(); g.roundRect(-420, -22, 760, 44, 22); g.fill(); g.fillStyle = '#c9a54a'; g.fillRect(200, -23, 48, 46); g.fillStyle = '#1b1715';
      g.beginPath(); g.moveTo(-420, -18); g.lineTo(-500, 0); g.lineTo(-420, 18); g.fill(); g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(-400, -16, 720, 6); } });
  link(A8[0] - 430, A8[1] - 300, Wt('травмы') + .8, Wt('оправдывает') - .9);
  travel(Wt('травмы') + .8, Wt('оправдывает') - .9);
  hold(Wt('оправдывает') - .9, Wt('оправдывает') + .7, A8[0] - 60, A8[1] - 30, 1.3, .015, { dz: .06 });
  camKey(Wt('материал') + .2, A8[0], A8[1] + 220, .82, 0); camKey(Wt('самим') + .2, A8[0] + 100, A8[1] + 160, 1.1, -.02); camKey(T_END, A8[0] + 140, A8[1] + 150, 1.22, -.03);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3000, 1100, 'smoke', 1.6, 1.5, 0, .8], [5600, 1000, 'pen', 1.2, 1.85, .5], [600, 3300, 'cup', 1.0, 1.9], [3400, 2900, 'smoke', 1.7, 1.5, 0, .8], [6000, 4500, 'ashtray', 1.0, 1.9], [8000, 3000, 'pen', 1.2, 1.85, -.3]]);
  CAMK.sort((a, b) => a.t - b.t);
}
