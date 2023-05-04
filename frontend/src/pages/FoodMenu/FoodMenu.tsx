import React from "react";
import "../FoodMenu/FoodMenu.css";

const FoodMenu = () => {
  return (
    <section className="w-full flex items-center flex-col bg-yellow-100 px-4 pb-8 pt-4">
      <div className="mb-7">
        <h1 className="relative pb-[8px]" id="foodMenuHeading">
          Our Food Menu
        </h1>
      </div>

      <div className="bg-blue-700 md:justify-start xl:justify-center justify-start overflow-x-scroll scrollbar-hidden scroll-smooth flex w-full px-10 md:px-20 py-10 text-white items-center gap-10">
        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg">Menu</div>
        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg">Chicken</div>
        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg">Beverages</div>
        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg">Fish</div>
        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg">Rice</div>
        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg">Ice Cream</div>
      </div>
    </section>
  );
};

export default FoodMenu;
