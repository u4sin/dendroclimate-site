import { NavLink } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/aboutme">About Me</NavLink>
          <NavLink to="/blog">Blog</NavLink>
{/*           <NavLink to="/resources">Resources</NavLink> */}
          <NavLink to="/publications">Publications</NavLink>
{/*           <NavLink to="/teaching-outreach">Teaching</NavLink> */}
          <NavLink to="/fieldwork">Fieldwork</NavLink>
          <NavLink to="/contact-cv">Contact</NavLink>
        </div>
        <button
          onClick={toggleTheme}
          className="btn ghost"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}

        </button>
      </div>
    </nav>
  );
}

