import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HeroSlider.css";

const slides = [
  {
    title: "PodVibe - Your Ultimate Podcast Hub",
    subtitle: "Discover amazing voices every day",
    image: "/images/desktop1.jpg",
  },
  {
    title: "Discover Your Next Favorite Podcast",
    subtitle: "Explore thousands of podcasts from every genre",
    image: "/images/desktop2.jpg",
  },
  {
    title: "Join Our Podcast Community",
    subtitle: "Listen. Learn. Vibe.",
    image: "/images/desktop7.jpg",
  },
  {
    title: "Explore Trending Podcasts",
    subtitle: "Find stories, news, music & more",
    image: "/images/desktop6.jpg",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>{slides[currentIndex].title}</h1>
        <p>{slides[currentIndex].subtitle}</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleSignUp}>
            Sign Up
          </button>
          <button className="btn-secondary" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src={slides[currentIndex].image} 
          alt="Hero"
          className="fade-image"
        />
      </div>
    </div>
  );
}









