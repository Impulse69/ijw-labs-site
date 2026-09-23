import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import WorkTile from "../components/WorkTile";
import { SERVICES, WORK } from "../content";
import { IconCode, IconSystem, IconPhoto, IconArrow } from "../components/Icons";
import { usePageMeta, JsonLd, ORG_JSONLD, FAQ_JSONLD, FAQS } from "../seo";
import { PAGE_META } from "../page-metadata";

const icons = { web: IconCode, systems: IconSystem, photo: IconPhoto };

export default function Home() {
  usePageMeta(PAGE_META["/"]);
  return (
    <>
      <JsonLd data={ORG_JSONLD} />
      <JsonLd data={FAQ_JSONLD} />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div>
              <span className="kicker">Accra, Ghana — taking projects now</span>
            </div>
            <h1 className="display">
              <span style={{ display: "block" }}>Smart solutions.</span>
              <span style={{ display: "block" }} className="blue">Stronger presence.</span>
              <span style={{ display: "block" }}>Real growth.</span>
            </h1>
            <p className="lede">
              IJW Labs builds the websites, systems and digital assets that make your business impossible to ignore — without the agency price tag.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" to="/contact/">Reach us</Link>
              <Link className="btn btn-outline" to="/services/">See what we build</Link>
            </div>
            <div className="hero-stats">
              <div><strong>48h</strong><span>first response & quote</span></div>
              <div><strong>3</strong><span>services, one team</span></div>
              <div><strong>100%</strong><span>built around your budget</span></div>
            </div>
          </div>
          <div>
            <ImageSlot file="hero.jpg" alt="IJW Labs work showcase" hint="Suggested: device mockup or team-at-work photo, ~1200×1400" className="hero-img" eager />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">What we do</span>
            <h2 className="display">Three services. One standard.</h2>
            <p>Everything a growing business needs to look professional and run smoothly — under one roof.</p>
          </Reveal>
          <div className="grid-3">
            {SERVICES.map((s, i) => {
              const Icon = icons[s.slug];
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <div className="card" style={{ height: "100%" }}>
                    <div className="icon-tile"><Icon /></div>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <Link to="/services/" className="card-link">Learn more <IconArrow /></Link>
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
            <span className="kicker">Design demos</span>
            <h2 className="display">See what we can build</h2>
            <p>Published hotel website concepts from our lab.</p>
          </Reveal>
          <div className="work-grid">
            {WORK.slice(0, 3).map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.08}>
                <WorkTile item={w} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/work/" className="btn btn-primary">Explore all demos</Link>
              <Link to="/about/" className="btn btn-outline">Meet the team behind it</Link>
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
              ["Talk", "Reach us through the contact page. Tell us about your project and we’ll reply with the next steps."],
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

      <section className="section alt" id="faq">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">Questions</span>
            <h2 className="display">Straight answers</h2>
          </Reveal>
          <div style={{ maxWidth: 760 }}>
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0, marginTop: 88 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2 className="display">Let's build something <em>amazing</em> together.</h2>
              <p>One message is all it takes. Tell us about your business — quote included, no obligation.</p>
              <div className="row">
                <Link className="btn btn-light" to="/contact/">Reach us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
