import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("adminUser")
    );

    if (existingUser && existingUser.email === form.email) {
      setError("This email is already registered.");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    localStorage.setItem("adminUser", JSON.stringify(newUser));

    alert("Account created successfully!");
    navigate("/login");
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">🎓</div>

        <h1>Create Account</h1>
        <p className="auth-subtitle">
          Register as a Student Portal administrator
        </p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={form.password}
            onChange={handleChange}
            minLength="6"
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            minLength="6"
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;