import React from "react";
import "../styles/Footer.css";
import { FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Brand Info */}
        <div className="footer-brand">
          <h2>🎧 PodVibe</h2>
          <p>Listen. Vibe. Connect. A home for every voice.</p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/upload">Upload</a></li>
            <li><a href="/top-podcasters">Top Podcasters</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="mailto:support@podvibe.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PodVibe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;





