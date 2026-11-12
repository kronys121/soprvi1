import { useEffect, useRef, useState } from 'react';
import { IFrame, staticFile, useCurrentFrame, delayRender, continueRender, cancelRender } from 'remotion';

// One chapter of the film = one page (public/nacho/chapter.html?ch=N) with the canvas engine.
// The page exposes window.renderAt(t) (async) and window.ready; t is film time in seconds.
export const Chapter = ({ ch, t0 }) => {
  const frame = useCurrentFrame();
  const ref = useRef(null);
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
    ref.current.contentWindow.renderAt(t0 + frame / 60).then(() => continueRender(h)).catch((e) => cancelRender(e));
  }, [frame, ready, ch, t0]);

  return (
    <IFrame
      ref={ref}
      src={staticFile('nacho/chapter.html') + '?ch=' + ch}
      onLoad={onLoad}
      style={{ width: 1920, height: 1080, border: 0, display: 'block' }}
    />
  );
};
