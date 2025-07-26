import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaBook, FaGamepad, FaFilm, FaLaugh, FaGraduationCap, FaHeart, FaGlobe, FaLightbulb, FaRunning, FaSearch, FaTimes } from 'react-icons/fa';
import '../styles/Categories.css';
import AddCategory from '../components/AddCategory';
import axios from 'axios';

const iconMap = {
  Music: <FaMusic />,
  Education: <FaGraduationCap />,
  Entertainment: <FaFilm />,
  Comedy: <FaLaugh />,
  Gaming: <FaGamepad />,
  Books: <FaBook />,
  'Health & Wellness': <FaHeart />,
  Technology: <FaLightbulb />,
  Sports: <FaRunning />,
  'World Affairs': <FaGlobe />
};

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [podcasts, setPodcasts] = useState([]);
  const [showPodcastList, setShowPodcastList] = useState(false);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/api/categories');
      setCategories(res.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = async (categoryId) => {
    setSelectedCategory(categoryId);
    setIsLoading(true);
    try {
      const res = await axios.get(`/api/podcasts/category/${categoryId}/podcasts`);
      setPodcasts(res.data);
    } catch (err) {
      setPodcasts([]);
    }
    setIsLoading(false);
    setShowPodcastList(true);
  };

  const handleBack = () => {
    setShowPodcastList(false);
    setSelectedCategory(null);
    setPodcasts([]);
  };

  const handleCategoryAdded = (newCategory) => {
    setCategories(prev => [...prev, newCategory]);
  };

  return (
    <div className="categories-container">
      <motion.div
        className="categories-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Explore Categories</h1>
        <p>Discover podcasts that match your interests</p>

        {/* ✅ Add Category Form Visible */}
        <AddCategory onCategoryAdded={handleCategoryAdded} />

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <FaTimes
              className="clear-icon"
              onClick={() => setSearchTerm('')}
            />
          )}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {!showPodcastList ? (
          <motion.div
            className="categories-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredCategories.map((category) => (
              <motion.div
                key={category._id}
                className={`category-card ${selectedCategory === category._id ? 'selected' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(category._id)}
                style={{ '--category-color': iconMap[category.name]?.props?.color || '#8A784E' }}
              >
                <div className="category-icon">{iconMap[category.name] || <FaMusic />}</div>
                <h3>{category.name}</h3>

                <motion.div
                  className="category-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: selectedCategory === category._id ? 1 : 0 }}
                >
                  <button className="explore-btn">Explore Podcasts</button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="podcast-list-container"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <button className="back-button" onClick={handleBack}>
              ← Back to Categories
            </button>
            {isLoading ? (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>Loading podcasts...</p>
              </div>
            ) : (
              <div className="podcast-grid">
                {podcasts.map(podcast => (
                  <motion.div
                    key={podcast._id}
                    className="podcast-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img src={podcast.image} alt={podcast.title} />
                    <div className="podcast-info">
                      <h3>{podcast.title}</h3>
                      <p className="host">Host: {podcast.createdBy?.name || 'Unknown'}</p>
                      <p className="duration">{podcast.duration || ''}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}




