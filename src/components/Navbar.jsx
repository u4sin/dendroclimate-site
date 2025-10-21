import { NavLink } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">

        {/* Brand (logo + wordmark) */}
        <NavLink to="/" className="brand-link" aria-label="Dendroclimate — home">
          <img
            src="/logo-dendroclimate.png"
            alt="Dendroclimate"
            width={160}
            height={40}             // reserves space; avoids layout shift
            className="brand-logo"
          />
          <span className="brand-name">Dendroclimate</span>
        </NavLink>

        {/* Links */}
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/aboutme">About Me</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/fieldwork">Fieldwork</NavLink>
          <NavLink to="/contact-cv">Contact</NavLink>
        </div>

        {/* Theme toggle */}
        <button onClick={toggleTheme} className="btn ghost">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </nav>
  );
}


