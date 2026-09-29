import { Link } from "react-router-dom";
import { SYSTEMS } from "../content";

export default function SystemsShowcase({ compact = false }) {
  return (
    <section className="section systems-section" id="systems" aria-labelledby="systems-heading">
      <div className="container">
        <div className="systems-intro">
          <div className="sec-head">
            <span className="kicker">Business systems</span>
            <h2 className="display" id="systems-heading">Software for the work<br />behind the business.</h2>
            <p>From stock and invoices to bookings and school administration, we build software around the way your team operates.</p>
          </div>
        </div>
        <div className={compact ? "systems-grid systems-compact" : "systems-stories"}>
          {SYSTEMS.map((system, index) => (
            <article className="system-card" key={system.slug} id={compact ? undefined : system.slug}>
              <figure className="system-visual">
                <img src={system.image} alt={system.imageAlt} loading="lazy" width="1536" height="1024" />
                <figcaption>Illustrative interface concept</figcaption>
              </figure>
              <div className="system-copy">
              <div className="system-card-top"><span className="system-number">0{index + 1}</span><span className="kicker">{system.category}</span></div>
              <h3>{system.title}</h3>
              <p>{system.summary}</p>
              <div className="system-flow" aria-label={`${system.title} workflow`}>
                {system.workflow.map((step, stepIndex) => <span key={step}>{stepIndex > 0 && <b aria-hidden="true">→</b>}{step}</span>)}
              </div>
              {!compact && <><h4>What it brings together</h4><ul>{system.features.map(feature => <li key={feature}>{feature}</li>)}</ul><p className="system-fit"><strong>Built for:</strong> {system.fit}</p></>}
              <Link className="btn btn-outline" to={compact ? `/work/#${system.slug}` : "/contact/"}>{compact ? "Explore capabilities" : "Discuss your requirements"}<span aria-hidden="true"> →</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
