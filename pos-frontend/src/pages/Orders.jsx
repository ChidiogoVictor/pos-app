import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/Orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-gray-800 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-1">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-white text-2xl font-bold tracking-wider">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-gray-300 text-lg ${
              status === "all" && "rounded-lg bg-gray-600 px-4 py-1"
            } rounded-lg px-4 py-1 font-semibold"`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("progress")}
            className={`text-gray-300 text-lg ${
              status === "progress" && "rounded-lg bg-gray-600 px-4 py-1"
            } rounded-lg px-4 py-1 font-semibold"`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`text-gray-300 text-lg ${
              status === "ready" && "rounded-lg bg-gray-600 px-4 py-1"
            } rounded-lg px-4 py-1 font-semibold"`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-gray-300 text-lg ${
              status === "completed" && "rounded-lg bg-gray-600 px-4 py-1"
            } rounded-lg px-4 py-1 font-semibold"`}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-between overflow-y-scroll scrollbar-hide h-[calc(100vh-9rem-5rem)] px-10 py-4">
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
