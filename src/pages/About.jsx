import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import WorkTile from "../components/WorkTile";
import { FOUNDERS, WORK } from "../content";
import { usePageMeta, JsonLd, ORG_JSONLD } from "../seo";
import { PAGE_META } from "../page-metadata";

export default function About() {
  usePageMeta(PAGE_META["/about"]);
  return (
    <>
      <JsonLd data={ORG_JSONLD} />
      <section className="page-hero">
        <div className="container">
          <span className="kicker">About us</span>
          <h1 className="display">Digital solutions built around business needs.</h1>
          <p>IJW Labs is an Accra-based team delivering websites, custom business systems and visual content for organisations seeking a stronger digital presence.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 48 }}>
            <Reveal>
              <span className="kicker">Our company</span>
              <h2 className="display" style={{ fontSize: "clamp(1.7rem,3.4vw,2.4rem)", marginTop: 12 }}>A practical approach to digital delivery.</h2>
              <p style={{ marginTop: 14, color: "var(--ink-dim)" }}>
                We work with clients to understand the requirements behind each project, then develop digital tools and visual assets suited to their goals and operating context.
              </p>
              <p style={{ marginTop: 12, color: "var(--ink-dim)" }}>
                The founding team is directly involved in planning and delivery. This keeps communication clear and gives each engagement a defined scope from the outset.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="about-focus">
                <div><strong>Web development</strong><p>Business websites and digital experiences built for performance and usability.</p></div>
                <div><strong>Business systems</strong><p>Custom software that supports day-to-day operations and service delivery.</p></div>
                <div><strong>Creative production</strong><p>Visual content that presents businesses consistently across digital channels.</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">Leadership</span>
            <h2 className="display">Our founding team</h2>
            <p>Our founders lead technical development, operations and creative direction.</p>
          </Reveal>
          <div className="grid-3">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.img} delay={i * 0.1} className="founder-card">
                <ImageSlot file={f.img} alt={`${f.name}, ${f.role}`} className={f.slug === "wisdom-dzanado" ? "founder-portrait-wisdom" : ""} />
                <h3><Link to={`/founders/${f.slug}/`}>{f.name}</Link></h3>
                <div className="role">{f.role}</div>
                {f.bio && <p>{f.bio}</p>}
                <Link className="card-link" to={`/founders/${f.slug}/`}>Read profile →</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">Selected work</span>
            <h2 className="display">Projects and design concepts</h2>
            <p>Explore the live Nonna Lodge website and published hospitality design concepts. Concept sites are identified as demonstrations.</p>
          </Reveal>
          <div className="work-grid">
            {WORK.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 3) * 0.08}>
                <WorkTile item={w} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div style={{ marginTop: 36 }}>
              <Link to="/work/" className="btn btn-primary">See more work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2 className="display">Discuss your <em>project</em> with us.</h2>
              <p>Share your requirements and we will help define a practical next step.</p>
              <div className="row">
                <Link className="btn btn-primary" to="/contact/">Reach us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
