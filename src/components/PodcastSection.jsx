// import React, { useRef, useEffect, useState } from "react";
// import PodcastCard from "./podcastCard";
// import podcasts from "../data/dummyData";
// import "../styles/PodcastSection.css";

// function PodcastSection({ title, filterBy }) {
//   const filtered = podcasts.filter(p => p.category === filterBy);
//   const scrollRef = useRef(null);
//   const [visibleIndices, setVisibleIndices] = useState([]);

//   const handleScroll = () => {
//     if (!scrollRef.current) return;

//     const scrollLeft = scrollRef.current.scrollLeft;
//     const cardWidth = 196; // Width + gap approx (180 + 16)
//     const currentIndex = Math.floor(scrollLeft / cardWidth);

//     let newVisible = [];
//     for (let i = 0; i < filtered.length; i++) {
//       if (i <= currentIndex + 3) {
//         newVisible.push(i);
//       }
//     }
//     setVisibleIndices(newVisible);
//   };

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.addEventListener("scroll", handleScroll);
//       handleScroll(); // initial call to show first few cards

//     }
//     return () => {
//       if (scrollRef.current) {
//         scrollRef.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [filtered]);

//   return (
//     <div className="podcast-section">
//       <h2 className="section-title">{title}</h2>
//       <div ref={scrollRef} className="podcast-scroll">
//         {filtered.map((p, index) => (
//           <div
//             key={p.id}
//             className={`card-wrapper ${visibleIndices.includes(index) ? "slide-in-right" : ""}`}
//           >
//             <PodcastCard
//               title={p.title}
//               image={p.image}
//               plays={p.plays}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PodcastSection;





// import React, { useRef, useEffect, useState, useMemo } from "react";
// import PodcastCard from "./podcastCard";
// import podcasts from "../data/dummyData";
// import "../styles/PodcastSection.css";

// function PodcastSection({ title, filterBy }) {
//   const scrollRef = useRef(null);
//   const [visibleIndices, setVisibleIndices] = useState([]);

//   // ✅ useMemo se stable filtered value
//   const filtered = useMemo(() => {
//     return podcasts.filter(p => p.category === filterBy);
//   }, [filterBy]);

//   const handleScroll = () => {
//     if (!scrollRef.current) return;

//     const scrollLeft = scrollRef.current.scrollLeft;
//     const cardWidth = 196;
//     const currentIndex = Math.floor(scrollLeft / cardWidth);

//     let newVisible = [];
//     for (let i = 0; i < filtered.length; i++) {
//       if (i <= currentIndex + 3) {
//         newVisible.push(i);
//       }
//     }
//     setVisibleIndices(newVisible);
//   };

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.addEventListener("scroll", handleScroll);
//       handleScroll(); // Initial run
//     }
//     return () => {
//       if (scrollRef.current) {
//         scrollRef.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [filtered]); // ✅ filtered now memoized

//   return (
//     <div className="podcast-section">
//       <h2 className="section-title">{title}</h2>
//       <div ref={scrollRef} className="podcast-scroll">
//         {filtered.map((p, index) => (
//           <div
//             key={p.id}
//             className={`card-wrapper ${visibleIndices.includes(index) ? "slide-in-right" : ""}`}
//           >
//             <PodcastCard
//               title={p.title}
//               image={p.image}
//               plays={p.plays}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PodcastSection;



// import React, { useRef, useEffect, useState } from "react";
// import PodcastCard from "./PodcastCard";
// import "../styles/PodcastSection.css";

// function PodcastSection({ title, data = [] }) {
//   const scrollRef = useRef(null);
//   const [visibleIndices, setVisibleIndices] = useState([]);

//   const handleScroll = () => {
//     if (!scrollRef.current) return;
//     const scrollLeft = scrollRef.current.scrollLeft;
//     const cardWidth = 196;
//     const currentIndex = Math.floor(scrollLeft / cardWidth);

//     const newVisible = [];
//     for (let i = 0; i < data.length; i++) {
//       if (i <= currentIndex + 3) newVisible.push(i);
//     }
//     setVisibleIndices(newVisible);
//   };

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.addEventListener("scroll", handleScroll);
//       handleScroll();
//     }
//     return () => {
//       if (scrollRef.current) {
//         scrollRef.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [data]);

//   return (
//     <div className="podcast-section">
//       <h2 className="section-title">{title}</h2>
//       <div ref={scrollRef} className="podcast-scroll">
//         {data.length > 0 ? (
//           data.map((p, index) => (
//             <div
//               key={p._id || index}
//               className={`card-wrapper ${visibleIndices.includes(index) ? "slide-in-right" : ""}`}
//             >
//               <PodcastCard title={p.title} image={p.image} plays={p.plays} rating={p.rating} />
//             </div>
//           ))
//         ) : (
//           <p style={{ color: "black" }}>No podcasts available in this section</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PodcastSection;





// src/components/PodcastSection.jsx

import React, { useRef, useEffect, useState } from "react";
import PodcastCard from "./PodcastCard";
import "../styles/PodcastSection.css";

const UPLOADS_BASE = import.meta.env.VITE_UPLOADS_BASE_URL || "http://localhost:5000";

function PodcastSection({ title, data = [] }) {
  const scrollRef = useRef(null);
  const [visibleIndices, setVisibleIndices] = useState([]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 196;
    const currentIndex = Math.floor(scrollLeft / cardWidth);

    const newVisible = [];
    for (let i = 0; i < data.length; i++) {
      if (i <= currentIndex + 3) newVisible.push(i);
    }
    setVisibleIndices(newVisible);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [data]);

  return (
    <div className="podcast-section">
      <h2 className="section-title">{title}</h2>
      <div ref={scrollRef} className="podcast-scroll">
        {data.length > 0 ? (
          data.map((p, index) => {
            const fullAudioUrl = p.audioUrl?.startsWith("http")
              ? p.audioUrl
              : `${UPLOADS_BASE}/${p.audioUrl}`;

            return (
              <div
                key={p._id || index}
                className={`card-wrapper ${visibleIndices.includes(index) ? "slide-in-right" : ""}`}
              >
                <PodcastCard
                  _id={p._id}
                  title={p.title}
                  image={p.image}
                  plays={p.plays}
                  rating={p.rating}
                  audioUrl={fullAudioUrl}
                />
              </div>
            );
          })
        ) : (
          <p style={{ color: "black" }}>No podcasts available in this section</p>
        )}
      </div>
    </div>
  );
}

export default PodcastSection;


