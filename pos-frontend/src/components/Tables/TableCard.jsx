import React from "react";
import { getRandomBG } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";

const TableCard = ({ name, status, initial, seats }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (name) => {
    if (status === "Booked") return;
    dispatch(updateTable({ tableNo: name }));
    navigate("/menu");
  };
  return (
    <div
      onClick={() => handleClick(name)}
      className="w-[270px] bg-gray-600 hover:bg-gray-500 p-3 rounded-lg mb-1 cursor-pointer"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-white text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-white bg-green-950"
              : "bg-amber-900 text-white"
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center my-5">
        <h1 className={`${getRandomBG()} text-white rounded-full p-3 text-xl`}>
          {initial}
        </h1>
      </div>
      <p className="text-white text-xs">
        Seats: <span className="text-white">{seats}</span>
      </p>
    </div>
  );
};

export default TableCard;
