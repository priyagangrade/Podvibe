// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import musicIcon from "../../public/images/music_icon.png";
// import "../styles/PodcastCard1.css";
// import {
//   FaPlay,
//   FaPause,
//   FaStar,
//   FaHeart,
//   FaHeadphones,
//   FaTrash,
//   FaEdit,
// } from "react-icons/fa";
// import "../styles/PodcastCard.css";

// function PodcastCard({
//   _id,
//   title,
//   image,
//   plays = 0,
//   rating = 4.5,
//   audioUrl,
//   createdBy,
//   description,
//   showControls = false,
//   onDelete,
//   onEdit,
// }) {
//   const navigate = useNavigate();
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleCardClick = () => navigate(`/podcast/${_id}`);

//   const handlePlay = (e) => {
//     e.stopPropagation();
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       audioRef.current
//         .play()
//         .then(() => {
//           setIsPlaying(true);
//         })
//         .catch((err) => {
//           console.error("Audio play error:", err.message);
//         });
//     }
//   };

//   // Auto-update play state if user pauses manually
//   const handleAudioEnded = () => setIsPlaying(false);
//   const handleAudioPause = () => setIsPlaying(false);

//   return (
//     <div className="podcast-card" onClick={handleCardClick}>
//       <div className="card-image-container">
//         <img src={image || musicIcon} alt={title} className="podcast-image" />
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
//           {audioUrl && (
//             <>
//               <button className="play-overlay-button" onClick={handlePlay}>
//                 {isPlaying ? <FaPause /> : <FaPlay />}
//               </button>
//               <audio
//                 ref={audioRef}
//                 src={audioUrl}
//                 preload="auto"
//                 onEnded={handleAudioEnded}
//                 onPause={handleAudioPause}
//               />
//             </>
//           )}
//         </div>
//       </div>

//       <div className="podcast-body">
//         <h4 className="podcast-title">{title}</h4>
//         <p className="podcast-description">{description}</p>
//         <p className="podcast-creator">By: {createdBy?.name || "Unknown"}</p>

//         {showControls && (
//           <div className="podcast-actions">
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onEdit(_id);
//               }}
//             >
//               <FaEdit />
//             </button>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onDelete(_id);
//               }}
//             >
//               <FaTrash />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>

//   );

// }

// export default PodcastCard;





import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import musicIcon from "../../public/images/music_icon.png";
import {
  FaPlay,
  FaPause,
  FaStar,
  FaHeart,
  FaHeadphones,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import "../styles/PodcastCard1.css";

function PodcastCard({
  _id,
  title,
  image,
  plays = 0,
  rating = 4.5,
  audioUrl,
  createdBy,
  description,
  showControls = false,
  onDelete,
  onEdit,
}) {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const handleCardClick = () => navigate(`/podcast/${_id}`);

  const handlePlay = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => setCurrentTime(audio.currentTime);
    const setDur = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", setDur);
    audio.addEventListener("ended", () => setIsPlaying(false));
    audio.addEventListener("pause", () => setIsPlaying(false));
    audio.addEventListener("play", () => setIsPlaying(true));

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", setDur);
    };
  }, []);

  const format = (t) => {
    const min = Math.floor(t / 60);
    const sec = Math.floor(t % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="podcast-card" onClick={handleCardClick}>
      <div className="card-image-container">
        <img src={image || musicIcon} alt={title} className="podcast-image" />
      </div>

      <div className="podcast-info">
        <h4 className="podcast-title">{title}</h4>

        {/* Show More / Show Less Description */}
        <p className="podcast-description">
          {showFullDesc
            ? description
            : description.slice(0, 100) + (description.length > 100 ? "..." : "")}
        </p>
        {description.length > 100 && (
          <button
            className="toggle-description-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowFullDesc((prev) => !prev);
            }}
          >
            {showFullDesc ? "Show Less" : "Show More"}
          </button>
        )}

        <p className="podcast-creator">By: {createdBy?.name || "Unknown"}</p>

        <div className="podcast-meta">
          <span><FaStar /> {rating}</span>
          <span><FaHeadphones /> {plays}</span>
          <span><FaHeart /></span>
        </div>

        {audioUrl && (
          <>
            <button className="play-btn" onClick={handlePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <audio ref={audioRef} src={audioUrl} preload="auto" />

            <div className="progress-container">
              <span>{format(currentTime)}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span>{format(duration)}</span>
            </div>
          </>
        )}

        {showControls && (
          <div className="podcast-actions">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(_id);
              }}
            >
              <FaEdit />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(_id);
              }}
            >
              <FaTrash />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PodcastCard;





