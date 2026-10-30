// 03 · БРАТ  (insert: "Люди не меняются... шимпанзе с гранатой")
CH_V0 = 179.5;
const [T_START, T_END] = chRange(3);
function buildScenes() {
  const D = [0, 0]; divider(D, 3, 'БРАТ', T_START);
  hold(T_START, Wt('чарльз') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Chuck McGill: pride of the family, brilliant, partner in a big firm; always did the right thing
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('chuckface', Wt('чарльз') - .3, { x: A1[0] - 400, y: A1[1] - 20, w: 700, rot: -.02, order: 100, off: 4, caption: capt('ЧАРЛЬЗ «ЧАК» МАКГИЛЛ', Wt('макгилл')), capSize: 26 });
  const cv = card({ x: A1[0] + 560, y: A1[1] - 40, w: 500, h: 400, rot: .03, order: 110, lined: true, tIn: Wt('гордость') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 30px ${MONO}`) });
  cv.cl = [checkLine('ГОРДОСТЬ СЕМЬИ', Wt('семьи') + .1, 'v', -200, -120), checkLine('БЛЕСТЯЩИЙ ЮРИСТ', Wt('юрист') + .1, 'v', -200, -40), checkLine('ПАРТНЁР ФИРМЫ', Wt('фирмы') + .1, 'v', -200, 40), checkLine('ВСЕГДА ПРАВ', Wt('правильно') + .1, 'v', -200, 120)];
  pw('hhm', Wt('альбукерке') - .4, { x: A1[0] + 560, y: A1[1] + 330, w: 440, rot: -.04, order: 120, off: 5, caption: capt('HHM · АЛЬБУКЕРКЕ', Wt('альбукерке')), capSize: 20 });
  goTo(A1, Wt('чарльз') + .3, Wt('макгилл') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('макгилл') + .1, Wt('гордость') + .2, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('юрист') + .2, A1[0] + 500, A1[1] - 20, 1.05, .015); camKey(Wt('правильно') + .4, A1[0] + 520, A1[1] + 160, 1.0, .01);

  // S2 · the deal: out of jail on one condition — move here, live honestly
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const dl = typedCard({ x: A2[0] - 200, y: A2[1] - 40, w: 820, h: 360, rot: -.02, order: 200, tIn: Wt('вытаскивает') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400 },
    [[typed('УСЛОВИЕ ЧАКА:', Wt('условием') - .3, .04), -370, -90, `700 36px ${MONO}`], [typed('переезжаешь ко мне', Wt('переезжаешь') - .1, .035), -370, 0, `800 44px ${SANS}`],
     [typed('и начинаешь честную жизнь', Wt('честную') - .3, .03), -370, 80, `800 40px ${SANS}`, RED]]);
  card({ x: A2[0] + 500, y: A2[1] + 300, w: 1, h: 1, shadow: 0, lit: false, order: 210, tIn: 0, scrawls: [scrawl('ХОРОШИЙ И ПЛОХОЙ?', Wt('хороший') - .2, .5, { size: 56, rot: -.05 })] });
  goTo(A2, Wt('правильно') + .5, Wt('чак', 2) + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('чак', 2) + .1, Wt('жизнь') + .4, A2[0] - 200, A2[1] - 40, 1.08, -.01, { dz: .05 });
  camKey(Wt('сердце') + .2, A2[0] + 100, A2[1] + 80, .92, .01); camKey(Wt('так') + .4, A2[0] + 400, A2[1] + 200, 1.0, .015);

  // S3 · Chuck is sick: no electricity, foil, the gas lantern. Who brings ice and papers every day? Jimmy.
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .85);
  pw('chuckdark', Wt('болен') - .4, { x: A3[0] - 380, y: A3[1] - 40, w: 760, rot: -.015, order: 300, off: 3, caption: capt('ДОМ БЕЗ ЭЛЕКТРИЧЕСТВА', Wt('электричества')), capSize: 22 });
  pw('chuckfoil', Wt('фольгой') - .4, { x: A3[0] + 560, y: A3[1] - 200, w: 460, rot: .05, order: 310, off: 4, caption: capt('ФОЛЬГА', Wt('фольгой')), capSize: 22 });
  const ice = card({ x: A3[0] + 560, y: A3[1] + 220, w: 460, h: 300, rot: -.03, order: 320, lined: true, tIn: Wt('приносит') - .3, dur: .3, enter: 'slide', dx: 400, dy: 200,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('КАЖДЫЙ ДЕНЬ:', -190, -100); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  ice.cl = [checkLine('ЛЁД', Wt('лёд') + .1, 'v', -170, -30), checkLine('ПРОДУКТЫ', Wt('продукты') + .1, 'v', -170, 40), checkLine('ГАЗЕТЫ', Wt('газеты') + .1, 'v', -170, 110)];
  const jm = card({ x: A3[0] - 380, y: A3[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 330, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  jm.s = stamp('ДЖИММИ', Wt('день') + .5, { size: 90, rot: -.07, shake: 16 });
  goTo(A3, Wt('так') + .5, Wt('болен') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('болен') + .1, Wt('фонарём') + .3, A3[0] - 380, A3[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('приносит') + .2, A3[0] + 520, A3[1] + 180, 1.05, .015); camKey(Wt('день') + .6, A3[0] - 200, A3[1] + 260, .95, 0);
  camKey(Wt('ребёнком') + .4, A3[0] - 300, A3[1] + 300, 1.05, -.01);

  // S4 · Chuck despises him: "people don't change... a chimp with a machine gun" (original dub)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  pw('pimento', Wt('презирает') - .5, { x: A4[0] - 620, y: A4[1] - 200, w: 480, rot: -.05, order: 400, off: 2, caption: capt('S01E09 · «PIMENTO»', Wt('сцен')), capSize: 20 });
  dlgShot('d_chimp', A4[0] + 160, A4[1] - 20, { w: 920, order: 410 });
  const nc = card({ x: A4[0] + 160, y: A4[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  nc.s = stamp('ЛЮДИ НЕ МЕНЯЮТСЯ', DLGT.d_chimp + 5.5, { size: 60, rot: -.06, shake: 16 });
  goTo(A4, Wt('ребёнком') + .5, Wt('презирает') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('презирает') + .1, DLGT.d_chimp - .3, A4[0] - 600, A4[1] - 180, 1.08, -.02, { dz: .05 });
  camKey(DLGT.d_chimp + .1, A4[0] + 160, A4[1] - 20, 1.08, 0); camKey(DLGT.d_chimp + 15.3, A4[0] + 160, A4[1] + 40, 1.22, .01);

  // S5 · the frightening part: Chuck isn't wholly wrong — but he never gives Jimmy a chance to prove him wrong
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const sc = card({ x: A5[0] - 100, y: A5[1] - 20, w: 900, h: 460, rot: -.015, order: 500, lined: false, tIn: Wt('страшно') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -190); g.lineTo(0, 190); g.stroke();
      drawTyped(g, it.a, t, -225, -140, `800 36px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -225, -60, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.c, t, -225, 0, `800 48px ${SANS}`, '#888', 'center');
      drawTyped(g, it.d, t, 225, -140, `800 36px ${SANS}`, INK, 'center'); drawTyped(g, it.e, t, 225, -60, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.f, t, 225, 0, `800 48px ${SANS}`, RED, 'center'); } });
  sc.a = typed('ХОРОШЕЕ', Wt('хорошего') - .2, .05); sc.b = typed('для Чака:', Wt('чака') - .1, .04); sc.c = typed('0', Wt('считается') - .1, .1);
  sc.d = typed('ПЛОХОЕ', Wt('плохое') - .1, .05); sc.e = typed('для Чака:', Wt('подтверждает') - .3, .04); sc.f = typed('ПРАВ', Wt('правоту') - .1, .08);
  card({ x: A5[0] - 100, y: A5[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 510, tIn: 0, scrawls: [scrawl('НИ ОДНОГО ШАНСА', Wt('шанса') - .2, .5, { size: 60, rot: -.05 })] });
  goTo(A5, DLGT.d_chimp + 15.4, Wt('страшно') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('страшно') + .1, Wt('неправым') + .3, A5[0] - 100, A5[1] + 160, 1.0, -.01, { dz: .05 });
  camKey(Wt('хорошего') + .2, A5[0] - 260, A5[1] - 40, 1.05, -.015); camKey(Wt('плохое') + .2, A5[0] + 100, A5[1] - 40, 1.05, .015); camKey(T_END, A5[0] + 120, A5[1] - 20, 1.15, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
