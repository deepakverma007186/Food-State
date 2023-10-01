import React, { useState, useEffect } from "react";
import { FoodData } from "../constant/FoodData";

export default function MenuCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 my-2">
      <button className="px-3 py-1 text-sm bg-white border border-orange-400 font-semibold rounded-md hover:bg-orange-400 hover:text-white">
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className="px-3 py-1 text-sm bg-white border border-orange-400 font-semibold rounded-md hover:bg-orange-400 hover:text-white"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
