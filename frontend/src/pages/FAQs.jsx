import { faqs } from "../data/faqs";
import "../styles/faq.css";
function FAQs() {
  return (
    <div className="container">
      <h2 className="page-title">FAQs</h2>
      <p className="page-subtitle">Common questions answered clearly.</p>

      <div className="grid faq-grid">
        {faqs.map((item) => (
          <div key={item.question} className="card faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;