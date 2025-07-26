// // Category.jsx
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
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
//   FaSearch,
//   FaTimes,
// } from "react-icons/fa";
// import "../styles/Categories.css";
// import AddCategory from "../components/AddCategory"; // <--- UNCOMMENT OR ADD THIS LINE
// import axios from "axios"; // <--- Add this import for fetching categories

// // Dummy podcast data for demonstration (keep for now, but will be replaced by API calls)
// const dummyPodcasts = {
//   Music: [
//     {
//       id: 1,
//       title: "Music Theory 101",
//       host: "John Smith",
//       duration: "45 min",
//       image: "/images/podcast1.jpg",
//     },
//     {
//       id: 2,
//       title: "Jazz Journey",
//       host: "Sarah Johnson",
//       duration: "60 min",
//       image: "/images/podcast2.jpg",
//     },
//     {
//       id: 3,
//       title: "Rock Classics",
//       host: "Mike Wilson",
//       duration: "50 min",
//       image: "/images/podcast3.jpg",
//     },
//   ],
//   Education: [
//     {
//       id: 4,
//       title: "Science Today",
//       host: "Dr. Emily Brown",
//       duration: "55 min",
//       image: "/images/podcast4.jpg",
//     },
//     {
//       id: 5,
//       title: "History Uncovered",
//       host: "Prof. James",
//       duration: "40 min",
//       image: "/images/podcast5.jpg",
//     },
//   ],
//   // Add more categories as needed
// };

// export default function Categories() {
//   const [categories, setCategories] = useState([]); // State to hold categories from API
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [podcasts, setPodcasts] = useState([]);
//   const [showPodcastList, setShowPodcastList] = useState(false);
//   const [showAddCategoryForm, setShowAddCategoryForm] = useState(false); // New state for form visibility

//   // Fetch categories on component mount
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get("/api/categories"); // Make sure your backend route is correct
//       // Assuming your backend returns an array of category objects with a 'name' and '_id'
//       setCategories(
//         response.data.map((cat) => ({
//           id: cat._id, // Use _id from MongoDB as id
//           name: cat.name,
//           icon: getCategoryIcon(cat.name), // Assign a default icon or based on name
//           description: `Explore ${cat.name.toLowerCase()} podcasts`, // Generate a description
//           color: getRandomCategoryColor(), // Assign a random color
//         }))
//       );
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       // Fallback to dummy data if API fails or for initial development
//       setCategories([
//         {
//           id: "dummy1",
//           name: "Music",
//           icon: <FaMusic />,
//           description: "Explore music podcasts, interviews, and reviews",
//           color: "#FF6B6B",
//         },
//         {
//           id: "dummy2",
//           name: "Education",
//           icon: <FaGraduationCap />,
//           description: "Learn something new every day",
//           color: "#4ECDC4",
//         },
//         // ... add other dummy categories if needed for initial rendering
//       ]);
//     }
//   };

//   const getCategoryIcon = (categoryName) => {
//     // A mapping for category names to icons, extend as needed
//     const iconMap = {
//       Music: <FaMusic />,
//       Education: <FaGraduationCap />,
//       Entertainment: <FaFilm />,
//       Comedy: <FaLaugh />,
//       Gaming: <FaGamepad />,
//       Books: <FaBook />,
//       "Health & Wellness": <FaHeart />,
//       Technology: <FaLightbulb />,
//       Sports: <FaRunning />,
//       "World Affairs": <FaGlobe />,
//     };
//     return iconMap[categoryName] || <FaMusic />; // Default icon
//   };

