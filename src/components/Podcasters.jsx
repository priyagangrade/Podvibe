import React from "react";
import "../styles/Podcasters.css";

function TopPodcasters() {
  const podcasters = [
    {
      id: 1,
      name: "Aryan Roy",
      image: "/images/podcaster2.jpg",
      tagline: "Tech Talks & AI Trends",
    },
    {
      id: 2,
      name: "Zoya Khan",
      image: "/images/podcaster1.jpg",
      tagline: "Mental Health & Wellness",
    },
    {
      id: 3,
      name: "Ravi Verma",
      image: "/images/podcaster3.webp",
      tagline: "Startup & Business Tips",
    },
    {
      id: 4,
      name: "Meera Nair",
      image: "/images/podcaster4.webp",
      tagline: "Stories that Touch Hearts",
    },
  ];

  return (
    <section className="top-podcasters-section">
      <div className="container">
        <div className="section-header">
          <h2 className="podcasters-heading">Meet Our Top Podcasters 🎤</h2>
          <p>Creators who inspire, engage, and lead the podcasting revolution</p>
        </div>

        <div className="podcaster-grid">
          {podcasters.map((p) => (
            <div className="podcaster-card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopPodcasters;
