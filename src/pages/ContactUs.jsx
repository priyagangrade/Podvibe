// import React from "react";
// import "../styles/ContactUs.css";
// import { FiMail } from "react-icons/fi";

// function ContactUs() {
//   return (
//     <>
//       <div className="contact-page">
//         <div className="contact-overlay" />
//         <div className="contact-content">
//           <div className="contact-header">
//             <FiMail className="contact-icon" />
//             <h1>Get in Touch</h1>
//             <p>We're here to help. Feel free to reach out with any questions or feedback.</p>
//           </div>

//           <form className="contact-form">
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <textarea placeholder="Your Message" rows="5" required></textarea>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="help-footer">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <h2>🎧 PodVibe</h2>
//             <p>Your home for all podcasts</p>
//           </div>

//           <div className="footer-links">
//             <a href="/">Home</a>
//             <a href="/podcasts">Podcasts</a>
//             <a href="/help">Help Center</a>
//             <a href="/terms">Terms & Privacy</a>
//           </div>

//           <div className="footer-bottom">
//             <p>© {new Date().getFullYear()} PodVibe. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default ContactUs;




// import React, { useState, useEffect } from "react";
// import "../styles/ContactUs.css";
// import { FiMail } from "react-icons/fi";

// function ContactUs() {
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSuccess(true);
//     e.target.reset();

//     // Auto hide after 3 seconds
//     setTimeout(() => setSuccess(false), 3000);
//   };

//   return (
//     <>
//       <div className="contact-page">
//         <div className="contact-overlay" />
//         <div className="contact-content">
//           <div className="contact-header">
//             <FiMail className="contact-icon" />
//             <h1>Get in Touch</h1>
//             <p>We're here to help. Feel free to reach out with any questions or feedback.</p>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <textarea placeholder="Your Message" rows="5" required></textarea>
//             <button type="submit">Send Message</button>
//           </form>

//           {success && (
//             <p className="success-message">✅ Message sent successfully!</p>
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="help-footer">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <h2>🎧 PodVibe</h2>
//             <p>Your home for all podcasts</p>
//           </div>

//           <div className="footer-links">
//             <a href="/">Home</a>
//             <a href="/podcasts">Podcasts</a>
//             <a href="/help">Help Center</a>
//             <a href="/terms">Terms & Privacy</a>
//           </div>

//           <div className="footer-bottom">
//             <p>© {new Date().getFullYear()} PodVibe. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default ContactUs;


// _____________________________________________________________

// import React, { useState, useEffect } from "react";
// import "../styles/ContactUs.css";
// import { FiMail } from "react-icons/fi";

// function ContactUs() {
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSuccess(true);
//     e.target.reset();
//     setTimeout(() => setSuccess(false), 3000);
//   };

//   return (
//     <>
//       <div className="contact-page-grid">
//         {/* Left Image Section */}
//         <div className="contact-image-section">
//           <img src="/images/help.jpg" alt="Contact Support" />
//         </div>

//         {/* Right Form Section */}
//         <div className="contact-form-section">
//           <div className="contact-header">
//             <FiMail className="contact-icon" />
//             <h1>Get in Touch</h1>
//             <p>We're here to help. Feel free to reach out with any questions or feedback.</p>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <textarea placeholder="Your Message" rows="5" required></textarea>
//             <button type="submit">Send Message</button>
//           </form>

//           {success && (
//             <p className="success-message">✅ Message sent successfully!</p>
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="help-footer">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <h2>🎧 PodVibe</h2>
//             <p>Your home for all podcasts</p>
//           </div>

//           <div className="footer-links">
//             <a href="/">Home</a>
//             <a href="/podcasts">Podcasts</a>
//             <a href="/help">Help Center</a>
//             <a href="/terms">Terms & Privacy</a>
//           </div>

//           <div className="footer-bottom">
//             <p>© {new Date().getFullYear()} PodVibe. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default ContactUs;




// _______________________________

import React, { useState } from "react";
import "../styles/ContactUs.css";
import { FiMail, FiPhone } from "react-icons/fi";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.target.reset();
  };

  return (
    <>
      <div className="contact-wrapper">
        {/* Left section */}
        <div className="contact-left">
          <img src="/images/help7.jpg" alt="Contact" className="top-image" />
          <div className="left-text">
            <h2>Contact Us</h2>
            <p>
              Not sure what you need? The PodVibe team is happy to help you and
              suggest podcast ideas or solutions.
            </p>
            <div className="info-item">
              <FiMail /> info@podvibe.com
            </div>
            <div className="info-item">
              <FiPhone /> (+91) 98765 43210
            </div>
          </div>
        </div>

        {/* Right Form section */}
        <div className="contact-form-container">
          <div className="form-header">
            <h1 className="small-heading">Get in touch</h1>
            <h3>We’d love to hear from you! Let’s get in touch</h3>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Company" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Phone Number" />
            </div>
            <input type="text" placeholder="Address" />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
            {submitted && (
              <p className="success-msg">✅ Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>🎧 PodVibe</h2>
            <p>Your home for all the available podcasts</p>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/categories">Categories</a>
            <a href="/help">Help Center</a>
            <a href="/terms">Terms & Privacy</a>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PodVibe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ContactUs;





