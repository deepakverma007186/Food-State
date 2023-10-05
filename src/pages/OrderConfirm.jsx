import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllFromCart } from "../redux/slices/CartSlice";

export default function OrderConfirm() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const handleConfirmOrder = () => {
    if (cartItems.length >= 0) {
      dispatch(removeAllFromCart());
      navigation("/success");
    }
  };
  return (
    <div className="relative">
      <h2 className="text-xl font-semibold text-center m-2">Order Details</h2>
      <div className="bg-white border border-gray-200 m-2 p-1 rounded-md">
        {cartItems.map((item) => (
          <p key={item.id} className="text-[14px] text-gray-500 mb-2">{`${
            item.name
          } X ${item.qty} = ${item.price * item.qty}`}</p>
        ))}
        <div className="flex">Total Price: ₹{totalPrice}</div>
      </div>
      <button
        onClick={handleConfirmOrder}
        className="bg-orange-400 text-white fixed bottom-2 left-2 right-2 p-2 rounded-md"
      >
        Confirm Order
      </button>
    </div>
  );
}
