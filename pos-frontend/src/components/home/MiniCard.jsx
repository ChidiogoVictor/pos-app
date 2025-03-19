import React from "react";

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className="bg-gray-950 py-3 px-5 rounded-lg w-[50%]">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-lg font-semibold tracking-wide">
          {title}
        </h1>
        <button
          className={`${
            title === "Total Earnings" ? "bg-green-500" : "bg-amber-400"
          } p-2 rounded-lg text-white text-2xl`}
        >
          {icon}
        </button>
      </div>
      <div>
        <h1 className="text-white text-2xl font-bold mt-3">{number}</h1>
        <h1 className="text-white text-lg mt-2">
          <span className="text-green-500">{footerNum}%</span> than yesterday
        </h1>
      </div>
    </div>
  );
};

export default MiniCard;
