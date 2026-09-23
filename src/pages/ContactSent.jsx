import { Link } from "react-router-dom";
import { usePageMeta } from "../seo";
import { PAGE_META } from "../page-metadata";

export default function ContactSent() {
  usePageMeta(PAGE_META["/contact/sent"]);
  return (
    <section className="page-hero">
      <div className="container">
        <span className="kicker">Message sent</span>
        <h1 className="display">Thanks for reaching out.</h1>
        <p>Your project inquiry has been received. We’ll reply to the email address you provided.</p>
        <Link className="btn btn-primary" to="/" style={{ marginTop: 24 }}>Back to home</Link>
      </div>
    </section>
  );
}
