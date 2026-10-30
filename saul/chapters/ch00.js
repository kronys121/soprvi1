// 00 · cold open + intro
CH_V0 = 0;
const [T_START, T_END] = chRange(0);
FADE_IN = .6;
function buildScenes() {
  // S0 · Walter, Gus, Jesse — and Saul, whom we didn't take seriously
  const A0 = [0, 0]; lamp(A0[0], A0[1] - 200, 2200, 1);
  pw('walthat', .2, { x: A0[0] - 640, y: A0[1] - 60, w: 440, rot: -.05, order: 100, caption: capt('УОЛТЕР: ЧУДОВИЩЕ', Wt('чудовищем') - .2), capSize: 20 });
  pw('gus', Wt('гуса') - .3, { x: A0[0] - 160, y: A0[1] - 80, w: 440, rot: .02, order: 110, caption: capt('ГУС: НЕ ВРАЛ СЕБЕ', Wt('врал') - .3), capSize: 20 });
  pw('jesse', Wt('джесси') - .3, { x: A0[0] + 320, y: A0[1] - 60, w: 440, rot: .05, order: 120, caption: capt('ДЖЕССИ: БОЯЛИСЬ', Wt('боялись') - .2), capSize: 20 });
  const sl = pw('saulface', Wt('сола') - .3, { x: A0[0] + 780, y: A0[1] + 40, w: 460, rot: -.03, order: 130, caption: capt('СОЛ: НЕ ВСЕРЬЁЗ', Wt('всерьёз') - .3), capSize: 20 });
  camKey(0, A0[0] - 600, A0[1] - 40, 1.05, -.015); camKey(Wt('уолтером') + .8, A0[0] - 620, A0[1] - 50, 1.12, -.02);
  camKey(Wt('гуса') + .2, A0[0] - 160, A0[1] - 60, 1.08, .01); camKey(Wt('джесси') + .2, A0[0] + 320, A0[1] - 50, 1.08, .015);
  camKey(Wt('сола') + .2, A0[0] + 760, A0[1] + 40, 1.08, -.01);

  // S1 · the cheap lawyer: loud suit, late-night ads, the inflatable Statue of Liberty — a clown
  const A1 = [2600, 0]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const ad = card({ x: A1[0] - 420, y: A1[1] - 60, w: 640, h: 420, rot: -.03, order: 200, color: '#f6e04a', lined: false, tIn: Wt('дешёвый') - .3, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t) => { g.fillStyle = '#c61f1f'; g.font = `800 64px ${SANS}`; g.textAlign = 'center'; g.fillText('LUCHSHE', 0, -100); g.fillText('ZVONITE', 0, -20); g.fillStyle = '#1b3b8a'; g.font = `800 96px ${SANS}`; g.fillText('SOLU!', 0, 100); } });
  ad.text = (g) => { g.fillStyle = '#c61f1f'; g.font = `800 58px ${SANS}`; g.textAlign = 'center'; g.fillText('ЛУЧШЕ', 0, -100); g.fillText('ЗВОНИТЕ', 0, -30); g.fillStyle = '#1b3b8a'; g.font = `800 92px ${SANS}`; g.fillText('СОЛУ!', 0, 90); };
  pw('suits', Wt('костюме') - .5, { x: A1[0] + 360, y: A1[1] - 220, w: 460, rot: .04, order: 210, off: 2 });
  pw('tubeman', Wt('надувная') - .3, { x: A1[0] + 420, y: A1[1] + 220, w: 440, rot: -.04, order: 220, caption: capt('НАДУВНАЯ СВОБОДА', Wt('свободы')), capSize: 20 });
  const cl = card({ x: A1[0] - 100, y: A1[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 230, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  cl.s = stamp('КЛОУН', Wt('клоун'), { size: 96, rot: -.08, shake: 16 });
  goTo(A1, Wt('всерьёз') + .4, Wt('дешёвый') + .1, A1[0] - 700, A1[1] - 500);
  hold(Wt('дешёвый') + .1, Wt('телевидении') + .3, A1[0] - 420, A1[1] - 60, 1.08, -.015, { dz: .05 });
  camKey(Wt('надувная') + .2, A1[0] + 380, A1[1] + 20, 1.0, .015); camKey(Wt('клоун') + .4, A1[0] + 60, A1[1] + 200, .9, 0);

  // S2 · six seasons of his own show: behind the clown, one of the saddest people on TV
  const A2 = [5200, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  for (let i = 0; i < 6; i++) {
    const t = Wt('создатели') + i * .16, u = i - 2.5;
    item({ draw: drawFolder, x: A2[0] + u * 260, y: A2[1] + 20 + Math.abs(u) * 30, rot: u * .05, w: 380, h: 280, tIn: t, dur: .3, enter: 'slide', dx: u * 60, dy: 700, drot: u * .1, tab: `СЕЗОН ${i + 1}`, order: 300 + i });
  }
  card({ x: A2[0], y: A2[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('ОДИН ИЗ САМЫХ ГРУСТНЫХ', Wt('грустных') - .4, .6, { size: 54, rot: -.04 })] });
  goTo(A2, Wt('клоун') + .5, Wt('=потом') + .1, A2[0] - 800, A2[1] - 500);
  hold(Wt('=потом') + .1, Wt('телевидении', 2) + .4, A2[0], A2[1] + 40, .82, .01, { dz: .1 });

  // S3 · Saul Goodman is a costume: the mask Jimmy McGill put on
  const A3 = [5200, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const mk = item({ x: A3[0] - 120, y: A3[1] - 20, w: 900, h: 560, order: 400, tIn: Wt('потому', 2) - .3, dur: .35, enter: 'drop', dx: 0, dy: -300, srcs: () => [{ still: 'saulface' }, { still: 'jimmyname' }],
    draw: (g, t, it) => { const p = eio(prog(t, Wt('надел') - .2, Wt('макгилл') + .3));
      g.fillStyle = PAPER; g.fillRect(-450, -280, 900, 560);
      const a = got(stillUrl('saulface')), b = got(stillUrl('jimmyname'));
      if (b) g.drawImage(b, -420, -250, 840, 472); if (a) { g.globalAlpha = 1 - p; g.drawImage(a, -420, -250, 840, 472); g.globalAlpha = 1; }
      g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'center'; g.fillText(p < .5 ? 'СОЛ ГУДМАН' : 'ДЖИММИ МАКГИЛЛ', 0, 262); } });
  sfx('flip', Wt('надел') - .1);
  card({ x: A3[0] - 120, y: A3[1] - 340, w: 1, h: 1, shadow: 0, lit: false, order: 410, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) }).s = stamp('КОСТЮМ', Wt('костюм', 2) - .05, { size: 90, rot: -.06, shake: 14 });
  card({ x: A3[0] + 560, y: A3[1] + 340, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('ЧТОБЫ НЕ ЧУВСТВОВАТЬ', Wt('чувствовать') - .3, .55, { size: 50, rot: -.05 })] });
  goTo(A3, Wt('телевидении', 2) + .5, Wt('потому', 2) + .1, A3[0] - 800, A3[1] - 520);
  hold(Wt('потому', 2) + .1, Wt('человек') + .3, A3[0] - 120, A3[1] - 140, 1.0, -.01, { dz: .04 });
  camKey(Wt('маска') + .2, A3[0] - 120, A3[1] - 20, 1.08, 0); camKey(Wt('чувствовал') + .4, A3[0] + 200, A3[1] + 140, .95, .01);

  // S4 · the dossier: not what he did but why; when did Jimmy die; spoilers
  const A4 = [2600, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  mugBoard(A4, { still: 'saulface' }, typed('ГУДМАН, СОЛ', Wt('досье'), .045), typed('он же ДЖЕЙМС МАКГИЛЛ', Wt('гудмана', 2) + .3, .03, { silent: true }), { order: 500 });
  typedCard({ x: A4[0] + 800, y: A4[1] + 220, w: 600, h: 300, rot: .04, order: 520, tIn: Wt('почему') - .3, dur: .3, enter: 'slide', dx: 500, dy: 100 },
    [[typed('НЕ ЧТО — А ПОЧЕМУ', Wt('почему') - .1, .035), -270, -80, `700 32px ${MONO}`], [typed('что сломало Джимми?', Wt('сломало') - .2, .03), -270, -20, `400 28px ${MONO}`],
     [typed('когда он умер?', Wt('умер') - .3, .03), -270, 40, `400 28px ${MONO}`], [typed('и умер ли вообще?', Wt('вообще', 2) - .4, .03), -270, 100, `700 30px ${MONO}`, RED]]);
  const st6 = card({ x: A4[0] + 300, y: A4[1] - 300, w: 1, h: 1, shadow: 0, order: 540, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  st6.s = stamp('ВНИМАНИЕ', Wt('дальше') + .05, { size: 110, rot: -.1, shake: 12 });
  TAPES.push({ t0: Wt('спойлеры') - .3, dur: .5, ang: -.2, y: -60, dir: 1, out: T_END - .45 });
  TAPES.push({ t0: Wt('шести') - .3, dur: .45, ang: .16, y: 170, dir: -1, out: T_END - .4 });
  TAPES.forEach(tp => sfx('tape', tp.t0, { dur: tp.dur }));
  goTo(A4, Wt('чувствовал') + .5, Wt('сегодня') + .1, A4[0] - 600, A4[1] - 420);
  hold(Wt('сегодня') + .1, Wt('сделал') + .3, A4[0], A4[1] - 40, 1.05, .01, { dz: .06 });
  camKey(Wt('почему') + .3, A4[0] + 560, A4[1] + 180, 1.0, .015); camKey(Wt('вообще', 2) + .4, A4[0] + 600, A4[1] + 220, 1.08, .02);
  camKey(Wt('дальше') + .3, A4[0] + 200, A4[1] - 60, 1.02, -.02); camKey(T_END, A4[0] + 260, A4[1] - 20, 1.12, -.04);

  ensureFG([[-1000, 700, 'ashtray', 1.1, 1.9], [3600, 600, 'smoke', 1.6, 1.5, 0, .8], [6200, 900, 'cup', 1.0, 1.9], [1400, 2600, 'pen', 1.2, 1.85, .4]]);
  CAMK.sort((a, b) => a.t - b.t);
}
