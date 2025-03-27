import React from "react";

const CustomerInfo = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-md text-white font-semibold tracking-wide">
          Customer Name
        </h1>
        <p className="text-sm text-gray-400 font-medium mt-1"># 101 / Naira</p>
        <p className="text-sm text-gray-400 font-medium mt-2">
          January 19, 2025 05:34 PM
        </p>
      </div>
      <button className="bg-yellow-500 p-3 text-1 font-bold rounded-lg">
        CN
      </button>
    </div>
  );
};

export default CustomerInfo;
