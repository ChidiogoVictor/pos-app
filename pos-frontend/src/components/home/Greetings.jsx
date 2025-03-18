import React, { useEffect, useState } from "react";

const Greetings = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer); // ✅ Cleanup interval on unmount
  }, []);

  // Format date as "Month DD, YYYY"
  const formatDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
      2,
      "0"
    )}, ${date.getFullYear()}`;
  };

  // Format time as "HH:MM:SS"
  const formatTime = (date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      {/* Left Greeting Section */}
      <div>
        <h1 className="text-white text-2xl font-semibold tracking-wide">
          Good Morning, Armit
        </h1>
        <p className="text-gray-400 text-sm">
          Give your best services for customers
        </p>
      </div>

      {/* Right Time & Date Section */}
      <div className="">
        <h1 className="text-white text-3xl font-bold tracking-wide w-[130px]">
          {formatTime(dateTime)}
        </h1>
        <p className="text-gray-400 text-sm">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greetings;
