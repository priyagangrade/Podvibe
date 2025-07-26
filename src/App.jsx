import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./components/CategoriesSimple";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UploadPodcast from "./pages/UploadPodcast";
import PodcastDetails from "./pages/PodcastDetails";
import EditPodcast from "./components/EditPodcast";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import TermsPrivacy from "./pages/TermsPrivacy";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsPrivacy />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/podcast/:id" element={<PodcastDetails />} />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadPodcast />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-podcast/:id"
          element={
            <ProtectedRoute>
              <EditPodcast />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
