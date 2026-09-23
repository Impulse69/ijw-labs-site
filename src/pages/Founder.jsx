import { Link, useParams } from "react-router-dom";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import { FOUNDERS } from "../content";
import { PAGE_META } from "../page-metadata";
import { JsonLd, founderJsonLd, usePageMeta } from "../seo";

export default function Founder() {
  const { slug } = useParams();
  const founder = FOUNDERS.find((person) => person.slug === slug);
  const meta = PAGE_META[`/founders/${slug}`] || PAGE_META["/about"];
  usePageMeta(meta);
  if (!founder) return null;

  return (
    <>
      <JsonLd data={founderJsonLd(founder)} />
      <section className="page-hero">
        <div className="container">
          <Link className="founder-back" to="/about/">← Meet all three founders</Link>
          <span className="kicker">IJW Labs founder</span>
          <h1 className="display">{founder.name}</h1>
          <p>{founder.role} at IJW Labs · Accra, Ghana</p>
        </div>
      </section>
      <section className="section">
        <div className="container founder-profile">
          <Reveal>
            <ImageSlot file={founder.img} alt={`${founder.name}, ${founder.role} of IJW Labs`} className={founder.slug === "wisdom-dzanado" ? "founder-portrait-wisdom" : ""} eager />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="kicker">Professional profile</span>
            <h2 className="display" style={{ fontSize: "clamp(1.7rem,3.4vw,2.5rem)", marginTop: 12 }}>{founder.role}</h2>
            <p style={{ marginTop: 18, color: "var(--ink-dim)", fontSize: "1.08rem" }}>
              {founder.name} is {founder.role} of IJW Labs, a digital solutions studio based in Accra, Ghana.
            </p>
            <p style={{ marginTop: 14, color: "var(--ink-dim)" }}>{founder.bio}</p>
            {founder.profileUrl && <p style={{ marginTop: 18 }}><a className="btn btn-outline" href={founder.profileUrl} target="_blank" rel="noopener noreferrer">{founder.profileLabel} <span aria-hidden="true">↗</span></a></p>}
            <p style={{ marginTop: 14, color: "var(--ink-dim)" }}>
              Explore <Link to="/services/">IJW Labs services</Link> or meet the <Link to="/about/">other founders</Link>.
            </p>
            <Link to="/contact/" className="btn btn-primary" style={{ marginTop: 24 }}>Reach us</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
