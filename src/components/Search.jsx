/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

const Search = ({
  searchQuery,
  setSearchQuery,
  searchBarActive,
  setSearchBarActive,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchText); // Updates searchQuery in App
    setSearchBarActive(false);
    console.log("Search query submitted: ", searchText);
  };

  return (
    <div className="absolute z-50 top-1/3 left-1/2 bg-white w-[60rem] -translate-x-1/2 p-10 rounded-lg drop-shadow-lg glassMorf3">
      <div className="flex items-center justify-between">
        <h1 className="space-grotesk text-3xl font-medium">CloudSense</h1>
        <div
          className={`p-3 rounded-full ${
            searchBarActive
              ? "bg-zinc-200 glassMorf1"
              : "hover:-translate-y-1 hover:scale-150 duration-300"
          } cursor-pointer transition ease-in-out`}
          onClick={() => setSearchBarActive(!searchBarActive)}
        >
          <CgClose className="w-6 h-6" />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-5"
      >
        <input
          type="text"
          placeholder="Search for a location"
          className="border-none rounded-s-md p-3 w-full text-zinc-950 focus:outline-none"
          value={searchText}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 font-medium w-20 h-[3rem] flex items-center justify-center rounded-e-md"
        >
          <IoSearch className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default Search;
