// import React, { useState, useEffect } from "react";
// import {
//   FaHeadphones,
//   FaDownload,
//   FaGlobe,
//   FaShieldAlt,
//   FaClock,
//   FaThumbsUp,
//   FaStar,
//   FaQuoteLeft,
// } from "react-icons/fa";
// import HeroSlider from "../components/HeroSlider";
// import TopicsSection from "../components/TopicsSection";
// import "../styles/Home.css";

// function Home() {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     setTestimonials([
//       {
//         id: 1,
//         name: "Sarah Johnson",
//         role: "Podcast Creator",
//         image: "https://via.placeholder.com/80x80/8A784E/FFFFFF?text=SJ",
//         text: "PodVibe has transformed how I connect with my audience. The platform is intuitive and the community is amazing!",
//         rating: 5,
//       },
//       {
//         id: 2,
//         name: "Mike Chen",
//         role: "Tech Enthusiast",
//         image: "https://via.placeholder.com/80x80/8A784E/FFFFFF?text=MC",
//         text: "I've discovered so many amazing podcasts here. The quality of content and ease of use is outstanding.",
//         rating: 5,
//       },
//       {
//         id: 3,
//         name: "Emma Davis",
//         role: "Business Coach",
//         image: "https://via.placeholder.com/80x80/8A784E/FFFFFF?text=ED",
//         text: "As a creator, PodVibe provides everything I need. The analytics and audience engagement tools are fantastic.",
//         rating: 5,
//       },
//     ]);
//   }, []);

//   return (
//     <div className="home-container">

//       {/* ✅ Hero Section */}
//       <HeroSlider />

//       {/* ✅ Popular Section (Just after HeroSlider) */}
//       <section className="popular-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>Popular on PodVibe</h2>
//             <p>Trending podcasts loved by millions</p>
//           </div>
//           <div className="podcast-grid">
//             {/* Sample podcast cards */}
//             <div className="podcast-card">
//               <img src="https://via.placeholder.com/300x200?text=Tech+Talk" alt="Tech Talk" />
//               <div className="podcast-info">
//                 <h3>Tech Talk Daily</h3>
//                 <p>Latest in technology and innovation</p>
//                 <span className="plays">12.5K plays</span>
//               </div>
//             </div>
//             <div className="podcast-card">
//               <img src="https://via.placeholder.com/300x200?text=Mindful+Living" alt="Mindful Living" />
//               <div className="podcast-info">
//                 <h3>Mindful Living</h3>
//                 <p>Wellness and mindfulness tips</p>
//                 <span className="plays">8.9K plays</span>
//               </div>
//             </div>
//             <div className="podcast-card">
//               <img src="https://via.placeholder.com/300x200?text=Business+Insights" alt="Business Insights" />
//               <div className="podcast-info">
//                 <h3>Business Insights</h3>
//                 <p>Entrepreneurship and business strategies</p>
//                 <span className="plays">15.2K plays</span>
//               </div>
//             </div>
//             <div className="podcast-card">
//               <img src="https://via.placeholder.com/300x200?text=Science+Today" alt="Science Today" />
//               <div className="podcast-info">
//                 <h3>Science Today</h3>
//                 <p>Latest scientific discoveries</p>
//                 <span className="plays">9.7K plays</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🔥 Topics Section */}
//       <TopicsSection />

//       {/* ⭐ Why Choose Us Section */}
//       <section className="why-choose-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>Why Choose PodVibe?</h2>
//             <p>Discover what makes us the ultimate podcast platform</p>
//           </div>
//           <div className="features-grid">
//             <div className="feature-card"><FaHeadphones /><h3>10K+ Podcasts</h3><p>Access to thousands of podcasts across all genres.</p></div>
//             <div className="feature-card"><FaDownload /><h3>Offline Listening</h3><p>Download your favorite episodes and listen anywhere.</p></div>
//             <div className="feature-card"><FaGlobe /><h3>Global Community</h3><p>Connect with podcast creators and listeners globally.</p></div>
//             <div className="feature-card"><FaShieldAlt /><h3>Secure Platform</h3><p>Your data is protected with top-level security.</p></div>
//             <div className="feature-card"><FaClock /><h3>Smart Recommendations</h3><p>AI suggests podcasts based on your taste.</p></div>
//             <div className="feature-card"><FaThumbsUp /><h3>Easy to Use</h3><p>User-friendly across all devices.</p></div>
//           </div>
//         </div>
//       </section>

