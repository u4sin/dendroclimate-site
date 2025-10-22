import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  // lock body scroll when open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <div className="container navbar-inner">
        {/* Brand */}
        <NavLink to="/" className="brand-link" aria-label="Home">
          <img src="/logo-dendroclimate.png" alt="Dendroclimate" className="brand-logo" />
          <span className="brand-name">Dendroclimate</span>
        </NavLink>

        {/* Toggle (mobile) */}
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="navmenu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>

        {/* Slide-out links */}
        <div id="navmenu" className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/research" onClick={() => setOpen(false)}>Research</NavLink>
          <NavLink to="/aboutme" onClick={() => setOpen(false)}>About Me</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/publications" onClick={() => setOpen(false)}>Publications</NavLink>
          <NavLink to="/fieldwork" onClick={() => setOpen(false)}>Fieldwork</NavLink>
          <NavLink to="/contact-cv" onClick={() => setOpen(false)}>Contact</NavLink>

          {/* Theme toggle inside drawer on mobile */}
          <button onClick={toggleTheme} className="btn ghost mt-2">
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        {/* Dim background when menu is open (click to close) */}
        {open && <button className="nav-overlay" aria-hidden="true" onClick={() => setOpen(false)} />}
      </div>
    </nav>
  );
}
