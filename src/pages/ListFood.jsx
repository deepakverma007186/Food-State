import React from "react";
import FoodData from "../constant/FoodData";
import FoodCard from "../components/FoodCard";
import { useSelector } from "react-redux";

export default function ListFood() {
  const productAddedAlready = useSelector((state) => state.cart.cart);
  return (
    <>
      <div className="py-4 flex flex-wrap gap-6 justify-between">
        {FoodData.map((food) => (
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
