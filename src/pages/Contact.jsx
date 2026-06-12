import Reveal from "../components/Reveal";
import { waLink, SOCIALS } from "../content";
import { IconWhatsApp, IconInstagram, IconX, IconSnapchat, IconPin, IconClock } from "../components/Icons";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Contact</span>
          <h1 className="display">Talk to us today</h1>
          <p>WhatsApp is fastest — a real founder replies, not a bot. Every other channel works too.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-list">
              <a className="contact-item" href={waLink("Hi IJW Labs! I'd like to discuss a project.")} target="_blank" rel="noopener">
                <div className="icon-tile" style={{ background: "#e7f7ed", color: "var(--wa)" }}><IconWhatsApp /></div>
                <div><strong>WhatsApp — fastest</strong><span>+233 53 992 3975 · replies within 48h</span></div>
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
                <div><strong>Hours</strong><span>Mon–Sat, 9:00–19:00 GMT · WhatsApp anytime</span></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card" style={{ padding: 40 }}>
              <span className="kicker">Start here</span>
              <h2 className="display" style={{ fontSize: "1.8rem", marginTop: 12 }}>What to send us</h2>
              <p style={{ color: "var(--ink-dim)", marginTop: 12 }}>Copy this into WhatsApp and fill the blanks — you'll get a quote faster:</p>
              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 10, padding: "18px 20px", marginTop: 16, fontSize: ".95rem", color: "var(--ink)" }}>
                "Hi IJW Labs! My business is <b>______</b>.<br />
                I need <b>a website / a system / photo editing / documents</b>.<br />
                My budget range is <b>______</b> and I'd like it by <b>______</b>."
              </div>
              <a className="btn btn-wa" style={{ marginTop: 22 }} href={waLink("Hi IJW Labs! My business is ____. I need ____. My budget range is ____ and I'd like it by ____.")} target="_blank" rel="noopener">
                <IconWhatsApp size={17} /> Open WhatsApp with this template
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
