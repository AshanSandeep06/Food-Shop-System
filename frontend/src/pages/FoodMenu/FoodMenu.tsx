import React from "react";
import "../FoodMenu/FoodMenu.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LiquorIcon from "@mui/icons-material/Liquor";
import SetMealIcon from "@mui/icons-material/SetMeal";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import IcecreamIcon from '@mui/icons-material/Icecream';

const FoodMenu = () => {
  return (
    <section className="w-full flex items-center flex-col bg-yellow-100 px-4 pb-8 pt-4">
      <div className="mb-7">
        <h1 className="relative pb-[8px]" id="foodMenuHeading">
          Our Food Menu
        </h1>
      </div>

      <div className="bg-blue-700 md:justify-start xl:justify-center justify-start overflow-x-scroll scrollbar-hidden scroll-smooth flex w-full px-10 md:px-20 py-10 text-white items-center gap-10">
        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="rounded-full border-2 border-white w-10 h-10 flex justify-center items-center"></span>
          <span>Menu</span>
        </div>

        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="rounded-full border-2 border-white w-10 h-10 flex justify-center items-center"></span>
          <span>Chicken</span>
        </div>

        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="rounded-full border-2 border-white w-10 h-10 flex justify-center items-center"></span>
          <span>Beverages</span>
        </div>

        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="rounded-full border-2 border-white w-10 h-10 flex justify-center items-center"></span>
          <span>Fish</span>
        </div>

        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="rounded-full border-2 border-white w-10 h-10 flex justify-center items-center"></span>
          <span>Rice</span>
        </div>

        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="rounded-full border-2 border-white w-10 h-10 flex justify-center items-center"></span>
          <span>Burgers</span>
        </div>

        <div className="border-2 border-black h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="rounded-full border-2 border-white w-10 h-10 flex justify-center items-center"></span>
          <span>Ice Cream</span>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
