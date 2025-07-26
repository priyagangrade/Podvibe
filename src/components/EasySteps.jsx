// import React from "react";
// import "../styles/EasySteps.css";

// function EasySteps() {
//   return (
//     <section className="easy-steps-dribble">
//       <div className="easy-steps-grid container">
//         {/* LEFT SIDE: Steps */}
//         <div className="steps-left">
//           <h2>Easy Steps to Start <span>🎙️</span></h2>
//           <p>
//             Launch your podcast in simple steps — plan, record, edit, publish, and grow your audience effortlessly! 🚀🎧
//           </p>

//           <div className="step-item">
//             <div className="step-number">01</div>
//             <div className="step-content">
//               <h4>Sign Up</h4>
//               <p>Sign up now to get exclusive updates, early access, and special podcast content! 📨</p>
//             </div>
//           </div>

//           <div className="step-item">
//             <div className="step-number">02</div>
//             <div className="step-content">
//               <h4>Record Your First Episode</h4>
//               <p>Find a quiet space, use a script, and speak naturally. 🎤</p>
//             </div>
//           </div>

//           <div className="step-item">
//             <div className="step-number">03</div>
//             <div className="step-content">
//               <h4>Publish & Distribute</h4>
//               <p>Upload, host, and share your podcast across platforms. 🌍</p>
//             </div>
//           </div>

//           <div className="step-item">
//             <div className="step-number">04</div>
//             <div className="step-content">
//               <h4>Promote & Grow</h4>
//               <p>Share episodes, engage listeners, and grow your community. 📈</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Images */}
//         <div className="steps-right">
//           <img src="/images/human.avif" alt="brain" className="step-img rounded" />
//           <img src="/images/image.png" alt="headphones" className="step-img" />
//           <img src="/images/signup1.jpg" alt="music boom" className="step-img" />
//           <img src="/images/signup2.jpg" alt="woman" className="step-img rounded" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default EasySteps;




// __________________________________________________________________________________________________________


import React from "react";
import "../styles/EasySteps.css";

function EasySteps() {
  return (
    <section className="easy-steps-section">
      <div className="container steps-layout">
        {/* Left: Steps */}
        <div className="steps-content">
           <h2 className="s">Easy Steps to Start Your Podcast 🎙️</h2>
          <div className="section-header">
           
            <p>
              Launch your podcast in simple steps—plan, record, edit, publish,
              and grow your audience effortlessly!
            </p>
          </div>

          <div className="steps-container">
            {[
              {
                number: "01",
                title: "Sign Up",
                text: "Get exclusive access to share your voice with the world.",
              },
              {
                number: "02",
                title: "Record",
                text: "Use any device to capture your podcast idea effortlessly.",
              },
              {
                number: "03",
                title: "Publish",
                text: "Upload and go live on PodVibe instantly.",
              },
              {
                number: "04",
                title: "Promote",
                text: "Engage your audience & grow your reach globally.",
              },
            ].map((step, index) => (
              <div className="step-item" key={index}>
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Images */}
        <div className="steps-images">
          <img src="/images/human.avif" alt="Podcast 1" className="step-img img-shape1" />
          <img src="/images/image.png" alt="Podcast 2" className="step-img img-shape2" />
          <img src="/images/signup1.jpg" alt="Podcast 3" className="step-img img-shape3" />
          <img src="/images/signup3.jpeg" alt="Podcast 4" className="step-img img-shape4" />
        </div>
      </div>
    </section>
  );
}

export default EasySteps;




// _______________________________________________________________________





