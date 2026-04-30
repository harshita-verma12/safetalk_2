import { concerns } from "../data/concerns";
import "../styles/concerns.css";

function AreasOfConcern() {
  return (
    <div className="container">
      <header className="concerns-header">
        <h2 className="page-title">Area of Concerns</h2>
        <p className="page-subtitle">Understand your emotions and find gentle paths to calm.</p>
      </header>

      <div className="concerns-grid">
        {concerns.map((item) => (
          <article key={item.title} className="card concern-card">
            <h3>{item.title}</h3>
            <p className="solution-text">{item.solution}</p>
            <button className="btn btn-secondary">Learn more about {item.title}</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AreasOfConcern;