// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import "../styles/UploadPodcast.css";

// const API_BASE = "http://localhost:5000/api";

// const UploadPodcast = () => {
//   const { token } = useAuth();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [audio, setAudio] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");
//   const [podcasts, setPodcasts] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`${API_BASE}/categories`)
//       .then((res) => setCategories(res.data))
//       .catch(() => setCategories([]));
//   }, []);

//   useEffect(() => {
//     axios
//       .get(`${API_BASE}/podcasts`)
//       .then((res) =>
//         setPodcasts(res.data.map((p) => ({ ...p, showFull: false })))
//       )
//       .catch(() => setPodcasts([]));
//   }, [success]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setUploading(true);
//     setSuccess("");
//     setError("");
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("category", category);
//       formData.append("audio", audio);
//       await axios.post(`${API_BASE}/podcasts`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setSuccess("Podcast uploaded successfully!");
//       setTitle("");
//       setDescription("");
//       setCategory("");
//       setAudio(null);
//       setShowForm(false);
//     } catch (err) {
//       console.error("Upload error:", err.response?.data || err.message);
//       setError("Failed to upload podcast. Please try again.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const toggleDescription = (id) => {
//     setPodcasts((prev) =>
//       prev.map((p) =>
//         p._id === id ? { ...p, showFull: !p.showFull } : p
//       )
//     );
//   };

//   return (
//     <div className="upload-podcast-container">
//       <h2 className="upload-heading">🎙️ All Uploaded Podcasts</h2>

//       <div className="podcast-grid">
//         {podcasts.length === 0 && <p>No podcasts uploaded yet.</p>}
//         {podcasts.map((podcast) => (
//           <div className="podcast-card fancy" key={podcast._id}>
//             <img
//               src={podcast.image || "/images/karn.jpg"}
//               alt={podcast.title}
//               className="podcast-thumbnail"
//             />
//             <div className="card-content">
//               <h3>{podcast.title}</h3>
//               <p>
//                 {podcast.showFull
//                   ? podcast.description
//                   : podcast.description.slice(0, 80) + "..."}
//               </p>
//               {podcast.description.length > 80 && (
//                 <button
//                   className="show-toggle-btn"
//                   onClick={() => toggleDescription(podcast._id)}
//                 >
//                   {podcast.showFull ? "Show Less" : "Show More"}
//                 </button>
//               )}
//               <span className="category-pill">
//                 {podcast.category?.name || "General"}
//               </span>
//               <audio controls src={podcast.audioUrl}></audio>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         className="upload-toggle-btn"
//         onClick={() => setShowForm(!showForm)}
//       >
//         {showForm ? "Hide Upload Form" : "Upload New Podcast"}
//       </button>

//       <form
//         onSubmit={handleSubmit}
//         className={`upload-form ${showForm ? "show" : ""}`}
//       >
//         <input
//           type="text"
//           placeholder="Podcast Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//           rows={3}
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           required
//         >
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat.name}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="file"
//           accept="audio/*"
//           onChange={(e) => setAudio(e.target.files[0])}
//           required
//         />
//         <button type="submit" disabled={uploading}>
//           {uploading ? "Uploading..." : "Upload Podcast"}
//         </button>
//         {success && (
//           <div className="message" style={{ color: "green" }}>
//             {success}
//           </div>
//         )}
//         {error && (
//           <div className="message" style={{ color: "red" }}>{error}</div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default UploadPodcast;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../styles/UploadPodcast.css";

const API_BASE = "http://localhost:5000/api";

const UploadPodcast = () => {
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [audio, setAudio] = useState(null);
  const [image, setImage] = useState(null); // ✅ NEW state
  const [categories, setCategories] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [podcasts, setPodcasts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_BASE}/categories`)
      .then((res) => setCategories(res.data))
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_BASE}/podcasts`)
      .then((res) =>
        setPodcasts(res.data.map((p) => ({ ...p, showFull: false })))
      )
      .catch(() => setPodcasts([]));
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("audio", audio);
      formData.append("image", image); // ✅ send image to backend

      await axios.post(`${API_BASE}/podcasts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess("Podcast uploaded successfully!");
      setTitle("");
      setDescription("");
      setCategory("");
      setAudio(null);
      setImage(null); // ✅ reset image
      setShowForm(false);
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      setError("Failed to upload podcast. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const toggleDescription = (id) => {
    setPodcasts((prev) =>
      prev.map((p) =>
        p._id === id ? { ...p, showFull: !p.showFull } : p
      )
    );
  };

  return (
    <div className="upload-podcast-container">
      <h2 className="upload-heading">🎙️ All Uploaded Podcasts</h2>

      <div className="podcast-grid">
        {podcasts.length === 0 && <p>No podcasts uploaded yet.</p>}
        {podcasts.map((podcast) => (
          <div className="podcast-card fancy" key={podcast._id}>
            {/* <img
              src={
                podcast.image
                  ? `http://localhost:5000/uploads/${podcast.image}`
                  : "/images/karn.jpg"
              }
              alt={podcast.title}
              className="podcast-thumbnail"
            /> */}

            <img
              src={
                podcast.image?.startsWith("http")
                  ? podcast.image
                  : `http://localhost:5000/uploads/${podcast.image}`
              }
              alt={podcast.title}
              className="podcast-thumbnail"
            />


            <div className="card-content">
              <h3>{podcast.title}</h3>
              <p>
                {podcast.showFull
                  ? podcast.description
                  : podcast.description.slice(0, 80) + "..."}
              </p>
              {podcast.description.length > 80 && (
                <button
                  className="show-toggle-btn"
                  onClick={() => toggleDescription(podcast._id)}
                >
                  {podcast.showFull ? "Show Less" : "Show More"}
                </button>
              )}
              <span className="category-pill">
                {podcast.category?.name || "General"}
              </span>
              <audio controls src={podcast.audioUrl}></audio>
            </div>
          </div>
        ))}
      </div>

      <button
        className="upload-toggle-btn"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Upload Form" : "Upload New Podcast"}
      </button>

      <form
        onSubmit={handleSubmit}
        className={`upload-form ${showForm ? "show" : ""}`}
      >
        <input
          type="text"
          placeholder="Podcast Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setAudio(e.target.files[0])}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        /> {/* ✅ Image input */}
        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Podcast"}
        </button>
        {success && (
          <div className="message" style={{ color: "green" }}>
            {success}
          </div>
        )}
        {error && (
          <div className="message" style={{ color: "red" }}>{error}</div>
        )}
      </form>
    </div>
  );
};

export default UploadPodcast;
