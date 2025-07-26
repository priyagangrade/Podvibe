// src/components/GoogleButton.jsx
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ onClick }) {
  return (
    <button onClick={onClick} className="google-btn">
      <FcGoogle size={24} style={{ marginRight: "10px" }} />
      Sign in with Google
    </button>
  );
}
