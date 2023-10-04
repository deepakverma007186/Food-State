import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function CheckOutCart() {
  const navigation = useNavigate();
  const [showCard, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((qty, item) => qty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const handleCheckout = () => {
    if (totalQty) {
      navigation("/success");
    } else {
      toast.custom(() => (
        <div className="bg-white flex justify-center items-center gap-1 p-2 shadow-md rounded-md">
          <h2 className="text-orange-400">
            Please add atleast one item, Thanks!
          </h2>
        </div>
      ));
    }
  };
  return (
    <>
      <div
        className={`p-2 fixed top-0 right-0 lg:w-[20vw] w-full bg-slate-100 h-full ${
          showCard ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-10`}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">My Order</h2>
          <IoCloseCircleOutline
            onClick={() => setShowCart(!showCard)}
            className="font-semibold text-lg hover:text-red-400 cursor-pointer"
          />
        </div>
        <div className="my-2 h-[90vh] relative">
          {cartItems.length ? (
            cartItems.map((item) => <CartCard key={item.id} item={item} />)
          ) : (
            <div className="flex justify-center items-center h-[80vh]">
              <h2 className="text-gray-400 text-xl">😒Your cart is empty</h2>
            </div>
          )}
          <div className="absolute bottom-0 w-full">
            <h3>
              Item:{" "}
              <span className="font-semibold text-green-400">{totalQty}</span>
            </h3>
            <h3>
              Total Amount:{" "}
              <span className="font-semibold text-green-400">
                ₹{totalPrice}
              </span>
            </h3>
            <hr className="my-2 font-bold text-lg" />
            <button
              onClick={handleCheckout}
              className="bg-green-400 text-white p-2 font-bold text-lg w-full rounded-md"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-3 right-3 ${
          totalQty && "animate-bounce delay-500 transition-all"
        }`}
      >
        <FaShoppingCart
          onClick={() => setShowCart(!showCard)}
          className={
            "relative cursor-pointer bg-white rounded-full p-3 text-5xl text-orange-400 shadow-md"
          }
        />
        {totalQty > 0 && (
          <span className="bg-red-400 absolute top-1 left-0 text-white rounded-full px-1 text-[10px]">
            {totalQty}
          </span>
        )}
      </div>
    </>
  );
}
