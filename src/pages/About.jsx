import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import { waLink, FOUNDERS, WORK } from "../content";
import { IconWhatsApp } from "../components/Icons";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">About us</span>
          <h1 className="display">Three founders. One lab.</h1>
          <p>IJW Labs was started by three friends in Accra who kept watching good businesses lose customers to bad digital presence — and decided to fix it ourselves.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 48 }}>
            <Reveal>
              <span className="kicker">Our story</span>
              <h2 className="display" style={{ fontSize: "clamp(1.7rem,3.4vw,2.4rem)", marginTop: 12 }}>Why "Labs"?</h2>
              <p style={{ marginTop: 14, color: "var(--ink-dim)" }}>
                Because we treat every project like an experiment with a measurable result: more calls, more orders, more trust in your brand.
                We're not a faceless agency — when you work with IJW, you talk directly to the people doing the work.
              </p>
              <p style={{ marginTop: 12, color: "var(--ink-dim)" }}>
                We keep our pricing honest, our timelines short, and our WhatsApp open. The goal is simple: when your business grows, you come back — and you bring your friends.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ImageSlot file="team.jpg" alt="The IJW Labs founders" hint="Suggested: photo of the three of you, ~1200×900" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">The founders</span>
            <h2 className="display">The people behind the work</h2>
            <p>Edit our names and bios in <code>src/content.js</code> — photos go in <code>public/images/</code>.</p>
          </Reveal>
          <div className="grid-3">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.img} delay={i * 0.1} className="founder-card">
                <ImageSlot file={f.img} alt={`${f.name}, ${f.role}`} hint="Portrait ~900×1000" />
                <h3>{f.name}</h3>
                <div className="role">{f.role}</div>
                <p>{f.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">The lab record</span>
            <h2 className="display">Work we're proud of</h2>
          </Reveal>
          <div className="work-grid">
            {WORK.map((w, i) => (
              <Reveal key={w.img} delay={(i % 3) * 0.08} className="work-item">
                <ImageSlot file={w.img} alt={w.title} hint="~1200×900" />
                <h4>{w.title}</h4>
                <span>{w.tag}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2 className="display">Want us in <em>your</em> corner?</h2>
              <p>Tell us what you're building. We'll tell you how we can help — straight answers, no jargon.</p>
              <div className="row">
                <a className="btn btn-wa" href={waLink("Hi IJW Labs! I just read your About page.")} target="_blank" rel="noopener">
                  <IconWhatsApp size={18} /> Talk to the founders
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
