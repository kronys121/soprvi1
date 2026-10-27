// 02 · ПРАВИЛА  (inserts: "Больше никаких детей", "Мужчина обеспечивает свою семью")
CH_V0 = 117.6;
const [T_START, T_END] = chRange(2);
function buildScenes() {
  const D = [0, 0]; divider(D, 2, 'ПРАВИЛА', T_START);
  hold(T_START, Wt('работает') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · a corporation, not a gang: lab under a laundry, German kit, chicken trucks, Mike
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const org = card({ x: A1[0] - 520, y: A1[1] - 40, w: 620, h: 560, rot: -.02, order: 100, lined: false, tIn: Wt('бандит') - .3, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.hd, t, 0, -210, `800 40px ${SANS}`, INK, 'center');
      it.rows.forEach(([ty, y]) => { if (t < ty.t0) return; g.strokeStyle = INK; g.lineWidth = 3; g.strokeRect(-250, y - 40, 500, 70); g.beginPath(); g.moveTo(0, -180); g.lineTo(0, y - 40); g.stroke(); drawTyped(g, ty, t, 0, y + 6, `700 30px ${MONO}`, INK, 'center'); }); } });
  org.hd = typed('КОРПОРАЦИЯ', Wt('управляющий'), .05);
  org.rows = [[typed('ЛАБОРАТОРИЯ', Wt('суперлаборатория'), .04), -90], [typed('ЛОГИСТИКА', Wt('логистика'), .04), 20], [typed('БЕЗОПАСНОСТЬ', Wt('служба'), .04), 130]];
  pw('glaundry', Wt('прачечной') - .5, { x: A1[0] + 260, y: A1[1] - 280, w: 480, rot: .04, order: 110, off: 0, caption: capt('ПРОМЫШЛЕННАЯ ПРАЧЕЧНАЯ', Wt('прачечной')), capSize: 20 });
  pw('glab', Wt('оборудование') - .3, { x: A1[0] + 700, y: A1[1] + 20, w: 480, rot: -.03, order: 120, off: 4, caption: capt('НЕМЕЦКОЕ ОБОРУДОВАНИЕ', Wt('немецкое')), capSize: 20 });
  pw('mike', Wt('майк') - .3, { x: A1[0] + 300, y: A1[1] + 300, w: 440, rot: .03, order: 130, caption: capt('МАЙК ЭРМАНТРАУТ · ЭКС-КОП', Wt('полицейский') - .3), capSize: 18 });
  goTo(A1, Wt('работает') + .3, Wt('бандит') + .1, A1[0] - 860, A1[1] - 420);
  hold(Wt('бандит') + .1, Wt('корпорацией') + .3, A1[0] - 520, A1[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('прачечной') + .1, A1[0] + 240, A1[1] - 260, 1.08, .01); camKey(Wt('немецкое') + .4, A1[0] + 660, A1[1] + 10, 1.05, -.01);
  camKey(Wt('майк') + .2, A1[0] + 300, A1[1] + 280, 1.08, .01); camKey(Wt('полицейский') + .4, A1[0] + 100, A1[1] + 60, .82, 0);

  // S2 · the rules; dealers use an 11-year-old -> "Больше никаких детей" (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const rl = card({ x: A2[0] - 640, y: A2[1] - 60, w: 520, h: 420, rot: -.03, order: 200, lined: true, tIn: Wt('правила') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 34px ${MONO}`; g.textAlign = 'left'; g.fillText('ПРАВИЛА:', -220, -140); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  rl.cl = [checkLine('НЕ НАРКОМАНЫ', Wt('употребляет') + .05, 'v', -200, -60), checkLine('НЕ ПРОЩАТЬ ОШИБОК', Wt('ошибок') + .05, 'v', -200, 20), checkLine('НЕ ДЕТИ', DLGT.d_kids + 6.0, 'v', -200, 100)];
  pw('tomas', Wt('используют') - .3, { x: A2[0] - 80, y: A2[1] - 300, w: 460, rot: .04, order: 210, off: 1, caption: capt('КУРЬЕР И УБИЙЦА · 11 ЛЕТ', Wt('мальчика')), capSize: 20 });
  pw('gmeeting', Wt('собирает') - .3, { x: A2[0] - 80, y: A2[1] + 260, w: 460, rot: -.04, order: 220, off: 2, caption: capt('ЗА ОДНИМ СТОЛОМ', Wt('столом')), capSize: 22 });
  dlgShot('d_kids', A2[0] + 560, A2[1] + 20, { w: 860, order: 230 });
  const nk = card({ x: A2[0] + 560, y: A2[1] + 440, w: 1, h: 1, shadow: 0, lit: false, order: 240, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  nk.s = stamp('НИКАКИХ ДЕТЕЙ', DLGT.d_kids + 3.4, { size: 66, rot: -.06, shake: 16 });
  goTo(A2, Wt('полицейский') + .4, Wt('правила') + .1, A2[0] - 900, A2[1] - 420);
  hold(Wt('правила') + .1, Wt('ошибок') + .4, A2[0] - 600, A2[1] - 40, 1.1, -.015, { dz: .05 });
  camKey(Wt('используют') + .2, A2[0] - 100, A2[1] - 260, 1.08, .01); camKey(Wt('собирает') + .2, A2[0] - 100, A2[1] + 230, 1.08, -.01);
  camKey(DLGT.d_kids - .1, A2[0] + 560, A2[1] + 20, 1.12, 0); camKey(DLGT.d_kids + 7.4, A2[0] + 500, A2[1] + 100, 1.15, .01);

  // S3 · order vs chaos; $3M for 3 months; "a man provides" (original dub) -> trust is the mistake
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  pw('tuco', Wt('именно') - .1, { x: A3[0] - 680, y: A3[1] - 260, w: 400, rot: -.05, order: 300, caption: capt('ТУКО', Wt('туко')), capSize: 24 });
  pw('cousins', Wt('именно') + .3, { x: A3[0] - 680, y: A3[1] + 80, w: 400, rot: .04, order: 301, off: 2, caption: capt('КУЗЕНЫ', Wt('кузенов')), capSize: 24 });
  tag({ x: A3[0] - 680, y: A3[1] + 360, w: 360, rot: -.04, label: 'ХАОС', tIn: Wt('картеля') + .05, order: 302, size: 44 });
  pw('gus', Wt('порядок') - .5, { x: A3[0] - 180, y: A3[1] - 120, w: 440, rot: .03, order: 310, caption: capt('ГУС', Wt('порядок') - .4), capSize: 24 });
  tag({ x: A3[0] - 180, y: A3[1] + 160, w: 380, rot: .04, label: 'ПОРЯДОК', tIn: Wt('порядок') + .05, order: 311, size: 44 });
  const mn = typedCard({ x: A3[0] - 180, y: A3[1] + 420, w: 480, h: 190, rot: -.03, order: 320, tIn: Wt('платит') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('$ 3 000 000', Wt('миллиона') - .2, .05, { heavy: true }), -200, -10, `800 46px ${MONO}`, RED], [typed('за 3 месяца', Wt('месяца') - .2, .04), -200, 50, `700 32px ${MONO}`]]);
  dlgShot('d_man', A3[0] + 600, A3[1] - 20, { w: 860, order: 330 });
  card({ x: A3[0] + 600, y: A3[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 340, tIn: 0, scrawls: [scrawl('ДОВЕРЯТЬ = ОШИБКА', Wt('ошибка') - .5, .55, { size: 58, rot: -.04 })] });
  goTo(A3, DLGT.d_kids + 7.5, Wt('именно') + .1, A3[0] - 960, A3[1] - 520);
  hold(Wt('именно') + .1, Wt('разумным') + .3, A3[0] - 480, A3[1] - 80, .95, -.01, { dz: .05 });
  camKey(Wt('порядок') + .3, A3[0] - 380, A3[1] + 20, .95, .01); camKey(Wt('платит') + .2, A3[0] - 200, A3[1] + 300, 1.05, -.01);
  camKey(DLGT.d_man - .1, A3[0] + 600, A3[1] - 20, 1.1, 0); camKey(DLGT.d_man + 11.2, A3[0] + 600, A3[1] + 40, 1.22, .01);
  camKey(Wt('ошибка') + .4, A3[0] + 560, A3[1] + 200, 1.0, .01);

  // S4 · the cousins problem: one move, three wins, never in frame
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, 1);
  pw('cousin', Wt('посмотрите') - .2, { x: A4[0] - 620, y: A4[1] - 200, w: 480, rot: -.04, order: 400, off: 1, caption: capt('КУЗЕНЫ САЛАМАНКА', Wt('саламанки')), capSize: 22 });
  const tg = card({ x: A4[0] - 620, y: A4[1] + 200, w: 480, h: 240, rot: .03, order: 410, lined: false, tIn: Wt('хотят') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { g.font = `700 34px ${MONO}`; g.textAlign = 'left'; g.fillStyle = INK; g.fillText('ЦЕЛЬ:', -200, -50);
      drawTyped(g, it.a, t, -200, 10, `700 36px ${MONO}`); drawTyped(g, it.b, t, -200, 70, `700 36px ${MONO}`, RED); drawPen(g, it.p, t); } });
  tg.a = typed('УОЛТЕР', Wt('уолтера') - .2, .05); tg.b = typed('→ ХЭНК', Wt('хэнком') - .2, .05); tg.p = pen([[-210, 0], [-40, 0]], Wt('отводит') + .2, .25, { width: 7 });
  pw('hcall', Wt('потом') - .3, { x: A4[0] + 40, y: A4[1] - 200, w: 520, rot: .03, order: 420, off: 1, caption: capt('«У ТЕБЯ ОДНА МИНУТА»', Wt('одна') - .2), capSize: 20 });
  sfx('tick', Wt('минута') - .3); sfx('tick', Wt('минута') + .2);
  const so = pw('shootout2', Wt('выживает') - .4, { x: A4[0] + 40, y: A4[1] + 220, w: 520, rot: -.03, order: 430, off: 0, caption: capt('КУЗЕН 1 УБИТ · КУЗЕН 2 РАНЕН', Wt('ранен') - .3), capSize: 18 });
  sfx('shot', Wt('выживает') - .2);
  const mv = card({ x: A4[0] + 620, y: A4[1] - 20, w: 520, h: 420, rot: .03, order: 440, lined: true, tIn: Wt('ходом') - .3, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('ОДНИМ ХОДОМ:', -220, -140); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  mv.cl = [checkLine('ХИМИК ЦЕЛ', Wt('химика') + .05, 'v', -200, -60), checkLine('КАРТЕЛЬ СЛАБЕЕ', Wt('=картель') + .1, 'v', -200, 20), checkLine('РУКИ ЧИСТЫ', Wt('рук') + .05, 'v', -200, 100)];
  mv.stamps = [stamp('НЕ В КАДРЕ', Wt('кадре') + .05, { x: 0, y: 180, size: 54, rot: -.08, shake: 14 })];
  goTo(A4, Wt('ошибка') + .4, Wt('посмотрите') + .1, A4[0] - 900, A4[1] - 440);
  hold(Wt('посмотрите') + .1, Wt('туко', 2) + .3, A4[0] - 600, A4[1] - 40, 1.0, -.015, { dz: .05 });
  camKey(Wt('хэнком') + .3, A4[0] - 560, A4[1] + 120, 1.05, -.01); camKey(Wt('звонит') + .2, A4[0] + 40, A4[1] - 180, 1.08, .01);
  camKey(Wt('выживает') + .3, A4[0] + 40, A4[1] + 210, 1.08, -.01); camKey(Wt('ходом') + .3, A4[0] + 580, A4[1] - 20, 1.05, .01);
  camKey(Wt('кадре') + .5, A4[0] + 600, A4[1] + 60, 1.12, .015); camKey(T_END, A4[0] + 300, A4[1] + 40, .9, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
