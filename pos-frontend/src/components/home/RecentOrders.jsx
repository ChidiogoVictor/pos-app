import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="px-6 mt-2 mx-2 mb-20">
      <div className="bg-black w-full rounded-lg">
        <div className="flex justify-between items-center px-8 py-2">
          <h1 className="text-white text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-blue-700 text-sm font-semibold">
            View all
          </a>
        </div>
        <div className="pr-4">
          <div className="flex items-center gap-4 bg-gray-800 rounded-[15px] px-6 py-2 mx-6">
            <FaSearch className="text-white" />
            <input
              type="text"
              placeholder="Search recent orders"
              className="bg-gray-800 outline-none text-white"
            />
          </div>
        </div>
        {/* Order List */}
        <div className=" py-2 overflow-y-scroll h-[170px]">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
