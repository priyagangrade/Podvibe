
// import React, { useState } from "react";
// import "../styles/HelpCenter.css";
// import { FiHelpCircle } from "react-icons/fi";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// const faqs = [
//   {
//     question: "How do I upload a podcast?",
//     answer: "You can upload a podcast from the Upload section after signing in. Fill in the details and click submit."
//   },
//   {
//     question: "Can I earn from my podcasts?",
//     answer: "Yes! Once you have 500+ followers, you'll be eligible for monetization and can track earnings from your profile."
//   },
//   {
//     question: "How can I reset my password?",
//     answer: "Click on 'Forgot Password' on the sign-in page and follow the steps to reset your password via email."
//   },
// ];

// function HelpCenter() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="help-page">
//       <div className="help-overlay" />
//       <div className="help-content">
//         <div className="help-header">
//           <FiHelpCircle className="help-icon" />
//           <h1>How can we help?</h1>
//           <p>Find answers to the most common questions about PodVibe.</p>
//         </div>

//         <div className="faq-section">
//           {faqs.map((item, index) => (
//             <div
//               key={index}
//               className={`faq-card ${activeIndex === index ? "active" : ""}`}
//               onClick={() => toggleFAQ(index)}
//             >
//               <div className="faq-question">
//                 <span className="question-text">{item.question}</span>
//                 <span className={`toggle-icon ${activeIndex === index ? "rotate" : ""}`}>
//                   {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
//                 </span>
//               </div>
//               {activeIndex === index && (
//                 <div className="faq-answer">{item.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="contact-box">
//           <h3>Still need help?</h3>
//           <p>We’re just one message away. Contact our team anytime.</p>
//           <a href="/contact" className="contact-btn">Contact Support</a>
//         </div>
//       </div>
//     </div>



 
    


//   );
// }

// export default HelpCenter;





import React, { useState } from "react";
import "../styles/HelpCenter.css";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqs = [
  {
    question: "How do I upload a podcast?",
    answer: "You can upload a podcast from the Upload section after signing in. Fill in the details and click submit."
  },
  {
    question: "Can I earn from my podcasts?",
    answer: "Yes! Once you have 500+ followers, you'll be eligible for monetization and can track earnings from your profile."
  },
  {
    question: "How can I reset my password?",
    answer: "Click on 'Forgot Password' on the sign-in page and follow the steps to reset your password via email."
  },
];

function HelpCenter() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="help-page">
        <div className="help-overlay" />
        <div className="help-content">
          <div className="help-header">
            <FiHelpCircle className="help-icon" />
            <h1>How can we help?</h1>
            <p>Find answers to the most common questions about PodVibe.</p>
          </div>

          <div className="faq-section">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-card ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span className="question-text">{item.question}</span>
                  <span className={`toggle-icon ${activeIndex === index ? "rotate" : ""}`}>
                    {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="contact-box">
            <h3>Still need help?</h3>
            <p>We’re just one message away. Contact our team anytime.</p>
            <a href="/contact" className="contact-btn">Contact Support</a>
          </div>
        </div>
      </div>

      {/* 🔻 Footer starts here */}
      <footer className="help-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>🎧 PodVibe</h2>
            <p> your home for all podcasts</p>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/categories">Categories</a>
            <a href="/contact">Contact</a>
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

export default HelpCenter;
