import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <>
      <nav className=" flex flex-col lg:flex-row py-2 justify-between">
        <div className="flex-[2]">
          <h3 className="text-gray-500 text-lg font-semibold">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h2 className="text-orange-500 text-2xl font-bold">Food State</h2>
        </div>
        <div className="flex flex-[1] justify-center items-center my-3">
          <input
            type="search"
            name="search"
            id=""
            onChange={(e) => dispatch(setSearch(e.target.value))}
            autoComplete="off"
            placeholder="you are looking for...?"
            className="p-2 text-[12px] w-full outline-none rounded-md shadow-md"
          />
        </div>
      </nav>
    </>
  );
}
