import "../styles/home.css";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import QuoteCard from "../components/QuoteCard";
import { quotes } from "../data/quotes";


function Home() {
  const features = [
    { title: "Dashboard", description: "Mood check-ins, journal prompts, and progress tracking.", to: "/dashboard", icon: "🌤️" },
    { title: "Community", description: "Share anonymously and support others with kindness.", to: "/community", icon: "🤝" },
    { title: "AI Chat", description: "A calm support assistant for guidance and next steps.", to: "/chatbot", icon: "💬" },
    { title: "Concerns", description: "Common symptoms and soft solutions in one place.", to: "/concerns", icon: "🌷" }
  ];

  return (
    <div className="container">
      <section className="hero card">
        <div className="hero-content">
          <span className="pill">Mental health support web app</span>
          <h2>SafeTalk</h2>
          <p>
            A gentle space to check in with yourself, write your feelings, find helpful guidance, and feel heard.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn">Get Started</Link>
            <Link to="/contact" className="btn btn-secondary">Helplines</Link>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="floating-card card">Breathe</div>
          <div className="floating-card card">Journal</div>
          <div className="floating-card card">Support</div>
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">App Overview</h3>
        <div className="card overview">
          SafeTalk is built to help users feel supported through calm design, reflective journaling, daily mood tracking, community support, helpful articles, and easy access to helpline information.
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">Explore Features</h3>
        <div className="grid features-grid">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">Gentle Quotes</h3>
        <div className="grid quotes-grid">
          {quotes.map((item, index) => (
            <QuoteCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;