import React, { useState } from "react";
import {
  AiFillDelete,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const handleDecrement = () => {
    if (item.qty > 1) {
      dispatch(decrementQty(item));
    } else {
      dispatch(removeFromCart(item));
      toast.custom(() => (
        <div className="bg-white flex justify-center items-center gap-1 p-2 shadow-md rounded-md">
          <AiFillDelete className="font-semibold text-lg text-red-400 cursor-pointer" />
          <h2>{item.name} Removed!</h2>
        </div>
      ));
    }
  };
  return (
    <div
      key={item.id}
      className="p-2 rounded-md shadow-md bg-orange-50 flex items-center mb-2"
    >
      <img
        src={item.img}
        alt={item.name}
        width={80}
        height={80}
        className="rounded-md"
      />
      <div className="ml-2 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-orange-400">{item.name}</h3>
          <AiFillDelete
            onClick={() => {
              dispatch(removeFromCart(item));
              toast.custom(() => (
                <div className="bg-white flex justify-center items-center gap-1 p-2 shadow-md rounded-md">
                  <AiFillDelete className="font-semibold text-lg text-red-400 cursor-pointer" />
                  <h2>{item.name} is removed</h2>
                </div>
              ));
            }}
            className="font-semibold text-lg hover:text-red-400 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-4 my-2">
          <AiFillMinusCircle
            onClick={handleDecrement}
            className="font-semibold text-lg hover:text-red-400 cursor-pointer"
          />
          <span className="text-lg font-bold text-green-400">{item.qty}</span>
          <AiFillPlusCircle
            onClick={() => {
              dispatch(incrementQty(item));
            }}
            className="font-semibold text-lg hover:text-green-400 cursor-pointer"
          />
        </div>
        <h2 className="text-green-400 text-sm font-semibold">₹{item.price}</h2>
      </div>
    </div>
  );
}
