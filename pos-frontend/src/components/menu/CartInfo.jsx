import React from "react";
import { FaNotesMedical } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Bill from "./Bill";

const CartInfo = () => {
  return (
    <div className="pl-4 py-2">
      <h1 className="text-lg text-white font-semibold tracking-wide">
        Order Details
      </h1>

      <div className=" overflow-y-scroll h-[240px]">
        <div className="bg-gray-900 rounded-lg px-4 py-2 mr-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-400 font-semibold tracking-wide text-lg">
              Chicken Tikka
            </h1>
            <p className="text-gray-400 font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-white cursor-pointer"
                size={20}
              />
              <FaNotesMedical className="text-white cursor-pointer" size={17} />
            </div>
            <p className="text-white text-md font-bold">#123</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg px-4 py-2 mr-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-400 font-semibold tracking-wide text-lg">
              Chicken Tikka
            </h1>
            <p className="text-gray-400 font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-white cursor-pointer"
                size={20}
              />
              <FaNotesMedical className="text-white cursor-pointer" size={17} />
            </div>
            <p className="text-white text-md font-bold">#123</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg px-4 py-2 mr-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-400 font-semibold tracking-wide text-lg">
              Chicken Tikka
            </h1>
            <p className="text-gray-400 font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-white cursor-pointer"
                size={20}
              />
              <FaNotesMedical className="text-white cursor-pointer" size={17} />
            </div>
            <p className="text-white text-md font-bold">#123</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg px-4 py-2 mr-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-400 font-semibold tracking-wide text-lg">
              Chicken Tikka
            </h1>
            <p className="text-gray-400 font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-white cursor-pointer"
                size={20}
              />
              <FaNotesMedical className="text-white cursor-pointer" size={17} />
            </div>
            <p className="text-white text-md font-bold">#123</p>
          </div>
        </div>
        <div className="py-2">
          <hr className="border-gray-800 border-t-2" />
          {/* Bills */}
          <Bill />
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
