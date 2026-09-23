import Reveal from "../components/Reveal";
import WorkTile from "../components/WorkTile";
import { waLink, PORTFOLIO } from "../content";
import { IconWhatsApp } from "../components/Icons";
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
          <h1 className="display">{PORTFOLIO.length} website concepts</h1>
          <p>Published design demos for hotels, lodges and guest houses across Ghana's
             Eastern Region. These are concept sites, not official websites for the named businesses.
             Open any demo to see the design in action.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
              <p>Hotel, shop, clinic, school — if it needs a website that brings customers, we build it. Message us for a free quote.</p>
              <div className="row">
                <a className="btn btn-wa" href={waLink("Hi IJW Labs! I saw your portfolio and want a website for my business.")} target="_blank" rel="noopener">
                  <IconWhatsApp size={18} /> Start your project
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
