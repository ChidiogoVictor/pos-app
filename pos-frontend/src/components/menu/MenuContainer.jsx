import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState();
  const dispatch = useDispatch();

  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };

  const decrement = (id) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  const handleAddToCart = (item) => {
    if (itemCount === 0) return;

    const { name, price } = item;
    const newObj = {
      id: new Date(),
      name,
      pricePerQuantity: price,
      quantity: itemCount,
      price: price * itemCount,
    };

    dispatch(addItems(newObj));
    setItemCount(0);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-3 rounded-lg h-[80px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemId(0);
                setItemCount(0);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-white text-base font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id == menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-gray-300 text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border-gray-700 border-t-2 mt-4" />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-3 rounded-lg h-[100px] cursor-pointer hover:bg-gray-900 bg-black"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-white text-sm font-semibold">
                  {item.name}
                </h1>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="text-white bg-green-500 rounded-lg p-1 text-xl cursor-pointer"
                >
                  <FaShoppingCart />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-gray-300 text-sm font-semibold">
                  # {item.price}
                </p>
                <div className="flex items-center justify-between bg-gray-800 px-1 rounded-lg gap-3">
                  <button
                    onClick={() => decrement(item.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &minus;
                  </button>
                  <span className="text-white">
                    {" "}
                    {item.id === itemId ? itemCount : "0"}
                  </span>
                  <button
                    onClick={() => increment(item.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
