// 05 · АДВОКАТ — Nacho close; Jimmy; the Krazy-8 scheme; Mike finds the witness; arrest as Jorge de Guzmán
CH_V0 = 260.95;
const [T_START, T_END] = chRange(5);
function buildScenes() {
  const D = [0, 0]; divider(D, 5, 'АДВОКАТ', T_START);
  hold(T_START, Wt('понимает') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Nacho: handy and useful; saves the product under police noses; Lalo keeps him close — not knowing Nacho works for Gus
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('nachoface', Wt('ловкий') - .5, { x: A1[0] - 620, y: A1[1] - 140, w: 420, rot: -.05, order: 100, caption: capt('НАЧО ВАРГА', Wt('полезный') - .2), capSize: 22 });
  pw('lalowatch', Wt('рискуя') - .5, { x: A1[0] + 60, y: A1[1] - 60, w: 620, rot: .02, order: 110, off: 1, caption: capt('ТОВАР ИЗ-ПОД НОСА ПОЛИЦИИ', Wt('полиции') - .2), capSize: 20 });
  const sp = pw('gusface', Wt('знает') - .4, { x: A1[0] - 620, y: A1[1] + 270, w: 380, rot: .04, order: 120 });
  sp.stamps = [stamp('ШПИОН ГУСА', Wt('работает') - .1, { x: 0, y: 70, size: 44, rot: -.07, shake: 12 })];
  goTo(A1, Wt('понимает') + .2, Wt('ловкий') - .3, A1[0] - 860, A1[1] - 460);
  camKey(Wt('ловкий'), A1[0] - 600, A1[1] - 120, 1.05, -.015); camKey(Wt('рискуя') + .2, A1[0] + 60, A1[1] - 40, 1.02, .01);
  camKey(Wt('знает') + .1, A1[0] - 600, A1[1] + 240, 1.08, -.01);

  // S2 · through Nacho he meets Jimmy McGill, future Saul; ~8k fee, Lalo rounds to eight; the line with no way back
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('jimmylalo', Wt('макгиллом') - .6, { x: A2[0] - 380, y: A2[1] - 80, w: 680, rot: -.015, order: 200, off: 1, caption: capt('ДЖИММИ МАКГИЛЛ → СОЛ ГУДМАН', Wt('гудманом') - .3), capSize: 22 });
  const fee = card({ x: A2[0] + 560, y: A2[1] - 80, w: 440, h: 320, rot: .03, order: 210, color: '#f3efe2', lined: false, tIn: Wt('гонорар') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -100, `700 24px ${MONO}`, '#777', 'center'); drawTyped(g, it.b, t, 0, -30, `800 44px ${SANS}`, INK, 'center'); drawTyped(g, it.c, t, 0, 60, `800 56px ${SANS}`, RED, 'center'); } });
  fee.a = typed('гонорар', Wt('гонорар') - .1, .05); fee.b = typed('$7 925', Wt('восемь') - .3, .06); fee.c = typed('$8 000', Wt('округляет') + .2, .07);
  pw('lalofee', Wt('торгуется') - .5, { x: A2[0] + 560, y: A2[1] + 300, w: 400, rot: -.04, order: 215, off: 1 });
  const ln = card({ x: A2[0] - 380, y: A2[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  ln.s = stamp('НАЗАД ДОРОГИ НЕТ', Wt('дороги') - .1, { size: 60, rot: -.05, shake: 14 });
  goTo(A2, Wt('гуса') + .5, Wt('через') - .1, A2[0] - 860, A2[1] - 460);
  camKey(Wt('макгиллом'), A2[0] - 380, A2[1] - 60, 1.02, -.01); camKey(Wt('гонорар') + .2, A2[0] + 540, A2[1] + 40, .98, .015);
  camKey(Wt('черту') - .2, A2[0] - 300, A2[1] + 260, .95, -.01);

  // S3 · elegant scheme: Krazy-8 becomes a DEA informant, leaks Gus's dead drops; police hit Gus's business, Lalo stays clean; Gus keeps silent for Nacho
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  const sch = card({ x: A3[0] - 120, y: A3[1] - 40, w: 1100, h: 520, rot: -.01, order: 300, lined: false, tIn: Wt('схема') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => {
      drawTyped(g, it.hd, t, 0, -210, `800 40px ${SANS}`, RED, 'center');
      const box = (x, y, ty, tm) => { const a = clamp((t - tm) / .3); if (a <= 0) return; g.globalAlpha = a; g.strokeStyle = INK; g.lineWidth = 3; g.strokeRect(x - 150, y - 40, 300, 80); g.globalAlpha = 1; drawTyped(g, ty, t, x, y + 10, `800 26px ${SANS}`, INK, 'center'); };
      const arr = (x0, x1, y, tm) => { const a = clamp((t - tm) / .4); if (a <= 0) return; g.strokeStyle = RED; g.lineWidth = 4; g.beginPath(); g.moveTo(x0, y); g.lineTo(x0 + (x1 - x0) * a, y); g.stroke(); };
      box(-380, -60, it.b1, it.b1.t0); arr(-225, -155, -60, it.b2.t0); box(0, -60, it.b2, it.b2.t0); arr(155, 225, -60, it.b3.t0); box(380, -60, it.b3, it.b3.t0);
      drawTyped(g, it.c, t, 0, 90, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.d, t, 0, 160, `800 32px ${SANS}`, '#2c5a2a', 'center'); } });
  sch.hd = typed('СХЕМА ЛАЛО', Wt('схема') - .1, .05);
  sch.b1 = typed('ДЖИММИ', Wt('защищает') - .3, .05); sch.b2 = typed('КРЭЙЗИ-8 → УБН', Wt('информатором') - .4, .04); sch.b3 = typed('ТАЙНИКИ ГУСА', Wt('тайники') - .3, .04);
  sch.c = typed('полиция бьёт по бизнесу Гуса', Wt('бьёт') - .3, .03); sch.d = typed('ЛАЛО ЧИСТ', Wt('чистым') - .3, .06);
  const sl = typedCard({ x: A3[0] - 120, y: A3[1] + 360, w: 760, h: 120, rot: .015, order: 310, tIn: Wt('молчит') - .4, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('Гус молчит — бережёт Начо', Wt('молчит') - .1, .03), 0, 10, `800 30px ${SANS}`, INK, 'center']]);
  card({ x: A3[0] + 300, y: A3[1] + 520, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('партия без лишних ходов', Wt('партию') - .2, .8, { size: 46, rot: -.03 })] });
  goTo(A3, Wt('дороги') + .5, Wt('схема') - .2, A3[0] - 860, A3[1] - 460);
  hold(Wt('схема') - .2, Wt('чистым') + .4, A3[0] - 120, A3[1] - 40, .82, -.01, { dz: .04 });
  camKey(Wt('молчит'), A3[0] - 100, A3[1] + 280, .9, 0); camKey(Wt('ходов') + .2, A3[0], A3[1] + 360, .95, .01);

  // S4 · Mike as a private eye finds the female witness; she tells police about Lalo's car; arrested as Jorge de Guzmán; only Jimmy can get him out
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('mikepi', Wt('детективом') - .6, { x: A4[0] - 380, y: A4[1] - 80, w: 680, rot: -.015, order: 400, off: 1, caption: capt('МАЙК: «ЧАСТНЫЙ ДЕТЕКТИВ»', Wt('свидетельницу') - .2), capSize: 22 });
  const ar = pw('lalojail', Wt('арестовывают') - .4, { x: A4[0] + 560, y: A4[1] - 80, w: 440, rot: .04, order: 410 });
  ar.stamps = [stamp('АРЕСТОВАН', Wt('арестовывают') + .1, { x: 0, y: 40, size: 50, rot: -.08, shake: 14 })];
  const jg = card({ x: A4[0] + 560, y: A4[1] + 300, w: 480, h: 130, rot: -.03, order: 420, color: '#f3efe2', lined: false, tIn: Wt('фальшивым') - .3, dur: .3, enter: 'slide', dx: 300, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -14, `700 22px ${MONO}`, '#777', 'center'); drawTyped(g, it.b, t, 0, 34, `800 32px ${SANS}`, INK, 'center'); } });
  jg.a = typed('по документам:', Wt('фальшивым') - .1, .03); jg.b = typed('ХОРХЕ ДЕ ГУСМАН', Wt('хорхе') - .1, .04);
  card({ x: A4[0] - 380, y: A4[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 430, tIn: 0, scrawls: [scrawl('вытащить может только Джимми', Wt('единственный') - .2, .9, { size: 44, rot: -.03 })] });
  goTo(A4, Wt('ходов') + .6, Wt('тем') - .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('тем') - .1, Wt('машину') + .3, A4[0] - 380, A4[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('арестовывают') + .1, A4[0] + 540, A4[1] + 20, 1.0, .015); camKey(Wt('единственный') + .2, A4[0] + 40, A4[1] + 240, .88, 0); camKey(T_END, A4[0] + 40, A4[1] + 260, .95, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
