import NavBar from "../components/NavBar";
import React from "react";
import ListFood from "./ListFood";
import CheckOutCart from "../components/CheckOutCart";

export default function Home() {
  return (
    <>
      <div className="lg:px-4 px-2">
        <NavBar />
        <ListFood />
      </div>
      <CheckOutCart />
    </>
  );
}
