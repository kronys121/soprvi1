// Jesse-specific helpers on top of patient/common.js
const CASE_LABEL = 'ДЕЛО № 0217 · Дж. ПИНКМАН';
// timed photo anchored to a word: p('key or vid', word, n, {x,y,w,...})
function pw(src, t, o) { return photo({ tIn: t, dur: .3, enter: 'drop', dx: o.dx ?? 0, dy: o.dy ?? -240, ...o, src: typeof src === 'string' ? (MEDIA.frames[src] ? vid(src, t - .2, o.off || 0) : { still: src }) : src }); }
function capt(text, t, per = .035) { return typed(text, t, per, { silent: true }); }
// scene: travel in, pin and thread, then holds
function goTo(A, tPrev, tIn, x, y) { link(x ?? A[0] - 500, y ?? A[1] - 380, tPrev, tIn); travel(tPrev, tIn); }
// mugshot board (height chart) used for Walter / Heisenberg
function mugBoard(A, src, nameTy, noTy, o = {}) {
  return item({ x: A[0], y: A[1], w: 980, h: 760, rot: o.rot ?? .01, order: o.order || 200, tIn: o.tIn ?? -1e9, srcs: t => [typeof src === 'function' ? src(t) : src],
    draw: (g, t, it) => {
      g.fillStyle = '#2c2d2e'; g.fillRect(-490, -380, 980, 760);
      g.strokeStyle = 'rgba(230,225,215,.45)'; g.fillStyle = 'rgba(230,225,215,.6)'; g.font = `700 22px ${MONO}`; g.textAlign = 'left';
      for (let k = 0; k <= 8; k++) { const y = 300 - k * 80; g.lineWidth = k % 2 ? 1.5 : 3; g.beginPath(); g.moveTo(-490, y); g.lineTo(490, y); g.stroke(); if (k % 2 === 0) g.fillText(`${150 + k * 5}`, -478, y - 8); }
      const im = got(srcUrl(typeof src === 'function' ? src(t) : src, t)); if (im) g.drawImage(im, -330, -250, 660, 371);
      g.strokeStyle = 'rgba(0,0,0,.6)'; g.lineWidth = 4; g.strokeRect(-330, -250, 660, 371);
      g.fillStyle = '#111'; g.fillRect(-330, 150, 660, 110); g.strokeStyle = '#ddd'; g.lineWidth = 2; g.strokeRect(-322, 158, 644, 94);
      drawTyped(g, nameTy, t, 0, 210, `700 40px ${MONO}`, '#f0ece2', 'center'); if (noTy) drawTyped(g, noTy, t, 0, 244, `400 24px ${MONO}`, '#bdb7aa', 'center');
    } });
}
const TAPE_TEXT = 'СПОЙЛЕРЫ · ВСЕ 5 СЕЗОНОВ · ';
