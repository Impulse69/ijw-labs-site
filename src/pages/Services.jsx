import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import { waLink, SERVICES } from "../content";
import { IconCheck, IconWhatsApp } from "../components/Icons";

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Our services</span>
          <h1 className="display">What we build for you</h1>
          <p>Four ways IJW Labs makes your business look sharper and run smoother. Every project starts with a free WhatsApp conversation and a clear quote.</p>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section key={s.slug} className={`section ${i % 2 ? "alt" : ""}`} id={s.slug}>
          <div className="container">
            <div className="grid-2" style={{ alignItems: "center", gap: 48 }}>
              <Reveal style={{ order: i % 2 ? 2 : 1 }}>
                <span className="kicker">{`0${i + 1}`}</span>
                <h2 className="display" style={{ fontSize: "clamp(1.7rem,3.4vw,2.5rem)", marginTop: 12 }}>{s.title}</h2>
                <p style={{ marginTop: 14, color: "var(--ink-dim)", fontSize: "1.05rem" }}>{s.short}</p>
                <ul style={{ listStyle: "none", marginTop: 22, display: "grid", gap: 10 }}>
                  {s.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ color: "var(--blue)", display: "inline-flex" }}><IconCheck /></span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 20, fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", fontSize: ".85rem", letterSpacing: ".08em" }}>
                  {s.pitch}
                </p>
                <a className="btn btn-wa" style={{ marginTop: 22 }} href={waLink(`Hi IJW Labs! I'm interested in ${s.title}.`)} target="_blank" rel="noopener">
                  <IconWhatsApp size={17} /> Get a quote
                </a>
              </Reveal>
              <Reveal delay={0.1}>
                <ImageSlot file={s.img} alt={`${s.title} example`} hint="Suggested: real project screenshot/photo, ~1200×900" />
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
