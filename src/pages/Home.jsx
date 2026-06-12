import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import { waLink, SERVICES, WORK } from "../content";
import { IconCode, IconSystem, IconPhoto, IconDoc, IconArrow, IconWhatsApp } from "../components/Icons";

const icons = { web: IconCode, systems: IconSystem, photo: IconPhoto, docs: IconDoc };

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const line = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <span className="kicker">Accra, Ghana — taking projects now</span>
            </motion.div>
            <motion.h1 className="display" variants={stagger} initial="hidden" animate="show">
              <motion.span variants={line} style={{ display: "block" }}>Smart solutions.</motion.span>
              <motion.span variants={line} style={{ display: "block" }} className="blue">Stronger presence.</motion.span>
              <motion.span variants={line} style={{ display: "block" }}>Real growth.</motion.span>
            </motion.h1>
            <motion.p className="lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
              IJW Labs builds the websites, systems and digital assets that make your business impossible to ignore — without the agency price tag.
            </motion.p>
            <motion.div className="hero-ctas" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.5 }}>
              <a className="btn btn-wa" href={waLink("Hi IJW Labs! I'd like a website for my business.")} target="_blank" rel="noopener">
                <IconWhatsApp size={18} /> Start your project
              </a>
              <Link className="btn btn-outline" to="/services">See what we build</Link>
            </motion.div>
            <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.6 }}>
              <div><strong>48h</strong><span>first response & quote</span></div>
              <div><strong>4</strong><span>services, one team</span></div>
              <div><strong>100%</strong><span>built around your budget</span></div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}>
            <ImageSlot file="hero.jpg" alt="IJW Labs work showcase" hint="Suggested: device mockup or team-at-work photo, ~1200×1400" className="hero-img" />
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">What we do</span>
            <h2 className="display">Four services. One standard.</h2>
            <p>Everything a growing business needs to look professional and run smoothly — under one roof.</p>
          </Reveal>
          <div className="grid-4">
            {SERVICES.map((s, i) => {
              const Icon = icons[s.slug];
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <div className="card" style={{ height: "100%" }}>
                    <div className="icon-tile"><Icon /></div>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <Link to="/services" className="card-link">Learn more <IconArrow /></Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">Recent work</span>
            <h2 className="display">Proof beats promises</h2>
            <p>A look at what leaves our lab.</p>
          </Reveal>
          <div className="work-grid">
            {WORK.slice(0, 3).map((w, i) => (
              <Reveal key={w.img} delay={i * 0.08} className="work-item">
                <ImageSlot file={w.img} alt={w.title} hint="~1200×900" />
                <h4>{w.title}</h4>
                <span>{w.tag}</span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div style={{ marginTop: 36 }}>
              <Link to="/about" className="btn btn-outline">Meet the team behind it</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">How we work</span>
            <h2 className="display">From hello to handover</h2>
          </Reveal>
          <div className="steps">
            {[
              ["Talk", "Message us on WhatsApp. We reply within 48 hours with a plan and a clear price."],
              ["Build", "We design and build, showing you progress along the way. No disappearing acts."],
              ["Launch", "We put it live and walk you through everything you need to run it."],
              ["Support", "We stay reachable after launch. Updates, fixes, questions — part of the deal."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="step" style={{ height: "100%" }}>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2 className="display">Let's build something <em>amazing</em> together.</h2>
              <p>One message is all it takes. Tell us about your business — quote included, no obligation.</p>
              <div className="row">
                <a className="btn btn-wa" href={waLink("Hi IJW Labs! Let's build something amazing.")} target="_blank" rel="noopener">
                  <IconWhatsApp size={18} /> +233 53 992 3975
                </a>
                <Link className="btn btn-light" to="/contact">All contact options</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
