import React from "react";
import "../styles/EasySteps.css";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up with your email or Google account to get started.",
    icon: "📝",
  },
  {
    id: 2,
    title: "Upload Podcast",
    description: "Add your podcast with title, image, and audio in seconds.",
    icon: "🎙️",
  },
  {
    id: 3,
    title: "Reach Audience",
    description: "Grow your listeners and receive love and feedback.",
    icon: "🚀",
  },
];

function EasySteps() {
  return (
    <section className="easy-steps-section">
      <h2 className="section-title">Easy Steps to Start</h2>
      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EasySteps;
