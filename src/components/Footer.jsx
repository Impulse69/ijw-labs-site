import { Link } from "react-router-dom";
import { waLink, SOCIALS } from "../content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <Link to="/" className="brand">
              IJW<span style={{ color: "#6f9bff" }}>LABS</span>
              <small>Digital Solutions</small>
            </Link>
            <p>Digital solutions that drive results. Built in Accra, working with businesses everywhere.</p>
          </div>
          <div>
            <h5>Pages</h5>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h5>Services</h5>
            <Link to="/services">Web Development</Link>
            <Link to="/services">Systems Development</Link>
            <Link to="/services">Photo Editing</Link>
          </div>
          <div>
            <h5>Contact</h5>
            <a href={waLink("Hi IJW Labs!")} target="_blank" rel="noopener">WhatsApp: +233 53 992 3975</a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener">Instagram: @ijw_labs</a>
            <a href={SOCIALS.x} target="_blank" rel="noopener">X: @ijwlabs</a>
            <a href={SOCIALS.snapchat} target="_blank" rel="noopener">Snapchat: ijwlabs</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 IJW Labs. All rights reserved.</span>
          <span>Smart Solutions. Stronger Presence. Real Growth.</span>
        </div>
      </div>
    </footer>
  );
}
