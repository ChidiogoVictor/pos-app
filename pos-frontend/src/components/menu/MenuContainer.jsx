import React from "react";

const MenuContainer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-center justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: getBgColor() }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
