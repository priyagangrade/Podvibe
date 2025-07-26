import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import "../styles/PodcastDetails.css";

const PodcastDetails = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [error, setError] = useState("");


  const baseURL = "http://localhost:5000";

  useEffect(() => {
    if (!id) {
      setError("Invalid podcast ID");
      return;
    }

    // api.get(`/podcasts/${id}`)
    //   .then((res) => {
    //     console.log("🎧 Fetched podcast details:", res.data);
    //     setPodcast(res.data);
    //     console.log(podcast.audioUrl);
        
    //   })
    //   .catch((err) => {
    //     console.error("🚨 Error fetching podcast:", err);
    //     setError("Podcast not found or server error.");
    //   });

    api.get(`/podcasts/${id}`)
  .then((res) => {
    console.log("🎧 API Response:", res);
    if (!res.data) {
      setError("No podcast data received");
      return;
    }
    setPodcast(res.data);
  })
  .catch((err) => {
    console.error("🚨 Error fetching podcast:", err);
    setError("Podcast not found or server error.");
  });

  }, [id]);

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!podcast) return <div>Loading...</div>;

  const isValidAudio = podcast.audioUrl && podcast.audioUrl.trim() !== "";

  return (
    <>
      <div className="podcast-details-container">
        <div className="details-card">
          <img
            src={podcast.image || "/images/karn.jpg"}
            alt={podcast.title}
            className="details-image"
          />
          <div className="details-content">
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
            <p><strong>Category:</strong> {podcast.category?.name}</p>
            <p><strong>Uploaded by:</strong> {podcast.createdBy?.name}</p>
            <p><strong>Email:</strong> {podcast.createdBy?.email}</p>
            <p><strong>Uploaded On:</strong> {new Date(podcast.createdAt).toLocaleDateString()}</p>


            {podcast.audioUrl ? (
              <audio controls style={{ width: "100%", marginTop: "1rem" }}>
                <source src={podcast.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            ) : (
              <p style={{ color: "red" }}>⚠️ Audio not available</p>
            )}

          </div>
        </div>
      </div>
      <footer className="footer">
        Made with <span className="footer-accent">❤</span> by
        <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer"> Your Name</a>
        &nbsp;| Powered by <span className="footer-accent">PodVibe</span>
      </footer>
    </>
  );
};

export default PodcastDetails;












