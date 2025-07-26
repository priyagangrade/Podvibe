import React from "react";
import "../styles/PopularPodcasts.css";

function PopularPodcasts() {
  return (
    <section className="popular-podcasts">
      <h2>Popular Podcasts</h2>
      <div className="podcast-cards">
        <div className="podcast-card">
          <img src="/images/popular1.webp" alt="Podcast 1" />
          <h3>Motivation Talks</h3>
        </div>
        <div className="podcast-card">
          <img src="/images/popular2.webp" alt="Podcast 2" />
          <h3>Startup Stories</h3>
        </div>
        <div className="podcast-card">
          <img src="/images/popular3.webp" alt="Podcast 3" />
          <h3>Health & Mind</h3>
        </div>
      </div>
    </section>
  );
}

export default PopularPodcasts;
