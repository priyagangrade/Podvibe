
// _______________________________________________________________________

// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaPlay,
//   FaStar,
//   FaHeart,
//   FaBookmark,
//   FaHeadphones,
// } from "react-icons/fa";
// import "../styles/PodcastCard.css";

// function PodcastCard({ _id, title, image, plays = 0, rating = 4.5, audioUrl }) {
//   const navigate = useNavigate();
//   const audioRef = useRef(null);

//   const handleCardClick = () => {
//     navigate(`/podcast/${_id}`);
//   };

//   const handlePlay = (e) => {
//     e.stopPropagation();
//     if (audioRef.current) {
//       audioRef.current.play().catch((err) => {
//         console.error("Playback failed:", err.message);
//       });
//     }
//   };

//   const hasValidAudio = audioUrl && audioUrl.trim() !== "";

//   // 🧠 Ye function smartly image return karega
//   const getImageUrl = () => {
//   return image?.trim() ? image : "/images/desktop2.jpg";
// };

//   return (
//     <div className="podcast-card" onClick={handleCardClick}>
//       <div className="card-image-container">
//         <img
//           src={getImageUrl()}
//           alt={title}
//           className="podcast-image"
//         />

//         <div className="card-overlay">
//           <div className="top-meta">
//             <span className="rating">
//               <FaStar /> {rating}
//             </span>
//             <span className="plays">
//               <FaHeadphones /> {plays}
//             </span>
//             <span className="like">
//               <FaHeart />
//             </span>
//           </div>
//           {hasValidAudio && (
//             <>
//               <button className="play-overlay-button" onClick={handlePlay}>
//                 <FaPlay />
//               </button>
//               <audio ref={audioRef} src={audioUrl} preload="auto" />
//             </>
//           )}
//         </div>
//       </div>

//       <div className="podcast-body">
//         <h4 className="podcast-title">{title}</h4>
//       </div>
//     </div>
//   );
// }

// export default PodcastCard;





// ______________________________________________________________________



import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlay,
  FaStar,
  FaHeart,
  FaHeadphones,
} from "react-icons/fa";
import "../styles/PodcastCard.css";

function PodcastCard({ _id, title, image, plays = 0, rating = 4.5, audioUrl }) {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handleCardClick = () => {
    navigate(`/podcast/${_id}`);
  };

  const handlePlay = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Playback failed:", err.message);
      });
    }
  };

  const hasValidAudio = audioUrl && audioUrl.trim() !== "";

  const getImageUrl = () => {
    return image?.trim() ? image : "/images/desktop2.jpg";
  };

  return (
    <div className="dribbble-card" onClick={handleCardClick}>
      <div className="dribbble-image-container">
        <img
          src={getImageUrl()}
          alt={title}
          className="dribbble-image"
        />
        <div className="duration-badge">{plays} <FaHeadphones /></div>

        {hasValidAudio && (
          <>
            <button className="play-overlay-button" onClick={handlePlay}>
              <FaPlay />
            </button>
            <audio ref={audioRef} src={audioUrl} preload="auto" />
          </>
        )}
      </div>

      <div className="dribbble-card-info">
        <h4>{title}</h4>
        <div className="meta-bottom">
          <span className="rating">
            <FaStar /> {rating}
          </span>
          <span className="like">
            <FaHeart />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PodcastCard;

