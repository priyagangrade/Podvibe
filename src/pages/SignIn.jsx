import React, { useState, useEffect } from "react";
import "../styles/AuthForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaPodcast } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import api from "../api";

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState(false);
  const [startLoop, setStartLoop] = useState(false);
  const [error, setError] = useState("");
  const [googleBtnLoading, setGoogleBtnLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!touched) setStartLoop(true);
    }, 900);
    return () => clearTimeout(timer);
  }, [touched]);

  const handleFocus = () => {
    setTouched(true);
    setStartLoop(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/users/signin", formData);
      const data = response.data;

      login(data);
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "Network error. Please try again."
      );
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleBtnLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();

      const response = await api.post("/users/google-login", {
        token: idToken,
      });
      const data = response.data;

      login(data);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed");
    } finally {
      setGoogleBtnLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div
        className={`auth-container ${
          startLoop && !touched ? "bounce-loop" : ""
        }`}
      >
        <div className="auth-header">
          <div className="left-logo">
            <h1>Welcome Back</h1>
            <FaPodcast className="podcast-icon" />
          </div>
          <h3 className="form-title">Sign in to your account</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
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
              onFocus={handleFocus}
            />
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button className="signup-btn" type="submit">
            Sign In
          </button>

          <hr className="divider" />
          <div className="divider-text">or</div>

          <button
            className="google-login-btn"
            onClick={handleGoogleLogin}
            disabled={googleBtnLoading}
            type="button"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="google"
              className="google-icon"
            />
            Sign in with Google
          </button>

          <p>
            Don’t have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} PodVibe. All rights reserved.
      </footer>
    </div>
  );
}