//       {/* 🎯 Top Picks */}
//       <section className="top-picks-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>Top Picks for You</h2>
//             <p>Handpicked content based on your interests</p>
//           </div>
//           <div className="podcast-grid">
//             <div className="podcast-card">
//               <img src="https://via.placeholder.com/300x200?text=Mystery+Stories" alt="Mystery Stories" />
//               <div className="podcast-info">
//                 <h3>Mystery Stories</h3>
//                 <p>Thrilling mystery and suspense</p>
//                 <span className="plays">15.2K plays</span>
//               </div>
//             </div>
//             <div className="podcast-card">
//               <img src="https://via.placeholder.com/300x200?text=Fitness+Mind" alt="Fitness & Mind" />
//               <div className="podcast-info">
//                 <h3>Fitness & Mind</h3>
//                 <p>Physical and mental wellness</p>
//                 <span className="plays">6.1K plays</span>
//               </div>
//             </div>
//             <div className="podcast-card">
//               <img src="https://via.placeholder.com/300x200?text=Deep+Science" alt="Deep Science" />
//               <div className="podcast-info">
//                 <h3>Deep Science</h3>
//                 <p>In-depth scientific exploration</p>
//                 <span className="plays">8.4K plays</span>
//               </div>
//             </div>
//             <div className="podcast-card">
//               <img src="https://via.placeholder.com/300x200?text=History+Unveiled" alt="History Unveiled" />
//               <div className="podcast-info">
//                 <h3>History Unveiled</h3>
//                 <p>Fascinating historical stories</p>
//                 <span className="plays">10.0K plays</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 💬 Testimonials Section */}
//       <section className="testimonials-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>What Our Users Say</h2>
//             <p>Real stories from our amazing community</p>
//           </div>
//           <div className="testimonials-grid">
//             {testimonials.map((testimonial) => (
//               <div key={testimonial.id} className="testimonial-card">
//                 <FaQuoteLeft className="quote-icon" />
//                 <p className="testimonial-text">{testimonial.text}</p>
//                 <div className="testimonial-author">
//                   <img src={testimonial.image} alt={testimonial.name} />
//                   <div className="author-info">
//                     <h4>{testimonial.name}</h4>
//                     <p>{testimonial.role}</p>
//                     <div className="rating">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <FaStar key={i} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 📦 Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-section">
//               <h3>PodVibe</h3>
//               <p>Listen. Vibe. Connect.</p>
//             </div>
//             <div className="footer-section">
//               <h4>Quick Links</h4>
//               <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/categories">Categories</a></li>
//                 <li><a href="/upload">Upload Podcast</a></li>
//               </ul>
//             </div>
//             <div className="footer-section">
//               <h4>Support</h4>
//               <ul>
//                 <li><a href="/help">Help</a></li>
//                 <li><a href="/contact">Contact</a></li>
//               </ul>
//             </div>
//             <div className="footer-section">
//               <h4>Connect</h4>
//               <ul>
//                 <li><a href="/twitter">Twitter</a></li>
//                 <li><a href="/instagram">Instagram</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>&copy; 2024 PodVibe. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;


// _______________________________________________________________


// import React, { useState, useEffect } from "react";
// import {
//   FaHeadphones,
//   FaDownload,
//   FaGlobe,
//   FaShieldAlt,
//   FaClock,
//   FaThumbsUp,
//   FaStar,
//   FaQuoteLeft,
// } from "react-icons/fa";
// import HeroSlider from "../components/HeroSlider";
// import PodcastSection from "../components/PodcastSection";
// import TopicsSection from "../components/TopicsSection"; // ✅ Fixed: import added
// import api from "../api";
// import "../styles/Home.css";

