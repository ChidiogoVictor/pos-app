import React from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/Orders/OrderCard";

const Orders = () => {
  return (
    <section className="bg-gray-800 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-1">
        <h1 className="text-white text-2xl font-bold tracking-wider">Orders</h1>
        <div className="flex items-center justify-around gap-4">
          <button className="text-gray-300 text-lg rounded-lg px-4 py-1 font-semibold">
            All
          </button>
          <button className="text-gray-300 text-lg bg-gray-600 rounded-lg px-4 py-1 font-semibold">
            In Progress
          </button>
          <button className="text-gray-300 text-lg rounded-lg px-4 py-1 font-semibold">
            Ready
          </button>
          <button className="text-gray-300 text-lg rounded-lg px-4 py-1 font-semibold">
            Completed
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-between overflow-y-scroll scrollbar-hide h-[calc(100vh-8rem-5rem)] px-10 py-4">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <BottomNav />
    </section>
  );
};

export default Orders;
