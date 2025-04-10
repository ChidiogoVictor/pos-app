import React from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";

const Bill = () => {
  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);

  return (
    <>
      <div className="flex items-center justify-between pr-4 mt-1">
        <p className="text-xs text-white font-medium mt-2">
          Items ({cartData.lenght})
        </p>
        <h1 className="text-white text-sm font-bold mt-2"># {total}</h1>
      </div>

      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-gray-700 px-4 py-2 w-full rounded-lg text-gray-300 font-semibold">
          Cash
        </button>
        <button className="bg-gray-700 px-4 py-2 w-full rounded-lg text-gray-300 font-semibold">
          Online
        </button>
      </div>

      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-blue-800 px-4 py-2 w-full rounded-lg text-white font-semibold text-sm">
          Print Recipt
        </button>
        <button className="bg-yellow-500 px-4 py-2 w-full rounded-lg text-black font-semibold text-sm">
          Place Order
        </button>
      </div>
    </>
  );
};

export default Bill;