// function Home() {
//   const [popularPodcasts, setPopularPodcasts] = useState([]);
//   const [topPicks, setTopPicks] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     fetchPodcasts();
//     setTestimonials([
//       {
//         id: 1,
//         name: "Sarah Johnson",
//         role: "Podcast Creator",
//         image: "https://via.placeholder.com/80x80/8A784E/FFFFFF?text=SJ",
//         text: "PodVibe has transformed how I connect with my audience...",
//         rating: 5,
//       },
//       {
//         id: 2,
//         name: "Mike Chen",
//         role: "Tech Enthusiast",
//         image: "https://via.placeholder.com/80x80/8A784E/FFFFFF?text=MC",
//         text: "I've discovered so many amazing podcasts here...",
//         rating: 5,
//       },
//       {
//         id: 3,
//         name: "Emma Davis",
//         role: "Business Coach",
//         image: "https://via.placeholder.com/80x80/8A784E/FFFFFF?text=ED",
//         text: "As a creator, PodVibe provides everything I need...",
//         rating: 5,
//       },
//     ]);
//   }, []);

//   const fetchPodcasts = async () => {
//     try {
//       const res = await api.get("/podcasts");
//       const all = res.data || [];
//       setPopularPodcasts(all.slice(0, 6));
//       setTopPicks(all.slice(6, 12));
//     } catch (err) {
//       console.error("Error fetching podcasts:", err);
//     }
//   };

//   return (
//     <div className="home-container">
//       <HeroSlider />

//       <div className="popular-wrapper">
        
      
//       <PodcastSection title="Popular on PodVibe" data={popularPodcasts} />
//        </div>

//       {/*  Top Picks */}
//       <PodcastSection title="Top Picks for You" data={topPicks} />

       
       
      

//       {/*  Topics Section */}
//       <TopicsSection />

//       {/*  Why Choose Us */}
//       <section className="why-choose-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>Why Choose PodVibe?</h2>
//             <p>Discover what makes us the ultimate podcast platform</p>
//           </div>
//           <div className="features-grid">
//             <div className="feature-card"><FaHeadphones /><h3>10K+ Podcasts</h3><p>Access to thousands of podcasts across all genres.</p></div>
//             <div className="feature-card"><FaDownload /><h3>Offline Listening</h3><p>Download your favorite episodes and listen anywhere.</p></div>
//             <div className="feature-card"><FaGlobe /><h3>Global Community</h3><p>Connect with podcast creators and listeners globally.</p></div>
//             <div className="feature-card"><FaShieldAlt /><h3>Secure Platform</h3><p>Your data is protected with top-level security.</p></div>
//             <div className="feature-card"><FaClock /><h3>Smart Recommendations</h3><p>AI suggests podcasts based on your taste.</p></div>
//             <div className="feature-card"><FaThumbsUp /><h3>Easy to Use</h3><p>User-friendly across all devices.</p></div>
//           </div>
//         </div>
//       </section>

//       {/*  Testimonials */}
//       <section className="testimonials-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>What Our Users Say</h2>
//             <p>Real stories from our amazing community</p>
//           </div>
//           <div className="testimonials-grid">
//             {testimonials.map((testimonial) => (
//               <div key={testimonial.id} className="testimonial-card">
//                 <FaQuoteLeft className="quote-icon" />
//                 <p className="testimonial-text">{testimonial.text}</p>
//                 <div className="testimonial-author">
//                   <img src={testimonial.image} alt={testimonial.name} />
//                   <div className="author-info">
//                     <h4>{testimonial.name}</h4>
//                     <p>{testimonial.role}</p>
//                     <div className="rating">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <FaStar key={i} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/*  Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-section">
//               <h3>PodVibe</h3>
//               <p>Listen. Vibe. Connect.</p>
//             </div>
//             <div className="footer-section">
//               <h4>Quick Links</h4>
//               <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/categories">Categories</a></li>
//                 <li><a href="/upload">Upload Podcast</a></li>
//               </ul>
//             </div>
//             <div className="footer-section">
//               <h4>Support</h4>
//               <ul>
//                 <li><a href="/help">Help</a></li>
//                 <li><a href="/contact">Contact</a></li>
//               </ul>
//             </div>
//             <div className="footer-section">
//               <h4>Connect</h4>
//               <ul>
//                 <li><a href="/twitter">Twitter</a></li>
//                 <li><a href="/instagram">Instagram</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>&copy; 2024 PodVibe. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;





