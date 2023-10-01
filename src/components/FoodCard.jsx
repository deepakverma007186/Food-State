import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const MAX_DESC_LENGTH = 200;
const MAX_TITLE_LENGTH = 20;

export default function FoodCard({ food, alreadyhave }) {
  const { id, name, img, desc, price, rating, category } = food;
  const dispatch = useDispatch();

  const isItemInCart = alreadyhave.some((item) => item.id === id);

  return (
    <div className="flex flex-col lg:flex-row lg:w-[47vw] shadow-md rounded-md relative bg-white">
      <img
        className="w-full lg:w-[250px] h-[250px] object-fill rounded-md cursor-grab hover:scale-105 transition-all ease-linear duration-200"
        src={img}
        alt={name}
      />
      <span className="absolute top-0 left-0 bg-orange-300 rounded-br-md rounded-tl-md font-medium text-[10px] text-white p-1">
        {category}
      </span>
      <div className="p-2 lg:relative">
        <div className="flex justify-between">
          <h2 className="text-lg text-orange-400 font-semibold">
            {name.length < MAX_TITLE_LENGTH
              ? name
              : `${name.slice(0, MAX_TITLE_LENGTH)} ...`}
          </h2>
          <span className="text-xl text-green-400">₹{price}</span>
        </div>
        <p className="text-[12px] mb-2">
          {`${desc.slice(0, MAX_DESC_LENGTH)} ...`}
        </p>
        <div className="flex justify-between items-center my-2 lg:absolute lg:bottom-0 lg:right-2 lg:left-2">
          <span className="flex justify-between items-center">
            <AiTwotoneStar className="text-yellow-300 mr-1" /> {rating}
          </span>
          <button
            onClick={() => {
              if (!isItemInCart) {
                dispatch(addToCart({ id, name, price, img, qty: 1 }));
                toast.success(`${name} added`);
              }
            }}
            className={`p-2 rounded-md lg:w-[20vw] ${
              isItemInCart
                ? "bg-gray-400 text-white font-semibold text-sm"
                : "bg-orange-400 text-white font-semibold text-sm hover:bg-green-400 cursor-pointer"
            }`}
            disabled={isItemInCart}
          >
            {isItemInCart ? "Already added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
