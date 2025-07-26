// import React from "react";
// import "../styles/TermsPrivacy.css";

// function TermsPrivacy() {
//   return (
//     <div className="terms-container">
//       <div className="terms-header">
//         <h1>Terms & Privacy Policy</h1>
//         <p>Understand our policies before using PodVibe.</p>
//       </div>

//       <div className="terms-section">
//         <h2>📜 Terms of Use</h2>
//         <p>
//           By accessing or using PodVibe, you agree to be bound by these terms.
//           You may not use our platform for any unlawful or prohibited purpose.
//           We reserve the right to suspend or terminate your access if you violate
//           any terms.
//         </p>
//         <p>
//           Content uploaded must follow our community guidelines. PodVibe is not
//           liable for content uploaded by users.
//         </p>
//       </div>

//       <div className="privacy-section">
//         <h2>🔐 Privacy Policy</h2>
//         <p>
//           Your privacy is important to us. We collect minimal personal
//           information necessary to provide and improve our services.
//         </p>
//         <p>
//           We never share your data with third parties without your consent. Data
//           is securely stored and encrypted where necessary.
//         </p>
//         <p>
//           You can update or delete your account and associated data anytime from
//           your profile settings.
//         </p>
//       </div>

//       <div className="terms-footer">
//         <p>© {new Date().getFullYear()} PodVibe. All rights reserved.</p>
//       </div>
//     </div>
//   );
// }

// export default TermsPrivacy;



import React from "react";
import "../styles/TermsPrivacy.css";

function TermsPrivacy() {
  return (
    <>
      <div className="terms-container">
        <div className="terms-header">
          <h1>Terms & Privacy Policy</h1>
          <p>Understand our policies before using PodVibe.</p>
        </div>

        <div className="terms-section">
          <h2>📜 Terms of Use</h2>
          <p>
            By accessing or using PodVibe, you agree to be bound by these terms.
            You may not use our platform for any unlawful or prohibited purpose.
            We reserve the right to suspend or terminate your access if you violate
            any terms.
          </p>
          <p>
            Content uploaded must follow our community guidelines. PodVibe is not
            liable for content uploaded by users.
          </p>
        </div>

        <div className="privacy-section">
          <h2>🔐 Privacy Policy</h2>
          <p>
            Your privacy is important to us. We collect minimal personal
            information necessary to provide and improve our services.
          </p>
          <p>
            We never share your data with third parties without your consent. Data
            is securely stored and encrypted where necessary.
          </p>
          <p>
            You can update or delete your account and associated data anytime from
            your profile settings.
          </p>
        </div>
      </div>

      {/* ✅ Footer added below */}
      <footer className="help-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>🎧 PodVibe</h2>
            <p>Your home for all the available podcasts</p>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/podcasts">Podcasts</a>
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

export default TermsPrivacy;



