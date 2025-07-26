// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import PodcastCard from "./PodcastCard1";
// import {
//   FaMusic,
//   FaBook,
//   FaGamepad,
//   FaFilm,
//   FaLaugh,
//   FaGraduationCap,
//   FaHeart,
//   FaGlobe,
//   FaLightbulb,
//   FaRunning,
// } from "react-icons/fa";
// import api from "../api";
// import "../styles/Categories.css";

// const categoryIcons = {
//   Music: <FaMusic />,
//   Education: <FaGraduationCap />,
//   Entertainment: <FaFilm />,
//   Comedy: <FaLaugh />,
//   Gaming: <FaGamepad />,
//   Books: <FaBook />,
//   Health: <FaHeart />,
//   Technology: <FaLightbulb />,
//   Sports: <FaRunning />,
//   News: <FaGlobe />,
// };

// const categoryColors = [
//   "#FF6B6B",
//   "#4ECDC4",
//   "#FFD93D",
//   "#FF8B94",
//   "#6C5CE7",
//   "#A8E6CF",
//   "#FF9F1C",
//   "#2EC4B6",
//   "#E63946",
//   "#457B9D",
// ];

// export default function CategoriesSimple() {
//   const [categories, setCategories] = useState([]);
//   const [podcasts, setPodcasts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [podcastsLoading, setPodcastsLoading] = useState(false);
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [adding, setAdding] = useState(false);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fallbackCategories = [
//     { name: "Technology" },
//     { name: "Music" },
//     { name: "Education" },
//     { name: "Entertainment" },
//   ];

//   const fetchCategories = async () => {
//     try {
//       const response = await api.get("/categories");
//       if (response.data.length === 0) throw new Error("No categories in DB");
//       setCategories(response.data);
//     } catch (error) {
//       console.error("Fetch failed:", error.message);
//       try {
//         const inserted = [];
//         for (const cat of fallbackCategories) {
//           try {
//             const res = await api.post("/categories", cat);
//             inserted.push(res.data);
//           } catch (innerErr) {
//             if (innerErr.response?.status === 400) {
//               const { data } = await api.get("/categories");
//               setCategories(data);
//               return;
//             }
//           }
//         }
//         setCategories(inserted);
//       } catch (insertErr) {
//         setCategories(
//           fallbackCategories.map((cat, idx) => ({
//             _id: String(idx + 1),
//             ...cat,
//           }))
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   /*Update and Delete Category */
//   const handleUpdateCategory = async (id, newName) => {
//     try {
//       await api.put(`/categories/${id}`, { name: newName });
//       fetchCategories(); // Refresh the list
//     } catch (error) {
//       alert(
//         "Failed to update category: " +
//           (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   const handleDeleteCategory = async (id) => {
//     try {
//       await api.delete(`/categories/${id}`);
//       setCategories(categories.filter((cat) => cat._id !== id));
//     } catch (error) {
//       alert(
//         "Failed to delete category: " +
//           (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   const fetchPodcastsByCategory = async (categoryId) => {
//     setPodcastsLoading(true);
//     try {
//       const response = await api.get(`/podcasts/category/${categoryId}`);
//       setPodcasts(response.data);
//       setSelectedCategory(categoryId);
//     } catch (error) {
//       console.error("Error fetching podcasts:", error.message);
//       setPodcasts([]);
//     } finally {
//       setPodcastsLoading(false);
//     }
//   };

//   const handleAddCategory = async (e) => {
//     e.preventDefault();
//     if (!newCategoryName.trim()) return;

//     setAdding(true);
//     try {
//       await api.post("/categories", { name: newCategoryName });
//       setNewCategoryName("");
//       fetchCategories();
//     } catch (err) {
//       alert(
//         "Error adding category: " + (err.response?.data?.message || err.message)
//       );
//     } finally {
//       setAdding(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="categories-container">
//         <div className="loading">Loading categories...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="categories-container">
//       <motion.div
//         className="categories-header"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1>Explore Categories</h1>
//         <p>Discover podcasts that match your interests</p>
//       </motion.div>

//       {/* Add Category Form */}
//       {!selectedCategory && (
//         <form onSubmit={handleAddCategory} className="add-category-form">
//           <input
//             type="text"
//             placeholder="Add new category"
//             value={newCategoryName}
//             onChange={(e) => setNewCategoryName(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={adding}>
//             {adding ? "Adding..." : "Add Category"}
//           </button>
//         </form>
//       )}

//       {/* Category Grid */}
//       {!selectedCategory ? (
//         <motion.div
//           className="categories-grid"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {categories.map((category, index) => (
//             <motion.div
//               key={category._id}
//               className="category-card"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => fetchPodcastsByCategory(category._id)}
//               style={{
//                 "--category-color":
//                   categoryColors[index % categoryColors.length],
//               }}
//             >
//               <div className="category-icon">
//                 {categoryIcons[category.name] || <FaMusic />}
//               </div>
//               <h3>{category.name}</h3>
//               <p>Explore {category.name.toLowerCase()} podcasts</p>
//               <div className="category-actions">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     const newName = prompt(
//                       "Enter new category name:",
//                       category.name
//                     );
//                     if (newName && newName.trim()) {
//                       handleUpdateCategory(category._id, newName.trim());
//                     }
//                   }}
//                 >
//                   ✏️ Edit
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     if (
//                       window.confirm(
//                         "Are you sure you want to delete this category?"
//                       )
//                     ) {
//                       handleDeleteCategory(category._id);
//                     }
//                   }}
//                 >
//                   🗑️ Delete
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       ) : (
//         <motion.div
//           className="podcast-list-container"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//         >
//           <button
//             className="back-button"
//             onClick={() => {
//               setSelectedCategory(null);
//               setPodcasts([]);
//             }}
//           >
//             ← Back to Categories
//           </button>

//           {podcastsLoading ? (
//             <div className="loading">
//               <div className="loading-spinner"></div>
//               <p>Loading podcasts...</p>
//             </div>
//           ) : (
//             <div className="podcast-grid">
//               {podcasts.length === 0 ? (
//                 <p>No podcasts found in this category.</p>
//               ) : (
//                 podcasts.map((podcast) => (
//                   <motion.div
//                     key={podcast._id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     whileHover={{ scale: 1.03 }}
//                   >
//                     <PodcastCard
//                       {...podcast}
//                       showControls={true}
//                       onDelete={async (id) => {
//                         if (
//                           window.confirm(
//                             "Are you sure you want to delete this podcast?"
//                           )
//                         ) {
//                           try {
//                             await api.delete(`/podcasts/${id}`);
//                             setPodcasts((prev) =>
//                               prev.filter((p) => p._id !== id)
//                             );
//                           } catch (err) {
//                             console.error("Delete failed:", err.message);
//                             alert("Failed to delete podcast");
//                           }
//                         }
//                       }}
//                       onEdit={(id) => {
//                         window.location.href = `/edit-podcast/${id}`;
//                       }}
//                     />
//                   </motion.div>
//                 ))
//               )}
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// }




// ________________________________________________________________________________________






// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import PodcastCard from "./PodcastCard1";
// import {
//   FaMusic,
//   FaBook,
//   FaGamepad,
//   FaFilm,
//   FaLaugh,
//   FaGraduationCap,
//   FaHeart,
//   FaGlobe,
//   FaLightbulb,
//   FaRunning,
//   FaBriefcase,
//   FaTheaterMasks,
//   FaBrain,
//   FaGhost,
//   FaHandsHelping,
//   FaPalette,
//   FaLandmark
// } from "react-icons/fa";
// import api from "../api";
// import "../styles/Categories.css";

// // ✅ Icon map based on lowercase category names
// const categoryIcons = {
//   music: <FaMusic />,
//   education: <FaGraduationCap />,
//   entertainment: <FaFilm />,
//   comedy: <FaLaugh />,
//   gaming: <FaGamepad />,
//   books: <FaBook />,
//   health: <FaHeart />,
//   technology: <FaLightbulb />,
//   tech: <FaLightbulb />,
//   sports: <FaRunning />,
//   news: <FaGlobe />,
//   business: <FaBriefcase />,
//   horror: <FaGhost />,
//   motivation: <FaHeart />,
//   spirituality: <FaBrain />,
//   government: <FaLandmark />,
//   hobbies: <FaPalette />,
// };

// const categoryColors = [
//   "#FF6B6B",
//   "#4ECDC4",
//   "#FFD93D",
//   "#FF8B94",
//   "#6C5CE7",
//   "#A8E6CF",
//   "#FF9F1C",
//   "#2EC4B6",
//   "#E63946",
//   "#457B9D",
// ];

// export default function CategoriesSimple() {
//   const [categories, setCategories] = useState([]);
//   const [podcasts, setPodcasts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [podcastsLoading, setPodcastsLoading] = useState(false);
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [adding, setAdding] = useState(false);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fallbackCategories = [
//     { name: "Technology" },
//     { name: "Music" },
//     { name: "Education" },
//     { name: "Entertainment" },
//   ];

//   const fetchCategories = async () => {
//     try {
//       const response = await api.get("/categories");
//       if (response.data.length === 0) throw new Error("No categories in DB");
//       setCategories(response.data);
//     } catch (error) {
//       try {
//         const inserted = [];
//         for (const cat of fallbackCategories) {
//           try {
//             const res = await api.post("/categories", cat);
//             inserted.push(res.data);
//           } catch (innerErr) {
//             if (innerErr.response?.status === 400) {
//               const { data } = await api.get("/categories");
//               setCategories(data);
//               return;
//             }
//           }
//         }
//         setCategories(
//           fallbackCategories.map((cat, idx) => ({
//             _id: String(idx + 1),
//             ...cat,
//           }))
//         );
//       } catch {
//         setCategories([]);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdateCategory = async (id, newName) => {
//     try {
//       await api.put(`/categories/${id}`, { name: newName });
//       fetchCategories();
//     } catch (error) {
//       alert("Failed to update category: " + (error.response?.data?.message || error.message));
//     }
//   };

//   const handleDeleteCategory = async (id) => {
//     try {
//       await api.delete(`/categories/${id}`);
//       setCategories(categories.filter((cat) => cat._id !== id));
//     } catch (error) {
//       alert("Failed to delete category: " + (error.response?.data?.message || error.message));
//     }
//   };

//   const fetchPodcastsByCategory = async (categoryId) => {
//     setPodcastsLoading(true);
//     try {
//       const response = await api.get(`/podcasts/category/${categoryId}`);
//       setPodcasts(response.data);
//       setSelectedCategory(categoryId);
//     } catch {
//       setPodcasts([]);
//     } finally {
//       setPodcastsLoading(false);
//     }
//   };

//   const handleAddCategory = async (e) => {
//     e.preventDefault();
//     if (!newCategoryName.trim()) return;
//     setAdding(true);
//     try {
//       await api.post("/categories", { name: newCategoryName });
//       setNewCategoryName("");
//       fetchCategories();
//     } catch (err) {
//       alert("Error adding category: " + (err.response?.data?.message || err.message));
//     } finally {
//       setAdding(false);
//     }
//   };

//   if (loading) {
//     return <div className="categories-container"><div className="loading">Loading categories...</div></div>;
//   }

//   return (
//     <div className="categories-container">
//       <motion.div className="categories-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <h1>Explore Categories</h1>
//         <p>Discover podcasts that match your interests</p>
//       </motion.div>

//       {!selectedCategory && (
//         <form onSubmit={handleAddCategory} className="add-category-form">
//           <input
//             type="text"
//             placeholder="Add new category"
//             value={newCategoryName}
//             onChange={(e) => setNewCategoryName(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={adding}>
//             {adding ? "Adding..." : "Add Category"}
//           </button>
//         </form>
//       )}

//       {!selectedCategory ? (
//         <motion.div className="categories-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           {categories.map((category, index) => {
//             const color = categoryColors[index % categoryColors.length];
//             const iconKey = category.name?.toLowerCase().trim();
//             const icon = categoryIcons[iconKey] || <FaGlobe />;

//             return (
//               <motion.div
//                 key={category._id}
//                 className="category-card"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => fetchPodcastsByCategory(category._id)}
//                 style={{ "--category-color": color }}
//               >
//                 <div className="category-icon" style={{ color }}>{icon}</div>
//                 <h3>{category.name}</h3>
//                 <p>Explore {category.name.toLowerCase()} podcasts</p>

//                 <div className="category-actions">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       const newName = prompt("Enter new category name:", category.name);
//                       if (newName && newName.trim()) {
//                         handleUpdateCategory(category._id, newName.trim());
//                       }
//                     }}
//                   >
//                     ✏️ Edit
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       if (window.confirm("Are you sure you want to delete this category?")) {
//                         handleDeleteCategory(category._id);
//                       }
//                     }}
//                   >
//                     🗑️ Delete
//                   </button>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       ) : (
//         <motion.div className="podcast-list-container" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
//           <button className="back-button" onClick={() => {
//             setSelectedCategory(null);
//             setPodcasts([]);
//           }}>
//             ← Back to Categories
//           </button>

//           {podcastsLoading ? (
//             <div className="loading"><div className="loading-spinner"></div><p>Loading podcasts...</p></div>
//           ) : (
//             <div className="podcast-grid">
//               {podcasts.length === 0 ? (
//                 <p>No podcasts found in this category.</p>
//               ) : (
//                 podcasts.map((podcast) => (
//                   <motion.div key={podcast._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }}>
//                     <PodcastCard
//                       {...podcast}
//                       showControls={true}
//                       onDelete={async (id) => {
//                         if (window.confirm("Are you sure you want to delete this podcast?")) {
//                           try {
//                             await api.delete(`/podcasts/${id}`);
//                             setPodcasts((prev) => prev.filter((p) => p._id !== id));
//                           } catch {
//                             alert("Failed to delete podcast");
//                           }
//                         }
//                       }}
//                       onEdit={(id) => {
//                         window.location.href = `/edit-podcast/${id}`;
//                       }}
//                     />
//                   </motion.div>
//                 ))
//               )}
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PodcastCard from "./PodcastCard1";
import {
  FaMusic,
  FaBook,
  FaGamepad,
  FaFilm,
  FaLaugh,
  FaGraduationCap,
  FaHeart,
  FaGlobe,
  FaLightbulb,
  FaRunning,
  FaEdit,
  FaTrashAlt,
  FaChurch,
  FaBuilding,
  FaLaptopCode,
  FaGhost,
  FaSmileBeam,
} from "react-icons/fa";
import api from "../api";
import "../styles/Categories.css";

const categoryIcons = {
  music: <FaMusic />,
  education: <FaGraduationCap />,
  entertainment: <FaFilm />,
  comedy: <FaLaugh />,
  gaming: <FaGamepad />,
  books: <FaBook />,
  health: <FaHeart />,
  technology: <FaLightbulb />,
  sports: <FaRunning />,
  news: <FaGlobe />,
  spirituality: <FaChurch />,
  government: <FaBuilding />,
  motivation: <FaSmileBeam />,
  horror: <FaGhost />,
  hobbies: <FaGamepad />,
  business: <FaLaptopCode />,
  tech: <FaLaptopCode />,
};

const categoryColors = [
  "#FF6B6B",
  "#4ECDC4",
  "#FFD93D",
  "#FF8B94",
  "#6C5CE7",
  "#A8E6CF",
  "#FF9F1C",
  "#2EC4B6",
  "#E63946",
  "#457B9D",
];

export default function CategoriesSimple() {
  const [categories, setCategories] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [podcastsLoading, setPodcastsLoading] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fallbackCategories = [
    { name: "Technology" },
    { name: "Music" },
    { name: "Education" },
    { name: "Entertainment" },
  ];

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      if (response.data.length === 0) throw new Error("No categories in DB");
      setCategories(response.data);
    } catch (error) {
      try {
        const inserted = [];
        for (const cat of fallbackCategories) {
          try {
            const res = await api.post("/categories", cat);
            inserted.push(res.data);
          } catch (innerErr) {
            if (innerErr.response?.status === 400) {
              const { data } = await api.get("/categories");
              setCategories(data);
              return;
            }
          }
        }
        setCategories(
          fallbackCategories.map((cat, idx) => ({
            _id: String(idx + 1),
            ...cat,
          }))
        );
      } catch {
        setCategories([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCategory = async (id, newName) => {
    try {
      await api.put(`/categories/${id}`, { name: newName });
      fetchCategories();
    } catch (error) {
      alert("Failed to update category: " + (error.response?.data?.message || error.message));
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await api.delete(`/categories/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (error) {
      alert("Failed to delete category: " + (error.response?.data?.message || error.message));
    }
  };

  const fetchPodcastsByCategory = async (categoryId) => {
    setPodcastsLoading(true);
    try {
      const response = await api.get(`/podcasts/category/${categoryId}`);
      setPodcasts(response.data);
      setSelectedCategory(categoryId);
    } catch {
      setPodcasts([]);
    } finally {
      setPodcastsLoading(false);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    setAdding(true);
    try {
      await api.post("/categories", { name: newCategoryName });
      setNewCategoryName("");
      fetchCategories();
    } catch (err) {
      alert("Error adding category: " + (err.response?.data?.message || err.message));
    } finally {
      setAdding(false);
    }
  };

  if (loading) {
    return <div className="categories-container"><div className="loading">Loading categories...</div></div>;
  }

  return (
    <div className="categories-container">
      <motion.div className="categories-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1>Explore Categories</h1>
        <p>Discover podcasts that match your interests</p>
      </motion.div>

      {!selectedCategory && (
        <form onSubmit={handleAddCategory} className="add-category-form">
          <input
            type="text"
            placeholder="Add new category"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            required
          />
          <button type="submit" disabled={adding}>
            {adding ? "Adding..." : "Add Category"}
          </button>
        </form>
      )}

      {!selectedCategory ? (
        <motion.div className="categories-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {categories.map((category, index) => {
            const iconKey = category.name?.toLowerCase();
            return (
              <motion.div
                key={category._id}
                className="category-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => fetchPodcastsByCategory(category._id)}
                style={{ "--category-color": categoryColors[index % categoryColors.length] }}
              >
                <div
                  className="category-icon"
                  style={{ color: categoryColors[index % categoryColors.length] }}
                >
                  {categoryIcons[iconKey] || <FaMusic />}
                </div>
                <h3>{category.name}</h3>
                <p>Explore {category.name.toLowerCase()} podcasts</p>

                <div className="category-actions">
                  <button
                    className="edit-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      const newName = prompt("Enter new category name:", category.name);
                      if (newName && newName.trim()) {
                        handleUpdateCategory(category._id, newName.trim());
                      }
                    }}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm("Are you sure you want to delete this category?")) {
                        handleDeleteCategory(category._id);
                      }
                    }}
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      ) : (
        <motion.div className="podcast-list-container" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
          <button className="back-button" onClick={() => {
            setSelectedCategory(null);
            setPodcasts([]);
          }}>
            ← Back to Categories
          </button>

          {podcastsLoading ? (
            <div className="loading"><div className="loading-spinner"></div><p>Loading podcasts...</p></div>
          ) : (
            <div className="podcast-grid">
              {podcasts.length === 0 ? (
                <p>No podcasts found in this category.</p>
              ) : (
                podcasts.map((podcast) => (
                  <motion.div key={podcast._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }}>
                    <PodcastCard
                      {...podcast}
                      showControls={true}
                      onDelete={async (id) => {
                        if (window.confirm("Are you sure you want to delete this podcast?")) {
                          try {
                            await api.delete(`/podcasts/${id}`);
                            setPodcasts((prev) => prev.filter((p) => p._id !== id));
                          } catch {
                            alert("Failed to delete podcast");
                          }
                        }
                      }}
                      onEdit={(id) => {
                        window.location.href = `/edit-podcast/${id}`;
                      }}
                    />
                  </motion.div>
                ))
              )}
            </div>
          )}
        </motion.div>
      )}



      {/* 🎧 Footer Below */}
    <footer className="help-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>🎧 PodVibe</h2>
          <p>Your home for all podcasts</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/upload"> Upload Podcasts</a>
          <a href="/help">Help Center</a>
          <a href="/terms">Terms & Privacy</a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PodVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>

  );
}



