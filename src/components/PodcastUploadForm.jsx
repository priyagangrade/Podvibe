// src/components/PodcastUploadForm.jsx
import React, { useState } from "react";
import "../styles/UploadPodcast.css";
import axios from "axios";

function PodcastUploadForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    audioFile: null,
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "audioFile" || name === "thumbnail") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadData = new FormData();
      uploadData.append("title", formData.title);
      uploadData.append("description", formData.description);
      uploadData.append("category", formData.category);
      uploadData.append("audio", formData.audioFile);
      uploadData.append("thumbnail", formData.thumbnail);

      const response = await axios.post(
        "http://localhost:5000/api/podcasts/upload",
        uploadData
      );

      alert("Podcast uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload podcast.");
    }
  };

  return (
    <form className="podcast-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Podcast Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Podcast Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category (e.g., Music, Education)"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <label>Upload Audio File:</label>
      <input type="file" name="audioFile" accept="audio/*" onChange={handleChange} required />

      <label>Upload Thumbnail Image:</label>
      <input type="file" name="thumbnail" accept="image/*" onChange={handleChange} required />

      <button type="submit">Upload Podcast</button>
    </form>
  );
}

export default PodcastUploadForm;

