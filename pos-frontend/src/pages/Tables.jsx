import React, { useState } from "react";
import BackButton from "../components/shared/BackButton";
import BottomNav from "../components/shared/BottomNav";
import TableCard from "../components/Tables/TableCard";
import { tables } from "../constants";

const Tables = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className="bg-gray-800 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-white text-2xl font-bold tracking-wider">
            Tables
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
            onClick={() => setStatus("booked")}
            className={`text-gray-300 text-lg ${
              status === "booked" && "rounded-lg bg-gray-600 px-4 py-1"
            } rounded-lg px-4 py-1 font-semibold"`}
          >
            Booked
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-center overflow-y-scroll scrollbar-hide h-[calc(100vh-9rem-5rem)] px-11 py-4">
        {tables.map((table) => {
          return (
            <TableCard
              key={table.id}
              id={table.id}
              name={table.name}
              status={table.status}
              initials={table.initial}
            />
          );
        })}
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;
