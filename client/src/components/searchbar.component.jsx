import React from "react";
import SearchSVG from "../assets/svg/search.svg";

export const SearchBox = ({ handleChange }) => (
  <div className="flex flex-col-reverse items-center flex-grow md:flex-row md:justify-end">
    <div className="grid grid-cols-2 pt-4 gap-14 sd:gap-10 md:gap-5 md:pt-0"></div>
    <div className="flex items-center p-2 bg-gray-100 shadow-md rounded-xl md:flex-grow md:ml-5 text-grey">
      <SearchSVG />
      <input
        className="w-full p-2 bg-gray-100 outline-none"
        type="text"
        placeholder="Cerca un libro inserendo ISBN"
        onChange={handleChange}
      />
      <button className="p-2 pl-4 pr-4 text-white bg-green-500 rounded-xl hover:bg-green-700">
        <p className="text-xl font-semibold">Search</p>
      </button>
    </div>
  </div>
);
