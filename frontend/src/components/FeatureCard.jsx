import { Link } from "react-router-dom";

function FeatureCard({ title, description, to, icon }) {
  return (
    <Link to={to} className="feature-card card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default FeatureCard;