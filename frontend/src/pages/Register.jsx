import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="container auth-page">
      <div className="card auth-card">
        <h2 className="page-title">Register</h2>
        <p className="page-subtitle">Create your SafeTalk profile.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input className="input" type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className="input" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="input" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button className="btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;