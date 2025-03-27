import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="px-6">
      <div className="flex items-center gap-5 border-1 border-gray-400 rounded-lg px-6 py-1">
        <button className="bg-amber-400 p-2 text-xl font-bold rounded-lg">
          AM
        </button>
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-white text-lg font-semibold tracking-wide">
              Chicken
            </h1>
            <p className="text-gray-300 text-sm">8 items</p>
          </div>
          <div>
            <h1 className="text-amber-300 font-semibold border border-amber-300 rounded-xl p-1">
              Table No: 3
            </h1>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-green-500   bg-green-900 rounded-lg px-4">
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
    </div>
  );
};

export default OrderList;
