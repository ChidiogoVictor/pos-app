import React, { useEffect, useRef } from "react";
import { FaNotesMedical } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Bill from "./Bill";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="pl-4 py-2">
      <h1 className="text-lg text-white font-semibold tracking-wide">
        Order Details
      </h1>

      <div className=" overflow-y-scroll h-[260px]" ref={scrollRef}>
        {cartData.length === 0 ? (
          <p className="text-gray-300 text-sm flex justify-center items-center h-[260px]">
            Your cart is empty. Start adding items.
          </p>
        ) : (
          cartData.map((item) => {
            return (
              <div className="bg-gray-900 rounded-lg px-4 py-2 mr-4 mb-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-gray-400 font-semibold tracking-wide text-lg">
                    {item.name}
                  </h1>
                  <p className="text-gray-400 font-semibold">
                    x{item.quantity}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-3">
                    <RiDeleteBin2Fill
                      onClick={() => handleRemove(item.id)}
                      className="text-white cursor-pointer"
                      size={20}
                    />
                    <FaNotesMedical
                      className="text-white cursor-pointer"
                      size={17}
                    />
                  </div>
                  <p className="text-white text-md font-bold">#{item.price}</p>
                </div>
              </div>
            );
          })
        )}
        <div className="py-2">
          <hr className="border-gray-800 border-t-2" />
          {/* Bills */}
          <Bill />
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
