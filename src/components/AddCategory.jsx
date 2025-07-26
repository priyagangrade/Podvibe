import React, { useState } from "react";
import axios from "axios";

export default function AddCategory({ onCategoryAdded }) {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!categoryName.trim()) {
      setError("Category name cannot be empty");
      return;
    }

    try {
      const res = await axios.post("/api/categories", { name: categoryName });
      onCategoryAdded(res.data);
      setSuccess("Category added successfully");
      setCategoryName("");
    } catch (err) {
      setError("Failed to add category");
    }
  };

  return (
    <form className="add-category-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter category name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button type="submit">Add Category</button>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
    </form>
  );
}
