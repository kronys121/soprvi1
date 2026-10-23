// 06 · ХУЖЕ НЕГО
CH_V0 = 332.4;
const [T_START, T_END] = chRange(6);
function buildScenes() {
  const D = [0, 0]; divider(D, 6, 'ХУЖЕ НЕГО', T_START);
  hold(T_START, Wt('есть') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · trick #2 card, then the line-up (A1)
  const A1 = [2600, 300]; lamp(A1[0], A1[1] - 300, 2600, 1);
  const pc = typedCard({ x: A1[0] - 1250, y: A1[1] - 820, w: 620, h: 300, rot: -.03, order: 100, tIn: T_START },
    [[typed('ПРИЁМ №2', Wt('один'), .05), -280, -50, `700 40px ${MONO}`], [typed('кто-то всегда хуже', Wt('рядом') + .1, .03), -280, 30, `400 32px ${MONO}`]]);
  pc.pens = [pen([[-280, 50], [60, 44], [120, 54]], Wt('хуже') - .05, .3, { width: 8 })];
  item({ x: A1[0], y: A1[1], w: 2700, h: 1000, order: 110, tIn: T_START,
    draw: (g) => {
      g.fillStyle = '#2c2d2e'; g.fillRect(-1350, -500, 2700, 1000);
      g.strokeStyle = 'rgba(230,225,215,.42)'; g.fillStyle = 'rgba(230,225,215,.6)'; g.font = `700 26px ${MONO}`; g.textAlign = 'left';
      for (let k = 0; k <= 10; k++) { const y = 420 - k * 84; g.lineWidth = k % 2 ? 1.5 : 3; g.beginPath(); g.moveTo(-1350, y); g.lineTo(1350, y); g.stroke(); if (k % 2 === 0) g.fillText(`${150 + k * 5}`, -1335, y - 8); }
      g.fillStyle = 'rgba(230,225,215,.75)'; g.font = `800 40px ${SANS}`; g.textAlign = 'center'; [1, 2, 3, 4].forEach((n, i) => g.fillText(String(n), -1020 + i * 680, -440));
    } });
  const lineup = [['richie', 'РИЧИ АПРИЛ', 'ричи', -1020], ['tonyclose', 'ТОНИ СОПРАНО', 'тони', -340], ['ralphface', 'РАЛЬФ СИФАРЕТТО', 'ральф', 340], ['phil', 'ФИЛ ЛЕОТАРДО', 'фил', 1020]];
  const dim = t => eio(prog(t, Wt('фоне') - .2, Wt('фоне') + .5)), ph = {};
  lineup.forEach(([k, name, w, dx], i) => {
    const t = Wt(w) - .1, tony = k === 'tonyclose';
    ph[k] = photo({ x: A1[0] + dx, y: A1[1] - 20, w: 560, rot: (i % 2 ? .02 : -.02), order: 120 + i, tIn: t, dur: .28, enter: 'drop', dx: 0, dy: -240, src: { still: k },
      caption: typed(name, t + .2, .03, { silent: true }), capSize: 24,
      greyAt: tony ? null : t => dim(t) * .8, over: tony ? null : (g, t, x, y, w, h) => { const d = dim(t); if (d > 0) { g.fillStyle = `rgba(0,0,0,${d * .5})`; g.fillRect(x, y, w, h); } } });
  });
  item({ x: A1[0] - 340, y: A1[1] - 20, w: 900, h: 700, order: 119, shadow: 0, lit: false, tIn: T_START,
    draw: (g, t) => { const d = dim(t); if (d <= 0) return; const gr = g.createRadialGradient(0, 0, 100, 0, 0, 520); gr.addColorStop(0, `rgba(255,220,160,${.35 * d})`); gr.addColorStop(1, 'rgba(255,220,160,0)'); g.fillStyle = gr; g.fillRect(-520, -520, 1040, 1040); } });
  [['ЖЕСТОКИЕ', 'жестокие', -1020], ['МЕЛОЧНЫЕ', 'мелочные', 340], ['БЕЗ РЕФЛЕКСИИ', 'без', 1020]].forEach(([lab, w, dx], i) =>
    tag({ x: A1[0] + dx, y: A1[1] + 380, w: 470, rot: (i - 1) * .05, label: lab, tIn: Wt(w) + .05, order: 140 + i, size: 40 }));
  const ok = card({ x: A1[0] - 340, y: A1[1] + 420, w: 560, h: 210, rot: .02, order: 150, tIn: Wt('который') - .2, dur: .3, enter: 'slide', dx: 0, dy: 400,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 34px ${MONO}`) });
  ok.cl = [checkLine('ХОДИТ К ТЕРАПЕВТУ', Wt('терапевту') + .1, 'v', -250, -45), checkLine('МУЧАЕТСЯ', Wt('мучается') + .1, 'v', -250, 45)];
  tag({ x: A1[0] - 340, y: A1[1] - 420, w: 560, rot: -.03, label: 'ПОЧТИ РАЗУМНЫЙ', tIn: Wt('разумным') + .05, order: 160, size: 40 });
  link(A1[0] - 1500, A1[1] - 940, Wt('есть') + .3, Wt('еще') + .5);
  travel(Wt('есть') + .3, Wt('еще') + .5);
  hold(Wt('еще') + .5, Wt('тони') + .2, A1[0] - 1240, A1[1] - 800, 1.25, -.02, { dz: .05 });
  camKey(Wt('хуже') + .3, A1[0] - 200, A1[1] - 40, .55, 0);
  camKey(Wt('ричи') + .3, A1[0] - 1000, A1[1] + 60, 1.05, -.02); camKey(Wt('ральф') + .3, A1[0] + 330, A1[1] + 60, 1.05, .01); camKey(Wt('леотардо') + .3, A1[0] + 1000, A1[1] + 60, 1.05, .02);
  camKey(Wt('жестокие') + .4, A1[0] + 200, A1[1] + 150, .6, 0); camKey(Wt('рефлексии') + .3, A1[0] + 150, A1[1] + 120, .62, 0);
  camKey(Wt('фоне') + .4, A1[0] - 340, A1[1] + 60, .9, -.01); camKey(Wt('разумным') + .7, A1[0] - 330, A1[1] + 20, 1.05, -.015);

  // S2 · relative morality: two rulers (A2)
  const A2 = [2600, 2400]; lamp(A2[0], A2[1] - 200, 2000, 1);
  typedCard({ x: A2[0], y: A2[1] - 520, w: 940, h: 140, rot: -.015, order: 200, lined: false, tIn: Wt('это') - .25, dur: .3, enter: 'slide', dx: 0, dy: -300 }, [[typed('ОТНОСИТЕЛЬНАЯ МОРАЛЬ', Wt('относительная'), .035), 0, 18, `800 54px ${SANS}`, INK, 'center']]);
  const ruler = (y, label, tl, pos, tm, col) => card({ x: A2[0], y: A2[1] + y, w: 1500, h: 250, rot: y < 0 ? .01 : -.01, order: 210 + (y > 0), color: '#e8dcb6', tIn: tl - .3, dur: .3, enter: 'slide', dx: y < 0 ? -1600 : 1600, dy: 0,
    text: (g, t) => {
      g.strokeStyle = INK; g.lineWidth = 3; for (let k = 0; k <= 50; k++) { const x = -680 + k * 27.2; g.beginPath(); g.moveTo(x, -125); g.lineTo(x, -125 + (k % 5 ? 26 : 50)); g.stroke(); }
      g.fillStyle = INK; g.font = `700 40px ${MONO}`; g.textAlign = 'left'; g.fillText(label, -680, 70);
      g.font = `400 26px ${MONO}`; g.fillText('ХУЖЕ', -680, 110); g.textAlign = 'right'; g.fillText('ЛУЧШЕ', 680, 110);
      const p = eio(prog(t, tm, tm + .6)); if (p <= 0) return; const x = -680 + 1360 * pos * p, im = got(stillUrl('tonyclose'));
      g.save(); g.translate(x, -40); g.beginPath(); g.arc(0, 0, 48, 0, 7); g.fillStyle = col; g.fill(); g.clip(); if (im) g.drawImage(im, -70, -44, 154, 88); g.restore();
      g.strokeStyle = col; g.lineWidth = 6; g.beginPath(); g.arc(x, -40, 48, 0, 7); g.stroke();
    }, srcs: () => [{ still: 'tonyclose' }] });
  ruler(-150, 'ЧЕЛОВЕЧЕСКАЯ МЕРКА', Wt('человеческим') - .1, .18, Wt('человеческим') + .2, RED);
  ruler(200, 'МЕРКА МАФИИ', Wt('мафии') - .2, .8, Wt('мафии') + .1, '#2f6a3a');
  sfx('slide', Wt('человеческим') + .2, { dur: .6 }); sfx('slide', Wt('мафии') + .1, { dur: .6 });
  link(A2[0] - 760, A2[1] - 660, Wt('разумным') + .7, Wt('это') + .3);
  travel(Wt('разумным') + .7, Wt('это') + .3);
  hold(Wt('это') + .3, Wt('мораль') + .4, A2[0], A2[1] - 460, 1.2, .01, { dz: .05 });
  camKey(Wt('оцениваем') + .2, A2[0] - 200, A2[1] - 100, .95, -.01); camKey(Wt('меркам') + .3, A2[0] - 100, A2[1] - 80, 1.0, -.005);
  camKey(Wt('мафии') + .7, A2[0] + 150, A2[1] + 140, .98, .01);

  // S3 · a good boss: character reference (A3)
  const A3 = [5200, 2400]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const ref = card({ x: A3[0] - 300, y: A3[1], w: 820, h: 620, rot: -.02, order: 300, lined: true, tIn: Wt('ним') - .2, dur: .3, enter: 'slide', dx: -600, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.hd, t, -380, -210, `700 34px ${MONO}`); drawChecks(g, t, it.cl); } });
  ref.hd = typed('ХАРАКТЕРИСТИКА: НАЧАЛЬНИК', Wt('хороший'), .025);
  ref.cl = [checkLine('ШУТИТ', Wt('шутит') + .05, 'v', -330, -80), checkLine('ЗАБОТИТСЯ О СВОИХ', Wt('заботится') + .1, 'v', -330, 30), checkLine('УСТАЁТ ОТ РАБОТЫ', Wt('устает') + .1, 'v', -330, 140)];
  ref.stamps = [stamp('КАК ВСЕ МЫ', Wt('все', 2) + .05, { x: 120, y: 245, size: 52, rot: -.07, shake: 10 })];
  photo({ x: A3[0] + 560, y: A3[1] - 120, w: 560, rot: .05, order: 310, tIn: Wt('шутит') - .1, dur: .28, enter: 'drop', dx: 200, dy: -200, src: vid('laugh', Wt('шутит') - .1, 1.5) });
  link(A3[0] - 700, A3[1] - 320, Wt('мафии') + .7, Wt('ним') + .3);
  travel(Wt('мафии') + .7, Wt('ним') + .3);
  camKey(Wt('ним') + .3, A3[0] - 200, A3[1] - 40, 1.05, -.01); camKey(Wt('шутит') + .3, A3[0], A3[1] - 20, .95, .005);
  camKey(Wt('устает') + .4, A3[0] - 240, A3[1] + 60, 1.12, -.015); camKey(T_END, A3[0] - 200, A3[1] + 120, 1.2, -.02);

  ensureFG([[-800, 900, 'ashtray', 1.1, 1.9], [3200, -900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [1000, 3200, 'pen', 1.2, 1.85, .4], [6600, 3400, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
