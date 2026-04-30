import { helplines } from "../data/helplines";
import "../styles/contact.css";
function Contact() {
  return (
    <div className="container">
      <h2 className="page-title">Contact & Helplines</h2>
      <p className="page-subtitle">Important support numbers and SafeTalk contact info.</p>

      <div className="card contact-card">
        <p><strong>Email:</strong> support@safetalk.com</p>
        <p><strong>Phone:</strong> +91 99999 99999</p>
        <p><strong>Location:</strong> India</p>
      </div>

      <div className="grid helpline-grid">
        {helplines.map((item) => (
          <div key={item.name} className="card helpline-card">
            <h3>{item.name}</h3>
            <p><strong>{item.number}</strong></p>
            <span>{item.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;