import React from "react";
import "../FoodMenu/FoodMenu.css";

const FoodMenu = () => {
  return (
    <section
      className="w-full flex items-center flex-col bg-yellow-100
    col-start-1 col-end-3 px-4 pb-8 pt-4"
    >
      <div className="mb-7">
        <h1 className="relative pb-[8px]" id="foodMenuHeading">
          Our Food Menu
        </h1>
      </div>

      <div className="bg-blue-700">
        <div className="border-2 border-black">Menu</div>
        <div className="border-2 border-black">Chicken</div>
        <div className="border-2 border-black">Beverages</div>
        <div className="border-2 border-black">Fish</div>
        <div className="border-2 border-black">Rice</div>
        <div className="border-2 border-black">Ice Cream</div>
      </div>
    </section>
  );
};

export default FoodMenu;
