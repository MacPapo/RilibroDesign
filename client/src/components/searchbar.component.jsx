import React from "react";
import SearchSVG from "../assets/svg/search.svg";

export const SearchBox = ({ handleChange }) => (
  <div className="items-center flex-grow lg:border-gray-300 lg:bg-opacity-60 lg:bg-gray-50 lg:shadow-xl lg:rounded-xl ">
    <div className="grid grid-rows-2 gap-4 md:p-10">
      <div className="flex items-center justify-center p-4 bg-gray-100 shadow-md rounded-xl ">
        <SearchSVG />
        <input
          className="w-full p-2 bg-gray-100 outline-none"
          type="text"
          placeholder="Cerca un libro inserendo ISBN"
          onChange={handleChange}
        />
      </div>
      <button className="p-2 pl-4 pr-4 text-white bg-green-500 rounded-xl hover:bg-green-700">
        <p className="text-xl font-semibold">Search</p>
      </button>
    </div>
  </div>
);
