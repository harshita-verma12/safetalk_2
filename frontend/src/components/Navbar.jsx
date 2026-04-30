import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-mark">S</div>
          <div>
            <h1>SafeTalk</h1>
            <p>Empower Your Mind</p>
          </div>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/dashboard" className={navClass} onClick={() => setOpen(false)}>Dashboard</NavLink>
          <NavLink to="/community" className={navClass} onClick={() => setOpen(false)}>Community</NavLink>
          <NavLink to="/chatbot" className={navClass} onClick={() => setOpen(false)}>AI Chat</NavLink>
          <NavLink to="/concerns" className={navClass} onClick={() => setOpen(false)}>Concerns</NavLink>
          <NavLink to="/blog" className={navClass} onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/faqs" className={navClass} onClick={() => setOpen(false)}>FAQs</NavLink>
          <NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink to="/login" className="nav-link nav-pill" onClick={() => setOpen(false)}>Login</NavLink>
          <NavLink to="/register" className="nav-link nav-pill nav-pill-solid" onClick={() => setOpen(false)}>Register</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;