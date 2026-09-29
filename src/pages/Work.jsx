import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import WorkTile from "../components/WorkTile";
import SystemsShowcase from "../components/SystemsShowcase";
import { PORTFOLIO } from "../content";
import { usePageMeta, JsonLd, ORG_JSONLD } from "../seo";
import { PAGE_META } from "../page-metadata";

export default function Work() {
  usePageMeta(PAGE_META["/work"]);
  return (
    <>
      <JsonLd data={ORG_JSONLD} />
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Our work</span>
          <h1 className="display">Business systems.<br />Websites that deliver.</h1>
          <p>Explore software for everyday operations alongside our website work. From hospitality and education to stock and billing, each project starts with a practical business need.</p>
          <div className="work-jumps"><a className="btn btn-primary" href="#systems">Explore systems</a><a className="btn btn-outline" href="#websites">Explore websites</a></div>
        </div>
      </section>

      <SystemsShowcase />

      <section className="section alt" id="websites" style={{ scrollMarginTop: 100 }}>
        <div className="container">
          <div className="sec-head"><span className="kicker">Websites &amp; concepts</span><h2 className="display">{PORTFOLIO.length} ways to make an impression.</h2><p>Our live Nonna Lodge website and hospitality design demos. Concept demos are not official websites for the named businesses.</p></div>
          <div className="work-grid">
            {PORTFOLIO.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 3) * 0.06}>
                <WorkTile item={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2 className="display">Your business could be <em>next</em>.</h2>
              <p>Need a customer-facing website, an internal management system, or both? Tell us how your business works and what you want to improve.</p>
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
