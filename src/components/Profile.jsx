import React, { useEffect, useState } from "react";
import api from "../api";
import "../styles/Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/users/profile");
        setUser(res.data);
        setFormData({ name: res.data.name, email: res.data.email });
        if (res.data.avatar) setPreview(res.data.avatar);
        const pod = await api.get("/podcasts/my");
        setPodcasts(pod.data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      if (avatar) form.append("avatar", avatar);

      const res = await api.put("/users/profile", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Profile updated!");
      setUser(res.data);
    } catch (err) {
      alert("Update failed: " + err.response?.data?.message || err.message);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="profile-container">Loading...</div>;

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="avatar-section">
          <img
            src={preview || "https://www.gravatar.com/avatar/?d=mp"}
            alt="Avatar"
            className="avatar-preview"
          />
          <input type="file" onChange={handleAvatar} accept="image/*" />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={updating}>
          {updating ? "Updating..." : "Update Profile"}
        </button>
      </form>

      <div className="uploaded-podcasts">
        <h3>My Uploaded Podcasts</h3>
        {podcasts.length === 0 ? (
          <p>No podcasts uploaded yet.</p>
        ) : (
          <ul>
            {podcasts.map((pod) => (
              <li key={pod._id}>
                <strong>{pod.title}</strong> – {pod.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
