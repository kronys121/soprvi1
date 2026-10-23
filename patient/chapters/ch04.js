// 04 · МУЖ
CH_V0 = 235.4;
const [T_START, T_END] = chRange(4);
function buildScenes() {
  const D = [0, 0]; divider(D, 4, 'МУЖ', T_START);
  hold(T_START, Wt('брак') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · a separate case: marriage (A1)
  const A1 = [1900, -200]; lamp(A1[0], A1[1] - 200, 1600, 1);
  item({ draw: drawFolder, x: A1[0], y: A1[1], w: 1100, h: 720, rot: .02, order: 100, tIn: Wt('кармелы') + .05, dur: .4, enter: 'slide', dx: 1400, dy: -200, drot: .2, tab: 'ДЕЛО № 2',
    text: (g, t) => { const im = got(stillUrl('carmela')); g.save(); g.rotate(-.03); g.fillStyle = '#eee9de'; g.fillRect(-300, -250, 600, 400); if (im) g.drawImage(im, -280, -230, 560, 318); g.restore();
      g.fillStyle = INK; g.font = `800 64px ${SANS}`; g.textAlign = 'center'; g.letterSpacing = '8px'; g.fillText('БРАК', 0, 260); g.letterSpacing = '0px'; drawClip(g, -150, -262); },
    srcs: () => [{ still: 'carmela' }] });
  card({ x: A1[0], y: A1[1], w: 1, h: 1, shadow: 0, lit: false, order: 110, tIn: T_START, stamps: [stamp('ОТДЕЛЬНОЕ ДЕЛО', Wt('дело') - .05, { x: 280, y: -300, size: 50, rot: .1, shake: 9 })], draw: (g, t, it) => drawStamp(g, it.stamps[0], t) });
  link(A1[0] - 520, A1[1] - 380, Wt('брак') + .3, Wt('тони') + .3);
  travel(Wt('брак') + .3, Wt('тони') + .3);
  hold(Wt('тони') + .3, Wt('дело') + .5, A1[0], A1[1] + 10, 1.02, .01, { dz: .1 });

  // S2 · cheating, and she knows (A2)
  const A2 = [4300, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  photo({ x: A2[0] - 760, y: A2[1] - 120, w: 560, rot: -.06, order: 200, tIn: Wt('изменяет') + .05, dur: .28, enter: 'drop', dx: -200, dy: -200, src: vid('gloria', Wt('изменяет'), 1.0) });
  photo({ x: A2[0] - 340, y: A2[1] + 120, w: 520, rot: .05, order: 201, tIn: Wt('ей') + .05, dur: .28, enter: 'drop', dx: -100, dy: -200, src: { still: 'gloria2' } });
  const tally = card({ x: A2[0] - 560, y: A2[1] + 480, w: 620, h: 150, rot: -.02, order: 205, tIn: Wt('изменяет') + .3, dur: .3, enter: 'slide', dx: 0, dy: 300, lined: false,
    text: (g, t) => { g.fillStyle = INK; g.font = `700 40px ${MONO}`; g.textAlign = 'left'; g.fillText('ИЗМЕНЫ:', -280, 14); } });
  tally.pens = []; for (let k = 0; k < 9; k++) { const x = -40 + k * 34 + (k > 4 ? 30 : 0), t = Wt('постоянно') - .1 + k * .1; tally.pens.push(k === 4 ? pen([[-50, 40], [110, -40]], t, .09, { width: 6 }) : pen([[x, -40], [x - 6, 40]], t, .07, { width: 6 })); }
  const ck = photo({ x: A2[0] + 520, y: A2[1] - 20, w: 680, rot: .03, order: 210, tIn: Wt('кармела') - .05, dur: .3, enter: 'drop', dx: 200, dy: -240, src: { still: 'carmknows' } });
  ck.stamps = [stamp('ЗНАЕТ', Wt('знает'), { x: 0, y: 80, size: 100, rot: -.09, shake: 16 })];
  link(A2[0] - 1050, A2[1] - 300, Wt('дело') + .5, Wt('он') + .1);
  travel(Wt('дело') + .5, Wt('он') + .1);
  camKey(Wt('он') + .1, A2[0] - 560, A2[1] + 80, .98, -.015); camKey(Wt('постоянно') + .8, A2[0] - 500, A2[1] + 200, 1.05, -.02);
  hold(Wt('кармела') + .2, Wt('знает') + .6, A2[0] + 500, A2[1] + 10, 1.22, .02, { dz: .06 });

  // S3 · big house, money, eyes shut (A3)
  const A3 = [4300, 1800]; lamp(A3[0], A3[1] - 200, 2100, 1);
  photo({ x: A3[0] - 620, y: A3[1] - 80, w: 640, rot: -.04, order: 300, tIn: Wt('доме') - .1, dur: .3, enter: 'drop', dx: -200, dy: -240, src: { still: 'poolhouse' }, caption: typed('БОЛЬШОЙ ДОМ', Wt('доме') + .1, .04, { silent: true }), capSize: 28 });
  const rb = rng(31);
  for (let i = 0; i < 26; i++) {
    const t = Wt('деньги') - .2 + i * .045;
    item({ x: A3[0] - 100 + (rb() - .5) * 1500, y: A3[1] + 120 + (rb() - .5) * 700, rot: (rb() - .5) * 1.4, w: 300, h: 128, order: 310 + i, tIn: t, dur: .35, enter: 'drop', dx: (rb() - .5) * 200, dy: -300, drot: (rb() - .5) * 1.5, snd: i % 4 === 0,
      draw: (g) => { g.fillStyle = '#9fb59a'; g.fillRect(-150, -64, 300, 128); g.strokeStyle = '#3d5a3a'; g.lineWidth = 4; g.strokeRect(-138, -52, 276, 104); g.fillStyle = '#3d5a3a'; g.beginPath(); g.ellipse(0, 0, 34, 42, 0, 0, 7); g.fill(); g.font = `800 30px ${SANS}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('100', -96, -26); g.fillText('100', 96, 30); } });
  }
  const cp = photo({ x: A3[0] + 560, y: A3[1] - 40, w: 680, rot: .035, order: 350, tIn: Wt('закрывает') - .25, dur: .3, enter: 'drop', dx: 200, dy: -240, src: { still: 'carmpool' },
    over: (g, t, x, y, w, h) => { const p = eout(prog(t, Wt('глаза') - .05, Wt('глаза') + .25)); if (p <= 0) return; g.fillStyle = '#080706'; g.fillRect(x + w * .3, y + h * .27, w * .4 * p, h * .14); } });
  sfx('slide', Wt('глаза') - .05, { dur: .3 });
  link(A3[0] - 940, A3[1] - 320, Wt('знает') + .6, Wt('живет') + .1);
  travel(Wt('знает') + .6, Wt('живет') + .1);
  camKey(Wt('живет') + .1, A3[0] - 560, A3[1] - 40, 1.15, -.02); camKey(Wt('деньги') + .5, A3[0] - 100, A3[1] + 60, .82, 0);
  hold(Wt('закрывает'), Wt('берутся') + .5, A3[0] + 540, A3[1] - 30, 1.3, .02, { dz: .06 });

  // S4 · she throws him out: divorce papers (A4)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, 1);
  const wc = photo({ x: A4[0] - 400, y: A4[1] - 40, w: 760, rot: -.02, order: 400, tIn: Wt('четвертом') + .35, dur: .3, enter: 'drop', dx: -200, dy: -260, src: vid('whitecaps', Wt('четвертом') + .2, 0) });
  wc.stamps = [stamp('ВЫГНАН', Wt('тони', 2) + .1, { x: 120, y: 90, size: 90, rot: -.08, shake: 16 })];
  const dv = typedCard({ x: A4[0] + 560, y: A4[1] + 120, w: 620, h: 520, rot: .03, order: 410, tIn: Wt('смотрим') - .1, dur: .3, enter: 'slide', dx: 500, dy: 100 },
    [[typed('ЗАЯВЛЕНИЕ', Wt('ссоры'), .05), -280, -110, `700 40px ${MONO}`], [typed('О РАЗВОДЕ', Wt('развод'), .05), -280, -50, `700 40px ${MONO}`],
     [typed('Т. СОПРАНО', Wt('знакомых'), .03, { silent: true }), -280, 50, `400 30px ${MONO}`], [typed('К. СОПРАНО', Wt('людей'), .03, { silent: true }), -280, 110, `400 30px ${MONO}`]]);
  link(A4[0] - 790, A4[1] - 280, Wt('берутся') + .5, Wt('четвертом') + .2);
  travel(Wt('берутся') + .5, Wt('четвертом') + .2);
  hold(Wt('четвертом') + .2, Wt('тони', 2) + .8, A4[0] - 380, A4[1] - 10, 1.2, -.02, { dz: .1 });
  camKey(Wt('смотрим') + .3, A4[0] + 100, A4[1] + 60, .95, .01); hold(Wt('развод') - .2, Wt('людей') + .5, A4[0] + 520, A4[1] + 100, 1.25, .02, { dz: .06 });

  // S5 · neither victim nor saint: accomplice (A5)
  const A5 = [-200, 2000]; lamp(A5[0], A5[1] - 200, 1800, 1);
  photo({ x: A5[0] - 560, y: A5[1] - 40, w: 560, rot: -.05, order: 500, tIn: Wt('кармела', 2) - .3, dur: .3, enter: 'drop', dx: -200, dy: -200, src: vid('carmyell', Wt('кармела', 2) - .3, 0) });
  const q = card({ x: A5[0] + 380, y: A5[1] + 20, w: 760, h: 560, rot: .02, order: 510, lined: true, tIn: Wt('кармела', 2) - .1, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 32px ${MONO}`; g.textAlign = 'left'; g.fillText('АНКЕТА: К. СОПРАНО', -340, -205); drawChecks(g, t, it.cl); drawTyped(g, it.ty, t, -280, 230, `400 28px ${MONO}`, '#5a4a3a'); } });
  q.cl = [checkLine('ЖЕРТВА', Wt('жертва') + .1, 'x', -300, -100), checkLine('СВЯТАЯ', Wt('святая') + .1, 'x', -300, 0), checkLine('СОУЧАСТНИЦА', Wt('соучастница') + .2, 'v', -300, 100)];
  q.ty = typed('(иногда это осознаёт)', Wt('иногда'), .035, { silent: true });
  link(A5[0] - 840, A5[1] - 240, Wt('людей') + .5, Wt('кармела', 2) + .1);
  travel(Wt('людей') + .5, Wt('кармела', 2) + .1);
  hold(Wt('кармела', 2) + .1, Wt('осознает') + .6, A5[0] + 260, A5[1] + 20, 1.15, .015, { dz: .1 });

  // S6 · everyone is involved: a system (A6)
  const A6 = [2100, 3800]; lamp(A6[0], A6[1] - 100, 2300, 1);
  const center = photo({ x: A6[0], y: A6[1], w: 520, rot: 0, order: 600, tIn: Wt('окружение') - .2, dur: .3, enter: 'drop', dx: 0, dy: -200, src: { still: 'tonyclose' }, caption: typed('ТОНИ', Wt('окружение'), .001, { silent: true }), capSize: 28 });
  const ring = [['carmela', 'КАРМЕЛА'], ['paulie', 'ПОЛИ'], ['chris', 'КРИСТОФЕР'], ['livia', 'ЛИВИЯ'], ['junior', 'ДЖУНИОР'], ['pussy', 'КИСКА']];
  ring.forEach(([k, lab], i) => {
    const a = -Math.PI / 2 + i * Math.PI / 3, x = A6[0] + Math.cos(a) * 860, y = A6[1] + Math.sin(a) * 520, t = Wt('тони', 3) + i * .14;
    photo({ x, y, w: 330, rot: (i % 2 ? .06 : -.06), order: 610 + i, tIn: t, dur: .28, enter: 'drop', dx: Math.cos(a) * 200, dy: Math.sin(a) * 200 - 100, src: { still: k }, caption: typed(lab, t + .1, .001, { silent: true }), capSize: 22, snd: i % 2 === 0 });
    pin(x, y - 100, t + .05, { silent: true });
    thread([[x, y - 100], [A6[0], A6[1] - 150]], Wt('замешаны') + i * .08, Wt('замешаны') + i * .08 + .4, { silent: i > 0, width: 4 });
    thread([[x, y - 100], [A6[0], A6[1] - 150]], Wt('системы') - .05, Wt('системы') - .05, { silent: true, width: 9, color: '#e8463a' });
  });
  pin(A6[0], A6[1] - 150, Wt('окружение'), { silent: true });
  sfx('hitlow', Wt('системы'));
  const lv = typedCard({ x: A6[0], y: A6[1] + 640, w: 760, h: 140, rot: -.015, order: 650, lined: false, tIn: Wt('личным') - .25, dur: .25, enter: 'slide', dx: 0, dy: 300 },
    [[typed('ЛИЧНЫЙ ВЫБОР', Wt('личным'), .04), 0, 18, `800 56px ${SANS}`, INK, 'center']]);
  lv.pens = [pen([[-250, 4], [250, -4]], Wt('выбором') - .05, .25, { width: 10 })];
  link(A6[0] - 300, A6[1] - 600, Wt('осознает') + .6, Wt('важно') + .1);
  travel(Wt('осознает') + .6, Wt('важно') + .1);
  camKey(Wt('важно') + .1, A6[0], A6[1] - 40, 1.25, .01); camKey(Wt('тони', 3) + .9, A6[0], A6[1] + 20, .62, 0);
  camKey(Wt('системы') + .4, A6[0] + 30, A6[1] + 120, .66, -.01); camKey(Wt('личным') + .1, A6[0] + 10, A6[1] + 450, .95, 0); camKey(T_END, A6[0] + 20, A6[1] + 480, 1.05, .01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8], [3400, 4700, 'ashtray', 1.0, 1.9]]);
  CAMK.sort((a, b) => a.t - b.t);
}
