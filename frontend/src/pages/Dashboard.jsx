import { useState } from "react";
import "../styles/dashboard.css";

function Dashboard() {
  const [mood, setMood] = useState("Calm");
  const [note, setNote] = useState("");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(["Drink water", "Take a 5-minute walk"]);
  const [journal, setJournal] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTodos([...todos, task.trim()]);
    setTask("");
  };

  return (
    <div className="container">
      <h2 className="page-title">Profile Dashboard</h2>
      <p className="page-subtitle">A gentle place to check in, reflect, and stay productive.</p>

      <div className="grid dashboard-grid">
        <section className="card panel">
          <h3 className="section-title">Daily Moodboard Check-in</h3>
          <select className="select" value={mood} onChange={(e) => setMood(e.target.value)}>
            <option>Calm</option>
            <option>Happy</option>
            <option>Sad</option>
            <option>Anxious</option>
            <option>Motivated</option>
          </select>
          <textarea className="textarea" placeholder="Add a note about how you feel..." value={note} onChange={(e) => setNote(e.target.value)} />
        </section>

        <section className="card panel">
          <h3 className="section-title">Journal Prompt</h3>
          <p className="prompt">What is one thing that felt heavy today, and what helped even a little?</p>
          <textarea className="textarea" placeholder="Write your feelings here..." value={journal} onChange={(e) => setJournal(e.target.value)} />
        </section>

        <section className="card panel">
          <h3 className="section-title">Daily Quote</h3>
          <div className="quote-banner">
            Healing is not linear. Small moments of care matter.
          </div>
        </section>

        <section className="card panel">
          <h3 className="section-title">To-Do List</h3>
          <form onSubmit={handleAddTodo} className="todo-form">
            <input className="input" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a task..." />
            <button className="btn" type="submit">Add</button>
          </form>
          <ul className="todo-list">
            {todos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card panel full">
          <h3 className="section-title">Progress Graph</h3>
          <div className="chart-box">
            <div className="chart-bar" style={{ height: "35%" }}></div>
            <div className="chart-bar" style={{ height: "50%" }}></div>
            <div className="chart-bar" style={{ height: "60%" }}></div>
            <div className="chart-bar" style={{ height: "78%" }}></div>
            <div className="chart-bar chart-bar-active" style={{ height: "88%" }}></div>
          </div>
          <p className="chart-note">A simple visual comparison of recent entries and progress.</p>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;