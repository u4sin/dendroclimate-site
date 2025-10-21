import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Research from './pages/Research.jsx';
import Aboutme from './pages/Aboutme.jsx';
import Blog from './pages/Blog.jsx';
import Resources from './pages/Resources.jsx';
import NotFound from './pages/NotFound.jsx';
import Publications from './pages/Publications.jsx';
import TeachingOutreach from './pages/TeachingOutreach.jsx';
import Fieldwork from './pages/Fieldwork.jsx';
import ContactCV from './pages/ContactCV.jsx';

export default function App() {
  // Default to light theme if no preference is stored
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme === "light" ? "light-theme" : "dark-theme");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching-outreach" element={<TeachingOutreach />} />
          <Route path="/fieldwork" element={<Fieldwork />} />
          <Route path="/contact-cv" element={<ContactCV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
