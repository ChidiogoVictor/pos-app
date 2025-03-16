import React from "react";
import {
  FaHome,
  MdOutLineReorder,
  MdTableBar,
  CiCircleMore,
} from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-2 flex justify-around">
      <button>
        <FaHome className="inline mr-4" size={15} />
        Home
      </button>
      <button>
        <MdOutLineReorder className="inline mr-4" size={15} />
        Orders
      </button>
      <button>
        <MdTableBar className="inline mr-4" size={15} />
        Tables
      </button>
      <button>
        <CiCircleMore className="inline mr-4" size={15} />
        More
      </button>
    </div>
  );
};

export default BottomNav;
