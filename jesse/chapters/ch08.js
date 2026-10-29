// 08 · ЯМА  (insert: "I watched Jane die")
CH_V0 = 438.3;
const [T_START, T_END] = chRange(8);
function buildScenes() {
  const D = [0, 0]; divider(D, 8, 'ЯМА', T_START);
  hold(T_START, Wt('соглашается') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · helping Hank: the confession on camera; the plan almost works; the desert, Hank dies, Walter hands him over
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const cf = pw('jconfess', Wt('хэнку') - .3, { x: A1[0] - 380, y: A1[1] - 20, w: 760, rot: -.02, order: 100, off: 1, caption: capt('ПРИЗНАНИЕ НА КАМЕРУ · S05E12', Wt('признание')), capSize: 22 });
  OVERLAYS.push((g, t) => { const a = t > Wt('записывает') && t < Wt('срабатывает') + .6 ? 1 : 0; if (!a) return; const on = Math.floor(t * 2) % 2 === 0;
    g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = 'rgba(0,0,0,.55)'; g.fillRect(40, 40, 170, 56); if (on) { g.fillStyle = '#e8352a'; g.beginPath(); g.arc(70, 68, 12, 0, 7); g.fill(); }
    g.fillStyle = '#f2ede4'; g.font = `800 30px ${SANS}`; g.textBaseline = 'middle'; g.fillText('REC', 92, 70); g.restore(); });
  const ds = card({ x: A1[0] + 560, y: A1[1] - 20, w: 500, h: 460, rot: .03, order: 110, lined: true, tIn: Wt('пустыне') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 30px ${MONO}`) });
  ds.cl = [checkLine('НАЦИСТЫ', Wt('нацисты') + .1, 'v', -200, -150), checkLine('ХЭНК ПОГИБ', Wt('погибает') + .1, 'x', -200, -60), checkLine('ДЖЕССИ ОТДАН', Wt('джесси', 2) + .05, 'x', -200, 30)];
  goTo(A1, Wt('соглашается') + .3, Wt('помочь') + .1, A1[0] - 860, A1[1] - 420);
  hold(Wt('помочь') + .1, Wt('срабатывает') + .4, A1[0] - 380, A1[1] - 20, 1.1, -.015, { dz: .05 });
  camKey(Wt('пустыне') + .2, A1[0] + 520, A1[1] - 20, 1.05, .015); camKey(Wt('джесси', 2) + .4, A1[0] + 540, A1[1] + 20, 1.12, .015);

  // S2 · the truth about Jane (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  dlgShot('d_jane1', A2[0] - 40, A2[1] - 20, { w: 940, order: 200 });
  dlgShot('d_jane2', A2[0] + 40, A2[1] + 40, { w: 940, order: 210, rot: .02 });
  const tr = card({ x: A2[0], y: A2[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  tr.s = stamp('ПРАВДА О ДЖЕЙН', DLGT.d_jane2 + 4.4, { size: 66, rot: -.06, shake: 16 });
  goTo(A2, Wt('джесси', 2) + .5, Wt('напоследок') + .1, A2[0] - 800, A2[1] - 420);
  hold(Wt('напоследок') + .1, DLGT.d_jane1 - .2, A2[0] - 400, A2[1] - 220, 1.0, -.015, { dz: .05 });
  camKey(DLGT.d_jane1, A2[0] - 40, A2[1] - 20, 1.15, 0); camKey(DLGT.d_jane2 + 5.6, A2[0] + 40, A2[1] + 60, 1.3, .01);

  // S3 · the pit, the chain; the gang finds the tape: too dangerous to free, too useful to kill; made to cook
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, .85);
  const pt = pw('jpit', Wt('следующие') - .3, { x: A3[0] - 360, y: A3[1] - 20, w: 820, rot: -.015, order: 300, off: 3, caption: capt('ЯМА · ЦЕПЬ', Wt('цепью')), capSize: 26 });
  pw('naztape', Wt('бандиты') - .3, { x: A3[0] + 580, y: A3[1] - 220, w: 480, rot: .05, order: 310, off: 1, caption: capt('ТА САМАЯ ЗАПИСЬ', Wt('запись')), capSize: 22 });
  const dg = typedCard({ x: A3[0] + 600, y: A3[1] + 220, w: 480, h: 220, rot: -.03, order: 320, tIn: Wt('решают') - .3, dur: .3, enter: 'slide', dx: 400, dy: 200 },
    [[typed('отпустить: опасен', Wt('опасен') - .3, .03), -210, -30, `700 30px ${MONO}`], [typed('убить: полезен', Wt('полезен') - .3, .03), -210, 30, `700 30px ${MONO}`],
     [typed('→ ВАРИТЬ', Wt('варить') - .2, .05), -210, 90, `800 36px ${SANS}`, RED]]);
  goTo(A3, DLGT.d_jane2 + 5.8, Wt('следующие') + .1, A3[0] - 860, A3[1] - 440);
  hold(Wt('следующие') + .1, Wt('цепью') + .5, A3[0] - 360, A3[1] - 20, 1.1, -.015, { dz: .05 });
  camKey(Wt('бандиты') + .2, A3[0] + 560, A3[1] - 200, 1.05, .015); camKey(Wt('решают') + .3, A3[0] + 580, A3[1] + 180, 1.05, .01);

  // S4 · the escape; Andrea killed before his eyes; Brock an orphan
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, .9);
  pw('jclimb', Wt('варить') + .4, { x: A4[0] - 620, y: A4[1] - 200, w: 500, rot: -.05, order: 400, off: 2, caption: capt('ПОБЕГ', Wt('сбежать')), capSize: 26 });
  const sc = pw('jscream', Wt('наказание') - .4, { x: A4[0] - 620, y: A4[1] + 220, w: 500, rot: .04, order: 410, off: 8 });
  const an = pw('andrea', Wt('тодд') - .4, { x: A4[0] + 260, y: A4[1] - 20, w: 820, rot: .015, order: 420, off: 3 });
  an.greyAt = t => eio(prog(t, Wt('андреа'), Wt('андреа') + 1.0)) * .9;
  sfx('shot', Wt('убивает') + .3); shake(Wt('убивает') + .3, 22);
  an.stamps = [stamp('АНДРЕА', Wt('андреа') + .2, { x: 0, y: 70, size: 76, rot: -.08, shake: 16 })];
  tag({ x: A4[0] + 620, y: A4[1] - 330, w: 400, rot: .06, label: 'БРОК — СИРОТА', tIn: Wt('сиротой') - .3, order: 430, size: 38 });
  goTo(A4, Wt('варить') + .5, Wt('однажды') + .1, A4[0] - 860, A4[1] - 460);
  camKey(Wt('однажды') + .1, A4[0] - 600, A4[1] - 190, 1.1, -.02); camKey(Wt('наказание') + .1, A4[0] - 600, A4[1] + 200, 1.1, .01);
  camKey(Wt('тодд') + .2, A4[0] + 260, A4[1] - 20, 1.05, .01); camKey(Wt('андреа') + .5, A4[0] + 260, A4[1], 1.25, .015);
  camKey(Wt('сиротой') + .4, A4[0] + 380, A4[1] - 120, 1.05, .015);

  // S5 · the hardest part to watch: he pays not for his decisions but for Walter's — every one
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const pay = card({ x: A5[0] - 300, y: A5[1] - 20, w: 860, h: 460, rot: -.015, order: 500, lined: false, tIn: Wt('самая') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { drawTyped(g, it.a, t, -390, -150, `700 34px ${MONO}`); drawTyped(g, it.b, t, -390, -60, `800 44px ${SANS}`); drawPen(g, it.p, t); drawTyped(g, it.c, t, -390, 50, `800 50px ${SANS}`, RED);
      } });
  pay.a = typed('ДЖЕССИ ПЛАТИТ ЗА:', Wt('самая') + .3, .035); pay.b = typed('свои решения', Wt('свои') - .1, .04); pay.p = pen([[-400, -72], [-80, -78]], Wt('решения') + .3, .25, { width: 8 });
  pay.c = typed('решения Уолтера', Wt('уолтера', 2) - .5, .04);
  card({ x: A5[0] - 300, y: A5[1] + 340, w: 1, h: 1, shadow: 0, lit: false, order: 510, tIn: 0, scrawls: [scrawl('ЗА КАЖДОЕ', Wt('каждое') - .1, .45, { size: 72, rot: -.05 })] });
  goTo(A5, Wt('сиротой') + .6, Wt('это') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('это') + .1, Wt('невозможно') + .4, A5[0] - 300, A5[1] - 20, 1.0, -.01, { dz: .06 });
  camKey(Wt('уолтера', 2) + .4, A5[0] - 300, A5[1] + 60, 1.1, -.015); camKey(T_END, A5[0] - 300, A5[1] + 160, 1.05, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
