import React from "react";
import "../FoodMenu/FoodMenu.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LiquorIcon from "@mui/icons-material/Liquor";
import SetMealIcon from "@mui/icons-material/SetMeal";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import IcecreamIcon from "@mui/icons-material/Icecream";

const FoodMenu = () => {
  return (
    <section className="w-full flex items-center flex-col px-4 pb-8 pt-4">
      <div className="mb-7">
        <h1 className="relative pb-[8px]" id="foodMenuHeading">
          Our Food Menu
        </h1>
      </div>

      <div
        id="container"
        className="!text-[rgb(81,81,81)] md:justify-start xl:justify-center justify-start overflow-x-scroll scrollbar-hidden scroll-smooth flex w-full px-10 md:px-20 py-10 items-center gap-10"
      >
        <div className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <MenuBookIcon className="text-[#ece1e1]" />
          </span>
          <span>Menu</span>
        </div>

        <div className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <RestaurantMenuIcon className="text-[#ece1e1]" />
          </span>
          <span>Chicken</span>
        </div>

        <div className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <LiquorIcon className="text-[#ece1e1]" />
          </span>
          <span>Beverages</span>
        </div>

        <div className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <SetMealIcon className="text-[#ece1e1]" />
          </span>
          <span>Fish</span>
        </div>

        <div className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <RiceBowlIcon className="text-[#ece1e1]" />
          </span>
          <span>Rice</span>
        </div>

        <div className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <LunchDiningIcon className="text-[#ece1e1]" />
          </span>
          <span>Burgers</span>
        </div>

        <div className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5">
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <IcecreamIcon className="text-[#ece1e1]" />
          </span>
          <span>Ice Cream</span>
        </div>
      </div>

      <div>
        
      </div>
    </section>
  );
};

export default FoodMenu;
