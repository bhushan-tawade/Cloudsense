import React from "react";

const Menu = () => {
  return (
    <div className="  rounded-[3rem] w-[85rem] h-[41rem] my-10 glassMorf4 bg-black opacity-75 p-8 text-white z-30 ">
      <div className="relative flex items-center justify-center text-center top-24 text-4xl">
        <ul className=" flex flex-col gap-20">
          <li className="transition ease-in-out transform duration-300 hover:scale-125 cursor-pointer ">
            About
          </li>
          <li className="transition ease-in-out transform duration-300 hover:scale-125 cursor-pointer ">
            Service
          </li>
          <li className="transition ease-in-out transform duration-300 hover:scale-125 cursor-pointer ">
            Contact
          </li>
          <li className="transition ease-in-out transform duration-300 hover:scale-125 cursor-pointer ">
            Help
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
