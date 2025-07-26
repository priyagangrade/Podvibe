import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/EditPodcast.css";

export default function EditPodcast() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchPodcast();
  }, []);

  const fetchPodcast = async () => {
    try {
      const { data } = await api.get(`/podcasts/${id}`);
      setPodcast(data);
    } catch (err) {
      console.error("Failed to fetch podcast:", err.message);
      alert("Unable to load podcast.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPodcast((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      await api.put(`/podcasts/${id}`, podcast);
      alert("Podcast updated successfully.");
      navigate(-1); // Go back
    } catch (err) {
      console.error("Update failed:", err.message);
      alert("Update failed.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="edit-podcast-page">Loading...</div>;
  if (!podcast)
    return <div className="edit-podcast-page">Podcast not found.</div>;

  return (
    <div className="edit-podcast-page">
      <h2>Edit Podcast</h2>
      <form onSubmit={handleSubmit} className="edit-podcast-form">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={podcast.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={podcast.description}
          onChange={handleChange}
          required
        />

        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={podcast.image || ""}
          onChange={handleChange}
        />

        <label>Audio URL</label>
        <input
          type="text"
          name="audioUrl"
          value={podcast.audioUrl || ""}
          onChange={handleChange}
        />

        <button type="submit" disabled={updating}>
          {updating ? "Updating..." : "Update Podcast"}
        </button>
      </form>
    </div>
  );
}
