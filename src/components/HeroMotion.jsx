import { useEffect, useRef, useState } from "react";

export default function HeroMotion() {
  const frame = useRef(null);
  const wrapper = useRef(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(preference.matches);
      if (preference.matches) setReady(false);
    };
    update();
    preference.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(wrapper.current);
    const onMessage = (event) => {
      if (event.source === frame.current?.contentWindow && event.data?.type === "hero-ready") setReady(true);
    };
    window.addEventListener("message", onMessage);
    return () => {
      preference.removeEventListener("change", update);
      observer.disconnect();
      window.removeEventListener("message", onMessage);
    };
  }, []);

  useEffect(() => {
    if (ready) frame.current?.contentWindow.postMessage({ type: "hero-playback", playing: visible && !paused && !reduced }, "*");
  }, [ready, visible, paused, reduced]);

  return (
    <div className="hero-motion" ref={wrapper}>
      <img src="/images/hero-motion-poster.jpg" width="1920" height="1080" alt="" aria-hidden="true" fetchpriority="high" />
      {!reduced && <iframe ref={frame} src="/motion/hero-motion.html?render&t=4.3" title="Decorative IJW Labs service animation" aria-hidden="true" tabIndex={-1} sandbox="allow-scripts" className={ready ? "is-ready" : ""} />}
      {!reduced && ready && <button type="button" className="hero-motion-toggle" aria-label={paused ? "Play animation" : "Pause animation"} onClick={() => setPaused((value) => !value)}>{paused ? "Play" : "Pause"}</button>}
    </div>
  );
}
