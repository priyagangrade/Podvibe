// UploadPodcast.jsx
// import React, { useState, useEffect } from "react";
// import api from "../api";
// import { useNavigate } from "react-router-dom";

// const UploadPodcast = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [audio, setAudio] = useState(null);
//   const [image, setImage] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [podcasts, setPodcasts] = useState([]);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     api.get("/categories").then((res) => setCategories(res.data));
//     api.get("/podcasts").then((res) => setPodcasts(res.data));
//   }, [success]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("audio", audio);
//     if (image) formData.append("image", image);

//     try {
//       await api.post("/podcasts", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setSuccess("Podcast uploaded!");
//       setTitle("");
//       setDescription("");
//       setCategory("");
//       setAudio(null);
//       setImage(null);
//     } catch (err) {
//       console.error(err);
//       setError("Upload failed!");
//     }
//   };

//   return (
//     <div className="upload-page">
//       <form className="upload-form" onSubmit={handleSubmit}>
//         <h2>Upload Podcast</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           required
//         >
//           <option value="">Select Category</option>
//           {categories.map((c) => (
//             <option key={c._id} value={c._id}>
//               {c.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//         />
//         <input
//           type="file"
//           accept="audio/*"
//           onChange={(e) => setAudio(e.target.files[0])}
//           required
//         />
//         <button type="submit">Upload</button>
//         {success && <p className="success">{success}</p>}
//         {error && <p className="error">{error}</p>}
//       </form>

//       <div className="podcast-grid">
//         {podcasts.map((podcast) => (
//           <div className="podcast-card" key={podcast._id}>
//             <img
//               src={podcast.image}
//               alt={podcast.title}
//               className="card-image"
//             />
//             <h4>{podcast.title}</h4>
//             <p>
//               {podcast.description.slice(0, 60)}...
//               <button
//                 className="more-btn"
//                 onClick={() => navigate(`/podcast/${podcast._id}`)}
//               >
//                 More
//               </button>
//             </p>
//             <audio controls src={podcast.audioUrl}></audio>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UploadPodcast;



// ________________________________________________________________________



// import React, { useState, useEffect } from "react";
// import api from "../api";
// import { useNavigate } from "react-router-dom";
// import "../styles/UploadPodcast.css";

// const UploadPodcast = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [audio, setAudio] = useState(null);
//   const [image, setImage] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [podcasts, setPodcasts] = useState([]);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     api.get("/categories").then((res) => setCategories(res.data));
//     api.get("/podcasts").then((res) => setPodcasts(res.data));
//   }, [success]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("audio", audio);
//     if (image) formData.append("image", image);

//     try {
//       await api.post("/podcasts", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setSuccess("🎉 Podcast uploaded!");
//       setTitle("");
//       setDescription("");
//       setCategory("");
//       setAudio(null);
//       setImage(null);
//     } catch (err) {
//       console.error(err);
//       setError("Upload failed!");
//     }
//   };

//   return (
//     <div className="upload-page">
//       <form className="upload-form" onSubmit={handleSubmit}>
//         <h2>🎙️ Upload Your Podcast</h2>

//         <input
//           type="text"
//           placeholder="Podcast Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         <textarea
//           placeholder="Short Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           required
//         >
//           <option value="">Select Category</option>
//           {categories.map((c) => (
//             <option key={c._id} value={c._id}>
//               {c.name}
//             </option>
//           ))}
//         </select>

//         <label className="file-label">🎨 Cover Image (optional)</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//         />

//         <label className="file-label">🎧 Audio File</label>
//         <input
//           type="file"
//           accept="audio/*"
//           onChange={(e) => setAudio(e.target.files[0])}
//           required
//         />

//         <button type="submit">🚀 Upload Podcast</button>
//         {success && <p className="success-msg">{success}</p>}
//         {error && <p className="error-msg">{error}</p>}
//       </form>

//       <div className="podcast-grid">
//         {podcasts.map((podcast) => (
//           <div className="podcast-card" key={podcast._id}>
//             <img
//               src={podcast.image}
//               alt={podcast.title}
//               className="card-image"
//             />
//             <div className="card-body">
//               <h4>{podcast.title}</h4>
//               <p>
//                 {podcast.description.slice(0, 60)}...
//                 <button
//                   className="more-btn"
//                   onClick={() => navigate(`/podcast/${podcast._id}`)}
//                 >
//                   More
//                 </button>
//               </p>
//               <audio controls src={podcast.audioUrl}></audio>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UploadPodcast;
