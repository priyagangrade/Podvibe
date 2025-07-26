import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaStar } from "react-icons/fa";
import "../styles/TopPicks.css";

function TopPicks({ podcasts = [] }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/podcast/${id}`);
  };

  return (
    <section className="top-picks-wrapper">
      <h2 className="section-title">Top Picks for You</h2>

      {podcasts.length === 0 ? (
        <p className="no-data">No top picks available right now.</p>
      ) : (
        <div className="top-picks-list">
          {podcasts.map((podcast) => (
            <div
              className="top-pick-card"
              key={podcast._id}
              onClick={() => handleCardClick(podcast._id)}
            >
              <div className="top-pick-image">
                <img
                  src={podcast.image?.trim() || "/images/desktop2.jpg"}
                  alt={podcast.title}
                />
                <button className="play-button">
                  <FaPlay />
                </button>
              </div>
              <div className="top-pick-info">
                <h4>{podcast.title}</h4>
                <div className="rating">
                  <FaStar /> {podcast.rating || 4.5}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default TopPicks;
