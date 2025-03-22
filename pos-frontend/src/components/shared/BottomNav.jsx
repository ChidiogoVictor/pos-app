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
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create Order"
      ></Modal>
    </div>
  );
};

export default BottomNav;
