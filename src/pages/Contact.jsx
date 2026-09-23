import Reveal from "../components/Reveal";
import { CONTACT_EMAIL, waLink, SOCIALS } from "../content";
import { IconWhatsApp, IconInstagram, IconX, IconSnapchat, IconPin, IconClock } from "../components/Icons";
import { usePageMeta } from "../seo";
import { PAGE_META } from "../page-metadata";

export default function Contact() {
  usePageMeta(PAGE_META["/contact"]);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Contact</span>
          <h1 className="display">Talk to us today</h1>
          <p>Send us an email or choose the channel that works best for you.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-list">
              <a className="contact-item" href={`mailto:${CONTACT_EMAIL}`}>
                <div className="icon-tile" aria-hidden="true">✉</div>
                <div><strong>Email</strong><span>{CONTACT_EMAIL}</span></div>
              </a>
              <a className="contact-item" href={waLink("Hi IJW Labs! I'd like to discuss a project.")} target="_blank" rel="noopener">
                <div className="icon-tile" style={{ background: "#e7f7ed", color: "var(--wa)" }}><IconWhatsApp /></div>
                <div><strong>WhatsApp</strong><span>+233 53 992 3975</span></div>
              </a>
              <a className="contact-item" href={SOCIALS.instagram} target="_blank" rel="noopener">
                <div className="icon-tile"><IconInstagram /></div>
                <div><strong>Instagram</strong><span>@ijw_labs — see our latest work</span></div>
              </a>
              <a className="contact-item" href={SOCIALS.x} target="_blank" rel="noopener">
                <div className="icon-tile"><IconX /></div>
                <div><strong>X (Twitter)</strong><span>@ijwlabs</span></div>
              </a>
              <a className="contact-item" href={SOCIALS.snapchat} target="_blank" rel="noopener">
                <div className="icon-tile"><IconSnapchat /></div>
                <div><strong>Snapchat</strong><span>ijwlabs</span></div>
              </a>
              <div className="contact-item" style={{ cursor: "default" }}>
                <div className="icon-tile"><IconPin /></div>
                <div><strong>Based in Accra, Ghana</strong><span>Working with clients everywhere</span></div>
              </div>
              <div className="contact-item" style={{ cursor: "default" }}>
                <div className="icon-tile"><IconClock /></div>
                <div><strong>Hours</strong><span>Mon–Sat, 9:00–19:00 GMT</span></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card" style={{ padding: 40 }}>
              <span className="kicker">Email us</span>
              <h2 className="display" style={{ fontSize: "1.8rem", marginTop: 12 }}>Tell us about your project</h2>
              <p style={{ color: "var(--ink-dim)", marginTop: 12 }}>Your message will be sent to {CONTACT_EMAIL}.</p>
              <form className="contact-form" name="project-inquiry" method="POST" action="/contact/sent/" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="project-inquiry" />
                <p className="visually-hidden"><label>Leave this empty: <input name="bot-field" /></label></p>
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" autoComplete="name" required />
                <label htmlFor="contact-email">Your email</label>
                <input id="contact-email" type="email" name="email" autoComplete="email" required />
                <label htmlFor="contact-service">What can we help with?</label>
                <select id="contact-service" name="service" required defaultValue="">
                  <option value="" disabled>Choose a service</option>
                  <option value="Website">Website</option>
                  <option value="Business system">Business system</option>
                  <option value="Photo editing">Photo editing</option>
                  <option value="Something else">Something else</option>
                </select>
                <label htmlFor="contact-message">Your message</label>
                <textarea id="contact-message" name="message" rows="5" required />
                <button className="btn btn-primary" type="submit">Send email</button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
