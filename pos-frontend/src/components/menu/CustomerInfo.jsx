import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate, getAvartarName } from "../../utils";

const CustomerInfo = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const customerData = useSelector((state) => state.customer);
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex flex-col items-start">
          <h1 className="text-md text-white font-semibold tracking-wide">
            {customerData.customerName || "Customer Name"}
          </h1>
        </div>
        <button className="bg-yellow-500 p-2 text-1 font-bold rounded-lg">
          {getAvartarName(customerData.customerName || "CN")}
        </button>
      </div>
      <div className="flex items-center justify-between px-4">
        <p className="text-sm text-gray-400 font-medium mt-1">
          # {customerData.orderId || "N/A"} /Naira
        </p>
        <p className="text-sm text-gray-400 font-medium mt-1">
          {formatDate(dateTime)}
        </p>
      </div>
    </>
  );
};

export default CustomerInfo;
