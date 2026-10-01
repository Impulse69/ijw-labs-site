import { useEffect, useRef, useState } from "react";

export default function HeroMotion() {
  const frame = useRef(null);
  const wrapper = useRef(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  const finished = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(preference.matches);
      if (preference.matches) setReady(false);
    };
    update();
    preference.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      document.body.classList.toggle("hero-intro-left", !entry.isIntersecting);
    }, { rootMargin: "-73px 0px 0px 0px" });
    observer.observe(wrapper.current);
    const onMessage = (event) => {
      if (event.source !== frame.current?.contentWindow) return;
      if (event.data?.type === "hero-ready") setReady(true);
      if (event.data?.type === "hero-ended" && !finished.current) {
        finished.current = true;
        if (wrapper.current.getBoundingClientRect().top >= -24 && !preference.matches && document.visibilityState === "visible") {
          document.getElementById("home-services")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    window.addEventListener("message", onMessage);
    return () => {
      preference.removeEventListener("change", update);
      observer.disconnect();
      window.removeEventListener("message", onMessage);
      document.body.classList.remove("hero-intro-left");
    };
  }, []);

  useEffect(() => {
    if (ready) frame.current?.contentWindow.postMessage({ type: "hero-playback", playing: visible && !reduced && !finished.current }, "*");
  }, [ready, visible, reduced]);

  return (
    <div className="hero-motion" ref={wrapper}>
      <picture aria-hidden="true">
        <source media="(max-aspect-ratio: 1/1)" srcSet="/images/hero-motion-poster-portrait.jpg" />
        <img src="/images/hero-motion-poster.jpg" width="1920" height="1080" alt="" fetchpriority="high" />
      </picture>
      {!reduced && <iframe ref={frame} src="/motion/hero-motion.html?render&once" title="Decorative IJW Labs service animation" aria-hidden="true" tabIndex={-1} sandbox="allow-scripts" className={ready ? "is-ready" : ""} />}
    </div>
  );
}
