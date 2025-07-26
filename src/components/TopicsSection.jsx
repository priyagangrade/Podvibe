// import React from "react";
// import "../styles/TopicsSection.css";

// const topics = [
//   { title: "Technology", description: "Latest tech trends and updates." },
//   { title: "Health", description: "Tips for a healthy lifestyle." },
//   { title: "Business", description: "Insights into the business world." },
//   { title: "Education", description: "Learn something new every day." },
// ];

// function TopicsSection() {
//   return (
//     <section className="topics-section">
//       <div className="container">
//         <h2 className="section-title">Explore Topics</h2>
//         <div className="topics-grid">
//           {topics.map((topic, index) => (
//             <div key={index} className="topic-card">
//               <h3>{topic.title}</h3>
//               <p>{topic.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TopicsSection;





// ______________________________________________


import React, { useState } from "react";
import "../styles/TopicsSection.css";

const categories = [
  { label: "All", emoji: "" },
  { label: "Business & Finance", emoji: "💼💰" },
  { label: "Spirituality", emoji: "🙏🕊️" },
  { label: "Education", emoji: "📚" },
  { label: "Pop Culture", emoji: "🎤" },
  { label: "Self-Improvement", emoji: "🎓" },
  { label: "Health & Wellness", emoji: "🏋️‍♀️🧘‍♂️" },
  { label: "Sports", emoji: "🏆" },
  { label: "News & Politics", emoji: "📰🎙️" },
];

function TopicsSection() {
  const [selected, setSelected] = useState("All");

  return (
    <section className="topics-section">
      <div className="container">
        <div className="topics-grid">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={`topic-button ${selected === cat.label ? "active" : ""}`}
              onClick={() => setSelected(cat.label)}
            >
              {cat.label} {cat.emoji}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopicsSection;
