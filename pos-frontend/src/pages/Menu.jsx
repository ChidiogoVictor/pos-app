import React from "react";
import BackButton from "../components/shared/BackButton";
import BottomNav from "../components/shared/BottomNav";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";

const Menu = () => {
  return (
    <section className="bg-gray-800 h-[calc(100vh-5rem)] flex gap-3">
      {/* Left Div*/}
      <div className="flex-3 overflow-y-scroll mb-16">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-white text-2xl font-bold tracking-wider">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-white text-2xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-white font-semibold">
                  Customer Name
                </h1>
                <p className="text-xs text-gray-200 font-medium">Table No: 2</p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      {/* Right Div*/}
      <div className="flex-1 bg-black mt-4 mr-3 h-[calc(85vh-5rem)] rounded-lg pt-2">
        {/* Customer Info*/}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex flex-col items-start">
            <h1 className="text-md text-white font-semibold tracking-wide">
              Customer Name
            </h1>
            <p className="text-sm text-gray-400 font-medium mt-1">
              # 101 / Naira
            </p>
            <p className="text-sm text-gray-400 font-medium mt-2">
              January 19, 2025 05:34 PM
            </p>
          </div>
          <button className="bg-yellow-500 p-3 text-1 font-bold rounded-lg">
            CN
          </button>
        </div>
        <hr className="border-gray-800 border-t-2" />
        {/* Cart Items*/}
        <div>
          <h1>Order Details</h1>
        </div>
        <div className=" overflow-y-scroll h-[250px]">
          <div className="bg-gray-900 rounded-lg px-4 py-2 mb-2">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-400 font-semibold tracking-wide text-lg">
                Chicken Tikka
              </h1>
              <p className="text-gray-400 font-semibold">x2</p>
            </div>
          </div>
        </div>
        {/* Bills */}
      </div>
      <BottomNav />
    </section>
  );
};

export default Menu;
