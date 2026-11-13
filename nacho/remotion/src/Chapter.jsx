import { useEffect, useRef, useState } from 'react';
import { IFrame, staticFile, useCurrentFrame, delayRender, continueRender, cancelRender, getRemotionEnvironment } from 'remotion';

// One chapter of the film = one page (public/nacho/chapter.html?ch=N) with the canvas engine.
// The page exposes window.renderAt(t) (async) and window.ready; t is film time in seconds.
// In Remotion Studio the page runs in preview mode (no motion-blur sub-samples) so scrubbing stays fast;
// the final render always uses full quality.
const preview = getRemotionEnvironment().isStudio;

export const Chapter = ({ ch, t0 }) => {
  const frame = useCurrentFrame();
  const ref = useRef(null);
  const busy = useRef(false);
  const pending = useRef(null);
  const [ready, setReady] = useState(false);
  const [handle] = useState(() => delayRender(`chapter ${ch} loading`, { timeoutInMilliseconds: 180000 }));

  const onLoad = () => {
    const w = ref.current && ref.current.contentWindow;
    const poll = () => {
      if (w && w.ready === true) { setReady(true); continueRender(handle); } else setTimeout(poll, 50);
    };
    poll();
  };

  useEffect(() => {
    if (!ready) return;
    const h = delayRender(`chapter ${ch} frame ${frame}`, { timeoutInMilliseconds: 120000 });
    const draw = (f, hh) => {
      busy.current = true;
      ref.current.contentWindow.renderAt(t0 + f / 60).then(() => {
        continueRender(hh); busy.current = false;
        if (pending.current) { const [pf, ph] = pending.current; pending.current = null; draw(pf, ph); }
      }).catch((e) => cancelRender(e));
    };
    if (busy.current) {             // Studio playback: skip to the newest frame instead of queueing every one
      if (pending.current) continueRender(pending.current[1]);
      pending.current = [frame, h];
    } else draw(frame, h);
  }, [frame, ready, ch, t0]);

  return (
    <IFrame
      ref={ref}
      src={staticFile('nacho/chapter.html') + '?ch=' + ch + (preview ? '&preview=1' : '')}
      onLoad={onLoad}
      style={{ width: 1920, height: 1080, border: 0, display: 'block' }}
    />
  );
};
