import React, { useState } from "react";
import FoodData from "../constant/FoodData";
import FoodCard from "../components/FoodCard";
import { useSelector } from "react-redux";
import MenuCategory from "./../components/MenuCategory";

export default function ListFood() {
  const productAddedAlready = useSelector((state) => state.cart.cart);
  const searchedItem = useSelector((state) => state.search.search);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredFoodData =
    selectedCategory === "All"
      ? FoodData.filter((food) =>
          food.name.toLowerCase().includes(searchedItem.toLowerCase())
        )
      : FoodData.filter(
          (food) =>
            food.category === selectedCategory &&
            food.name.toLowerCase().includes(searchedItem.toLowerCase())
        );

  return (
    <>
      <MenuCategory onCategorySelect={handleCategorySelect} />
      <div className="py-4 flex flex-wrap gap-6 justify-between">
        {filteredFoodData.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            alreadyhave={productAddedAlready}
          />
        ))}
      </div>
    </>
  );
}
