import React from "react";
import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div className="mt-3 pr-6">
      <div className="bg-black w-full rounded-lg">
        <div className="flex justify-between items-center px-6 py-2">
          <h1 className="text-white text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a href="" className="text-blue-700 text-sm font-semibold">
            View all
          </a>
        </div>

        <div className="overflow-y-scroll h-[365px]">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center gap-4 bg-gray-800 rounded-[15px] px-6 py-4 my-4 mx-6"
              >
                <h1 className="text-white font-bold text-xl">
                  {dish.id < 10 ? `0${dish.id}` : dish.id}
                </h1>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <div>
                  <h1 className="text-white font-semibold">{dish.name}</h1>
                  <p className="text-white text-sm font-semibold mt-1">
                    <span className="text-gray-300">Orders: </span>
                    {dish.numberOfOrders}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
