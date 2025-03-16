import React from "react";

const Home = () => {
  return (
    <section className="bg-gray-800 h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Div */}
      <div className="flex-[3] bg-red-600"></div>
      <div className="flex-[2] bg-blue-600"></div>
    </section>
  );
};

export default Home;
