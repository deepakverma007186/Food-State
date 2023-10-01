import React, { useState, useEffect } from "react";
import { FoodData } from "../constant/FoodData";

export default function MenuCategory({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="flex flex-wrap gap-2 my-2">
      <button
        onClick={() => handleCategoryClick("All")}
        className={`px-3 py-1 text-sm  border border-orange-400 font-semibold rounded-md  ${
          selectedCategory === "All" ? "bg-orange-400 text-white" : "bg-white"
        }`}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category)}
          className={`px-3 py-1 text-sm  border border-orange-400 font-semibold rounded-md  ${
            selectedCategory === category
              ? "bg-orange-400 text-white"
              : "bg-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
