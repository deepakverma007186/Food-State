import NavBar from "../components/NavBar";
import React from "react";
import ListFood from "./ListFood";
import MenuCategory from "../components/MenuCategory";
import CheckOutCart from "../components/CheckOutCart";

export default function Home() {
  return (
    <>
      <div className="lg:px-4 px-2">
        <NavBar />
        <MenuCategory />
        <ListFood />
      </div>
      <CheckOutCart />
    </>
  );
}
