/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { HiMiniHome } from "react-icons/hi2";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const ActivityBar = ({
  searchBarActive,
  setSearchBarActive,
  menu,
  setMenu,
  slideup,
}) => {
  const handleScroll = () => {
    if (menu) {
      setMenu(false);
      slideup(1000);
    } else {
      setMenu(true);
      slideup(-1000);
    }
  };

  const handleHomeBtn = () => {
    setMenu(true);
    slideup(-1000);
  };

  return (
    <div className="absolute left-[2.2rem] bg-white text-white w-16 h-60 rounded-full p-2 text-center flex flex-col justify-around  items-center glassMorf z-50">
      <div
        className={`p-3 rounded-full ${
          searchBarActive
            ? "bg-zinc-200 glassMorf1"
            : "hover:-translate-y-1 hover:scale-150  duration-300"
        } cursor-pointer transition ease-in-out  `}
        onClick={() => setSearchBarActive(!searchBarActive)}
      >
        <FaSearchLocation className="w-6 h-6" />
      </div>
      <div
        className={`p-3 rounded-full ${
          !menu
            ? "bg-zinc-200 glassMorf1"
            : "hover:-translate-y-1 hover:scale-150  duration-300"
        } cursor-pointer transition ease-in-out  `}
        onClick={() => handleScroll()}
      >
        <HiSquares2X2 className="w-6 h-6" />
      </div>
      <div
        className="p-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-150  duration-300 cursor-pointer"
        onClick={() => handleHomeBtn()}
      >
        <HiMiniHome className="w-6 h-6" />
      </div>
      <div className="p-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-150  duration-300 ">
        <BiSolidBarChartAlt2 className="w-6 h-6" />
      </div>
    </div>
  );
};

export default ActivityBar;
