import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services/", label: "Services" },
  { to: "/work/", label: "Our Work" },
  { to: "/about/", label: "About Us" },
  { to: "/contact/", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          IJW<span>LABS</span>
          <small>Digital Solutions</small>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? "active" : "")}>
              {l.label}
            </NavLink>
          ))}
          <Link className="btn btn-primary" style={{ padding: "10px 18px", marginLeft: 10 }} to="/contact/">Reach us</Link>
        </div>
        <button className="nav-burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
