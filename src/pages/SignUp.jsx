
import React, { useState } from "react";
import "../styles/AuthForm.css";
import GoogleButton from "../components/GoogleButton";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPodcast } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import api from "../api";

export default function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/users/signup", formData);
      const data = response.data;

      login(data);
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <div className="auth-page">
        <div className="auth-container">
          {/* Top Header Section */}
          <div className="auth-header">
            <div className="left-logo">
              <h1>Join PodVibe</h1>
              <FaPodcast className="podcast-icon" />
            </div>
            <h3 className="form-title">Create an Account</h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Username"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {error && <p className="error-msg">{error}</p>}

            <button className="signup-btn" type="submit">
              Sign Up
            </button>

            <hr className="divider" />
            <div className="divider-text">or</div>

            <GoogleButton text="Sign up with Google" />

            <p>
              Already have an account? <Link to="/sign-in">Login</Link>
            </p>
          </form>
        </div>
      </div>

      {/* Page Footer */}
      <footer className="page-footer">
        <p>© {new Date().getFullYear()} PodVibe. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </>
  );
}
