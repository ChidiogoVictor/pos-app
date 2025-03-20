import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="w-[370px] bg-gray-600 p-4 rounded-lg mb-4">
      <div className="flex items-center gap-5">
        <button className="bg-amber-400 p-2 text-xl font-bold rounded-lg">
          AM
        </button>
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-white text-lg font-semibold tracking-wide">
              Chicken
            </h1>
            <p className="text-gray-300 text-sm">#101/ Naira</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className="text-green-500 bg-green-950 py-1 px-2 rounded-lg">
              <FaCheckDouble className="inline mr-2" />
              Ready
            </p>
            <p className="text-white text-sm ">
              <FaCircle className="inline mr-2 text-green-500" />
              Ready to serve
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 text-gray-300">
        <p>January 18, 2025 08:32 PM</p>
        <p>8 Items</p>
      </div>
      <hr className="w-full mt-4 border-t-2 border-gray-500" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-white text-lg font-semibold">Total</h1>
        <p className="text-white text-lg font-semibold">$ 250.00</p>
      </div>
    </div>
  );
};

export default OrderCard;
