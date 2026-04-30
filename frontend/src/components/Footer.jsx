import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>SafeTalk</h3>
          <p>Empower Your Mind</p>
        </div>

        <nav className="footer-links">
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/community">Community</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;