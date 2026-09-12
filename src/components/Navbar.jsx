import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../data/site";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Events", to: "/events" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <div className="brand-group">
          <Link
            to="/"
            className="brand quality-brand"
            aria-label="Quality Club home"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/quality-club-logo.png"
              alt="Quality Club, BIT Sindri"
            />
          </Link>

          <span className="brand-divider" aria-hidden="true" />

          <a
            href={siteConfig.links.ifqm}
            target="_blank"
            rel="noopener noreferrer"
            className="brand ifqm-brand"
            aria-label="Indian Foundation for Quality Management"
          >
            <img
              src="/images/ifqm-logo-header.svg"
              alt="Indian Foundation for Quality Management"
            />
          </a>
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="nav-cta"
          href={siteConfig.joinFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Join Us <ArrowUpRight size={17} strokeWidth={2} />
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}

        <a
          href={siteConfig.joinFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mobile-join"
        >
          Join Us <ArrowUpRight size={17} />
        </a>
      </div>
    </header>
  );
}