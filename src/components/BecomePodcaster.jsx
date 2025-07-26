import React from "react";
import "../styles/BecomePodcaster.css";

function BecomePodcaster() {
  return (
    <section className="become-podcaster-section">
      <div className="container podcaster-content">
        <div className="podcaster-text">
          <h2>🎙️ Become a Podcaster Today</h2>
          <p>Start sharing your voice with the world. It's quick, easy, and free!</p>
          <a href="/upload" className="cta-button">Start Now</a>
        </div>
        <div className="podcaster-image">
          <img src="/images/p6.jpg" alt="Mic Banner" />
        </div>
      </div>
    </section>
  );
}

export default BecomePodcaster;
