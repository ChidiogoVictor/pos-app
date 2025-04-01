import React from "react";
import BackButton from "../components/shared/BackButton";
import BottomNav from "../components/shared/BottomNav";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import { useSelector } from "react-redux";

const Menu = () => {
  const customerData = useSelector((state) => state.customer);

  return (
    <section className="bg-gray-800 h-[calc(100vh-5rem)] flex gap-3">
      {/* Left Div*/}
      <div className="flex-3 overflow-y-scroll mb-16">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-white text-2xl font-bold tracking-wider">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-white text-2xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-white font-semibold">
                  {customerData.customerName}
                </h1>
                <p className="text-xs text-gray-200 font-medium">{customerData.tableNo}</p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      {/* Right Div*/}
      <div className="flex-1 bg-black mt-4 mr-3 h-[calc(85vh-5rem)] rounded-lg pt-2">
        {/* Customer Info*/}
        <CustomerInfo />
        <hr className="border-gray-800 border-t-2" />
        {/* Cart Items*/}
        <CartInfo />
      </div>
      <BottomNav />
    </section>
  );
};

export default Menu;
