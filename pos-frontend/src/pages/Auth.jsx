import React from "react";
import restaurant from "../assets/images/restaurant-img.jpg";
import logo from "../assets/images/logo.png";

const Auth = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section*/}
      <div className="w-1/2 relative flex items-center justify-center bg-cover">
        {/* BG Image */}
        <img
          className="w-full h-full object-cover"
          src={restaurant}
          alt="Restaurant Image"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Quote at buttom */}
        <blockquote className="absolute bottom-5 px-10 mb-5 text-2xl italic text-white">
          "Serve customers with the best food and friendly service in a
          welcoming atmosphere, and they will keep coming back."
          <br />
          <span className="block mt-4 text-yellow-400">Founder of Zanotti</span>
        </blockquote>
      </div>
      {/* Right Section */}
      <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">
        <div className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="Retro Logo"
            className="h-14 w-14 border-2 rounded-full p-1"
          />
          <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">
            Zanotti
          </h1>
        </div>
        <h2 className="text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10">
          Employee Registration
        </h2>

        {/* Components */}
        {/* <Register /> */}

        <div className="flex justify-centermt-6">
          <p className="text-sm text-gray-200">
            Already have an account?
            <a
              className="text-yellow-400 font-semibold hover:underline"
              href="#"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