//   const getRandomCategoryColor = () => {
//     const colors = [
//       "#FF6B6B",
//       "#4ECDC4",
//       "#FFD93D",
//       "#FF8B94",
//       "#6C5CE7",
//       "#A8E6CF",
//       "#FF9F1C",
//       "#2EC4B6",
//       "#E63946",
//       "#457B9D",
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleCategoryClick = async (categoryId) => {
//     setSelectedCategory(categoryId);
//     setIsLoading(true);

//     try {
//       // In a real application, you'd fetch podcasts related to this category ID from your backend
//       // For now, using dummy data based on category name
//       const category = categories.find((cat) => cat.id === categoryId);
//       // Replace with your actual API call to fetch podcasts by category ID
//       // const response = await axios.get(`/api/podcasts/category/${categoryId}`);
//       // setPodcasts(response.data);
//       setPodcasts(dummyPodcasts[category.name] || []); // Using dummy data for now
//       setIsLoading(false);
//       setShowPodcastList(true);
//     } catch (error) {
//       console.error("Error fetching podcasts for category:", error);
//       setPodcasts([]);
//       setIsLoading(false);
//       setShowPodcastList(true); // Still show the list, but it will be empty
//     }
//   };

//   const handleBack = () => {
//     setShowPodcastList(false);
//     setSelectedCategory(null);
//     setPodcasts([]);
//   };

//   const handleCategoryAdded = (newCategory) => {
//     // Add the new category to the state and re-fetch to get correct IDs if needed
//     // Assuming newCategory from backend has _id and name
//     setCategories((prevCategories) => [
//       ...prevCategories,
//       {
//         id: newCategory._id,
//         name: newCategory.name,
//         icon: getCategoryIcon(newCategory.name),
//         description: `Explore ${newCategory.name.toLowerCase()} podcasts`,
//         color: getRandomCategoryColor(),
//       },
//     ]);
//     setShowAddCategoryForm(false); // Hide form after adding
//   };

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
//         <div className="search-bar">
//           <FaSearch className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search categories..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           {searchTerm && (
//             <FaTimes className="clear-icon" onClick={() => setSearchTerm("")} />
//           )}
//         </div>
//         {/* Button to show/hide the AddCategory form */}
//         <button
//           className="add-category-toggle-btn"
//           onClick={() => setShowAddCategoryForm(!showAddCategoryForm)}
//         >
//           {showAddCategoryForm ? "Hide Add Category Form" : "Add New Category"}
//         </button>
//       </motion.div>

//       <AnimatePresence mode="wait">
//         {showAddCategoryForm && ( // Render AddCategory form conditionally
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="add-category-form-wrapper"
//           >
//             <AddCategory onCategoryAdded={handleCategoryAdded} />
//           </motion.div>
//         )}

//         {!showPodcastList ? (
//           <motion.div
//             className="categories-grid"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {filteredCategories.length === 0 && !isLoading ? (
//               <p>No categories found.</p>
//             ) : (
//               filteredCategories.map((category) => (
//                 <motion.div
//                   key={category.id}
//                   className={`category-card ${
//                     selectedCategory === category.id ? "selected" : ""
//                   }`}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleCategoryClick(category.id)}
//                   style={{ "--category-color": category.color }}
//                 >
//                   <div className="category-icon">{category.icon}</div>
//                   <h3>{category.name}</h3>
//                   <p>{category.description}</p>
//                   <motion.div
//                     className="category-overlay"
//                     initial={{ opacity: 0 }}
//                     animate={{
//                       opacity: selectedCategory === category.id ? 1 : 0,
//                     }}
//                   >
//                     <button className="explore-btn">Explore Podcasts</button>
//                   </motion.div>
//                 </motion.div>
//               ))
//             )}
//           </motion.div>
//         ) : (
//           <motion.div
//             className="podcast-list-container"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//           >
//             <button className="back-button" onClick={handleBack}>
//               ← Back to Categories
//             </button>

//             {isLoading ? (
//               <div className="loading">
//                 <div className="loading-spinner"></div>
//                 <p>Loading podcasts...</p>
//               </div>
//             ) : (
//               <div className="podcast-grid">
//                 {podcasts.length === 0 ? (
//                   <p>No podcasts found for this category.</p>
//                 ) : (
//                   podcasts.map((podcast) => (
//                     <motion.div
//                       key={podcast.id}
//                       className="podcast-card"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       whileHover={{ scale: 1.03 }}
//                     >
//                       <img src={podcast.image} alt={podcast.title} />
//                       <div className="podcast-info">
//                         <h3>{podcast.title}</h3>
//                         <p className="host">Host: {podcast.host}</p>
//                         <p className="duration">{podcast.duration}</p>
//                       </div>
//                     </motion.div>
//                   ))
//                 )}
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