import React, { useState, useEffect } from "react";
import {
  FaHeadphones,
  FaDownload,
  FaGlobe,
  FaShieldAlt,
  FaClock,
  FaThumbsUp,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

import HeroSlider from "../components/HeroSlider";
import PodcastSection from "../components/PodcastSection";
import TopicsSection from "../components/TopicsSection";
import EasySteps from "../components/EasySteps"; // ✅ New Section
import TopPodcasts from "../components/TopPodcasts";
import Podcasters from "../components/Podcasters"; 
import BecomePodcaster from "../components/BecomePodcaster";
import Footer from "../components/Footer";
import api from "../api";
import "../styles/Home.css";

function Home() {
  const [popularPodcasts, setPopularPodcasts] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchPodcasts();
    setTestimonials([
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Podcast Creator",
        image: "https://via.placeholder.com/80x80/8A784E/FFFFFF?text=SJ",
        text: "PodVibe has transformed how I connect with my audience...",
        rating: 5,
      },
      {
        id: 2,
        name: "Mike Chen",
        role: "Tech Enthusiast",
        image: "https://via.placeholder.com/80x80/8A784E/FFFFFF?text=MC",
        text: "I've discovered so many amazing podcasts here...",
        rating: 5,
      },
      {
        id: 3,
        name: "Emma Davis",
        role: "Business Coach",
        image: "https://via.placeholder.com/80x80/8A784E/FFFFFF?text=ED",
        text: "As a creator, PodVibe provides everything I need...",
        rating: 5,
      },
    ]);
  }, []);

  const fetchPodcasts = async () => {
    try {
      const res = await api.get("/podcasts");
      const all = res.data || [];
      setPopularPodcasts(all.slice(0, 6));
      setTopPicks(all.slice(6, 12));
    } catch (err) {
      console.error("Error fetching podcasts:", err);
    }
  };

  return (
    <div className="home-container">
      <HeroSlider />

      <div className="popular-wrapper">
        <PodcastSection title="Popular on PodVibe" data={popularPodcasts} />
      </div>

      <PodcastSection title="Top Picks for You" data={topPicks} />

      



      {/* ✅ Easy Steps Section */}
      <EasySteps />

      <TopicsSection />

      <TopPodcasts />

      <Podcasters />
     

       <BecomePodcaster />

      {/* ✅ Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose PodVibe?</h2>
            <p>Discover what makes us the ultimate podcast platform</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <FaHeadphones />
              <h3>10K+ Podcasts</h3>
              <p>Access to thousands of podcasts across all genres.</p>
            </div>
            <div className="feature-card">
              <FaDownload />
              <h3>Offline Listening</h3>
              <p>Download your favorite episodes and listen anywhere.</p>
            </div>
            <div className="feature-card">
              <FaGlobe />
              <h3>Global Community</h3>
              <p>Connect with podcast creators and listeners globally.</p>
            </div>
            <div className="feature-card">
              <FaShieldAlt />
              <h3>Secure Platform</h3>
              <p>Your data is protected with top-level security.</p>
            </div>
            <div className="feature-card">
              <FaClock />
              <h3>Smart Recommendations</h3>
              <p>AI suggests podcasts based on your taste.</p>
            </div>
            <div className="feature-card">
              <FaThumbsUp />
              <h3>Easy to Use</h3>
              <p>User-friendly across all devices.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ✅ Testimonials
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Users Say</h2>
            <p>Real stories from our amazing community</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ✅ Footer */}
      {/* <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>PodVibe</h3>
              <p>Listen. Vibe. Connect.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/upload">Upload Podcast</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="/help">Help</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="/twitter">Twitter</a></li>
                <li><a href="/instagram">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 PodVibe. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default Home;




