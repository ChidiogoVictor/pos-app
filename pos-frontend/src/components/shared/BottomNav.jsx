import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

const BottomNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-2 h-16 flex justify-around">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center text-white bg-gray-700 w-[150px] rounded-[20px]"
      >
        <FaHome className="inline mr-2 text-xl" />
        <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="flex items-center justify-center text-white bg-gray-700 w-[150px] rounded-[20px]"
      >
        <MdOutlineReorder className="inline mr-2 text-xl" />
        <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className="flex items-center justify-center text-white bg-gray-700 w-[150px] rounded-[20px]"
      >
        <MdTableBar className="inline mr-2 text-xl" />
        <p>Tables</p>
      </button>
      <button className="flex items-center justify-center text-white bg-gray-700 w-[150px] rounded-[20px]">
        <CiCircleMore className="inline mr-2 text-xl" />
        <p>More</p>
      </button>
      <button
        onClick={openModal}
        className="absolute bottom-9 bg-amber-300 text-white rounded-full p-3 items-center"
      >
        <BiSolidDish className="text-xl" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-gray-300 mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-gray-800">
            <input
              type="text"
              name=""
              placeholder="Enter customer name"
              id=""
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-300 mb-2 mt-3 text-sm font-medium">
            Customer Phone
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-gray-800">
            <input
              type="number"
              name=""
              placeholder="+234 9999999999"
              id=""
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-gray-300">
            Guest
          </label>
          <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-lg">
            <button onClick={decrement} className="text-yellow-500 text-2xl">
              &minus;
            </button>
            <span className="text-white">{guestCount} Person</span>
            <button onClick={increment} className="text-yellow-500 text-2xl">
              &#43;
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate("/tables")}
          className="w-full bg-amber-300 text-gray-300 rounded-lg py-3 mt-8 hover:bg-yellow-700"
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
