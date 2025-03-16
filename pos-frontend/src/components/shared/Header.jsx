import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-8" alt="restro logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restore</h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center  bg-[#1f1f1f] rounded-[20px] w-[350px]">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#f5f5f5] text-[#1f1f1f] px-2 py-1 rounded-l-2xl"
        />
        <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
          <FaSearch />
        </div>
      </div>

      {/* LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        <div className="bg-black rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-white text-2xl" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-white text-2xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-white font-semibold">Victor</h1>
            <p className="text-xs text-gray-200 font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
