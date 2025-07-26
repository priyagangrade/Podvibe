// import React, { useState, useEffect } from "react";
// import {
//   FaSearch,
//   FaUserCircle,
//   FaPodcast,
//   FaSignOutAlt,
//   FaCog,
//   FaHeadphones,
//   FaPlay
// } from "react-icons/fa";
// import "../styles/Navbar.css";

// const searchPlaceholders = [
//   "Search for your favorite podcasts...",
//   "Discover new voices...",
//   "Find trending podcasts...",
//   "Explore podcast categories...",
//   "Search by podcast host..."
// ];

// export default function Navbar() {
//   const [placeholderIndex, setPlaceholderIndex] = useState(0);
//   const [showDashboard, setShowDashboard] = useState(false);

//   const user = {
//     name: "John Doe",
//     email: "john@example.com",
//     avatar: null,
//     uploadedPodcasts: 5,
//     totalListeners: 1200
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPlaceholderIndex(prev => (prev + 1) % searchPlaceholders.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="logo-container">
//           <div className="logo-icon-group">
//             <FaHeadphones className="logo-icon headphone-icon" />
//             <FaPlay className="logo-icon play-icon" />
//           </div>
//           <div className="logo-text">
//             <span className="logo-main">PodVibe</span>
//             <span className="logo-slogan">Listen, Vibe, Connect.</span>
//           </div>
//         </div>

//         <div className="search-container">
//           <FaSearch className="search-icon" />
//           <input
//             type="text"
//             placeholder={searchPlaceholders[placeholderIndex]}
//             className="search-input"
//           />
//         </div>
//       </div>

//       <div className="nav-menu">
//         <ul className="nav-links">
//           <li><a href="/" className="active">Home</a></li>
//           <li><a href="/categories">Categories</a></li>
//           <li><a href="/upload">Upload Podcast</a></li>
//           <li className="dashboard-trigger">
//             <button
//               className="dashboard-btn"
//               onClick={() => setShowDashboard(!showDashboard)}
//             >
//               <FaUserCircle className="user-icon" />
//               <span>Dashboard</span>
//             </button>

//             {showDashboard && (
//               <div className="dashboard-dropdown">
//                 <div className="user-info">
//                   <div className="user-header">
//                     <FaUserCircle className="avatar" />
//                     <div className="user-details">
//                       <h3>{user.name}</h3>
//                       <p>{user.email}</p>
//                     </div>
//                   </div>

//                   <div className="stats">
//                     <div className="stat-item">
//                       <FaPodcast />
//                       <div className="stat-details">
//                         <span className="stat-value">{user.uploadedPodcasts}</span>
//                         <span className="stat-label">Podcasts</span>
//                       </div>
//                     </div>
//                     <div className="stat-item">
//                       <FaHeadphones />
//                       <div className="stat-details">
//                         <span className="stat-value">{user.totalListeners}</span>
//                         <span className="stat-label">Listeners</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="dashboard-links">
//                     <a href="/profile">
//                       <FaUserCircle />
//                       View Profile
//                     </a>
//                     <a href="/settings">
//                       <FaCog />
//                       Settings
//                     </a>
//                     <button className="signout-btn">
//                       <FaSignOutAlt />
//                       Sign Out
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaPodcast,
  FaSignOutAlt,
  FaCog,
  FaHeadphones,
  FaPlay,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";

const searchPlaceholders = [
  "Search for your favorite podcasts...",
  "Discover new voices...",
  "Find trending podcasts...",
  "Explore podcast categories...",
  "Search by podcast host...",
];

export default function Navbar() {
  const navigate = useNavigate();
  const { user: authUser, isAuthenticated, logout } = useAuth();
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);
  const dashboardRef = useRef(null);

  const user = authUser || {
    name: "Guest User",
    email: "guest@example.com",
    avatar: null,
    uploadedPodcasts: 0,
    totalListeners: 0,
  };

  const handleLogout = () => {
    logout();
    setShowDashboard(false);
    navigate("/sign-in");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Handle outside click to close dashboard
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dashboardRef.current &&
        !dashboardRef.current.contains(event.target)
      ) {
        setShowDashboard(false);
      }
    };

    if (showDashboard) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDashboard]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <Link
            to="/"
            className="logo-container"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="logo-icon-group">
              <FaHeadphones className="logo-icon headphone-icon" />
              <FaPlay className="logo-icon play-icon" />
            </div>
            <div className="logo-text">
              <span className="logo-main">PodVibe</span>
              <span className="logo-slogan">Listen, Vibe, Connect.</span>
            </div>
          </Link>
        </div>

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={searchPlaceholders[placeholderIndex]}
            className="search-input"
          />
        </div>
      </div>

      <div className="nav-menu">
        <ul className="nav-links">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/upload">Upload Podcast</Link>
            </li>
          )}
          {isAuthenticated ? (
            <li className="dashboard-trigger">
              <button
                className="dashboard-btn"
                onClick={() => setShowDashboard(!showDashboard)}
              >
                <FaUserCircle className="user-icon" />
                <span>Dashboard</span>
              </button>

              {showDashboard && (
                <div className="dashboard-dropdown" ref={dashboardRef}>
                  <div className="user-info">
                    <div className="user-header">
                      <FaUserCircle className="avatar" />
                      <div className="user-details">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                      </div>
                    </div>

                    <div className="stats">
                      <div className="stat-item">
                        <FaPodcast />
                        <div className="stat-details">
                          <span className="stat-value">
                            {user.uploadedPodcasts}
                          </span>
                          <span className="stat-label">Podcasts</span>
                        </div>
                      </div>
                      <div className="stat-item">
                        <FaHeadphones />
                        <div className="stat-details">
                          <span className="stat-value">
                            {user.totalListeners}
                          </span>
                          <span className="stat-label">Listeners</span>
                        </div>
                      </div>
                    </div>

                    <div className="dashboard-links">
                      <Link to="/profile">
                        <FaUserCircle />
                        View Profile
                      </Link>
                      <Link to="/settings">
                        <FaCog />
                        Settings
                      </Link>
                      <button className="signout-btn" onClick={handleLogout}>
                        <FaSignOutAlt />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ) : (
            <li>
              <Link to="/sign-in" className="auth-link">
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
