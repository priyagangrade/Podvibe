// // src/components/TopPodcasts.jsx
// import React, { useEffect, useState } from "react";
// import api from "../api";
// import "../styles/TopPodcasts.css";

// function TopPodcasts() {
//   const [topTwo, setTopTwo] = useState([]);

//   useEffect(() => {
//     const fetchTop = async () => {
//       try {
//         const res = await api.get("/podcasts");
//         setTopTwo(res.data.slice(0, 2)); // Pick top 2
//       } catch (error) {
//         console.error("Error loading top podcasts", error);
//       }
//     };
//     fetchTop();
//   }, []);

//   return (
//     <section className="top-podcasts-section">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="t">Top Podcasts of the Week ✨</h2>
//           <p>Handpicked highlights just for you</p>
//         </div>

//         <div className="top-podcasts-cards">
//           {topTwo.map((podcast) => (
//             <div key={podcast._id} className="top-podcast-card">
//               <img

//                 src={podcast.image ? `http://localhost:5000/uploads/${podcast.image}` : "/image/karn.jpg"}
//                 alt={podcast.title}
//                 className="top-podcast-img"
//               />
//               <div className="top-podcast-info">
//                 <h3>{podcast.title}</h3>
//                 <p>{podcast.creator || "Unknown Creator"}</p>
//                 <button className="play-btn">▶ Listen Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TopPodcasts;

// ____________________________________________________________________________________

// import React, { useEffect, useState } from "react";
// import api from "../api";
// import "../styles/TopPodcasts.css";

// function TopPodcasts() {
//   const [topTwo, setTopTwo] = useState([]);

//   useEffect(() => {
//     const fetchTop = async () => {
//       try {
//         const res = await api.get("/podcasts");
//         const all = res.data;

//         if (!all || all.length === 0) return;

//         const twoDayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 2));
//         const startIndex = (twoDayIndex * 2) % all.length;

//         const top = [];
//         for (let i = 0; i < 2; i++) {
//           top.push(all[(startIndex + i) % all.length]);
//         }

//         console.log("🎧 Rotated Top 2 Podcasts: ", top);
//         setTopTwo(top);
//       } catch (error) {
//         console.error("❌ Error loading top podcasts", error);
//       }
//     };

//     fetchTop();
//   }, []);

//   return (
//     <section className="top-podcasts-section">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="type">Top Podcasts of the Week ✨</h2>
//           <p>Handpicked highlights just for you</p>
//         </div>

//         <div className="top-podcasts-cards">
//           {topTwo.map((podcast) => (
//             <div key={podcast._id} className="top-podcast-card">
//               <img
//                 src={podcast.image || "/image/karn.jpg"}
//                 onError={(e) => { e.target.src = "/image/karn.jpg"; }}
//                 alt={podcast.title}
//                 className="top-podcast-img"
//               />
//               <div className="top-podcast-info">
//                 <h3>{podcast.title}</h3>
//                 <p>{podcast.creator || "Unknown Creator"}</p>
//                 <button className="play-btn">▶ Listen Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TopPodcasts;



import React, { useEffect, useState } from "react";
import api from "../api";
import "../styles/TopPodcasts.css";

function TopPodcasts() {
  const [topTwo, setTopTwo] = useState([]);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const res = await api.get("/podcasts");
        const all = res.data;

        if (!all || all.length === 0) return;

        const twoDayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 2));
        const startIndex = (twoDayIndex * 2) % all.length;

        const top = [];
        for (let i = 0; i < 2; i++) {
          top.push(all[(startIndex + i) % all.length]);
        }

        console.log("🎧 Rotated Top 2 Podcasts: ", top);
        setTopTwo(top);
      } catch (error) {
        console.error("❌ Error loading top podcasts", error);
      }
    };

    fetchTop();
  }, []);

  return (
    <section className="top-podcasts-section">
      <div className="container">
        <div className="section-header">
          <h2 className="type">Top Podcasts of the Week ✨</h2>
          <p>Handpicked highlights just for you</p>
        </div>

        <div className="top-podcasts-cards">
          {topTwo.map((podcast) => (
            <div key={podcast._id} className="top-podcast-card">
              <img
                src={podcast.image || "/image/karn.jpg"}
                onError={(e) => { e.target.src = "/image/karn.jpg"; }}
                alt={podcast.title}
                className="top-podcast-img"
              />
              <div className="top-podcast-info">
                <h3>{podcast.title}</h3>
                <p>{podcast.creator?.name || podcast.creator || "Unknown Creator"}</p>

                {/* 🎧 Audio player */}
                {podcast.audioUrl && (
                  <audio controls style={{ width: "100%", marginTop: "1rem" }}>
                    <source src={podcast.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopPodcasts;
