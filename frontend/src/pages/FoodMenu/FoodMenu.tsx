import React, { useEffect, useState } from "react";
import "../FoodMenu/FoodMenu.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LiquorIcon from "@mui/icons-material/Liquor";
import SetMealIcon from "@mui/icons-material/SetMeal";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import IcecreamIcon from "@mui/icons-material/Icecream";
import StaticImages from "../../components/StaticImages/StaticImages";
import { StaticFoodsList } from "../../types/StaticFoodItems";
import apple from "../../assets/img/apple.png";
import iceCream from "../../assets/img/icecream-01.png";
import banana from "../../assets/img/banana.png";
import strawberries from "../../assets/img/strawberries-01.png";
import chicken from "../../assets/img/chicken-01.png";
import Food from "../../components/Food";
import $ from "jquery";

const FoodMenu = () => {
  const [data, setData] = useState<StaticFoodsList>({ items: [] });

  useEffect(() => {
    setData(staticData);
  }, []);

  // Dummy Data
  const staticData: StaticFoodsList = {
    items: [
      {
        _id: 1,
        title: "Ice Cream",
        description: "Choclate & Vanilla",
        price: "350",
        imagePath: iceCream,
      },

      {
        _id: 2,
        title: "Strawberries",
        description: "Fresh Strawberries",
        price: "800",
        imagePath: strawberries,
      },

      {
        _id: 3,
        title: "Banana",
        description: "Fresh Banana",
        price: "400",
        imagePath: banana,
      },

      {
        _id: 4,
        title: "Apple",
        description: "Fresh Apples",
        price: "200",
        imagePath: apple,
      },

      {
        _id: 5,
        title: "Chicken",
        description: "BBQ Chicken",
        price: "850",
        imagePath: chicken,
      },
    ],
  };

  const setClickStyles = () => {
    $("#container > div").on("click", function () {
      $("#container > div").css({
        background: "white",
      });

      $("#container > div> span:first-child").css({
        background: "rgb(232,0,19)",
      });

      $("#container > div> span:last-child").css({
        color: "rgb(81,81,81,0.8)",
      });

      $(this).css({
        background: "#f97316",
      });

      let lastSpan = $(this).children(":eq(1)");
      $(lastSpan).css({
        color: "white",
      });

      let firstSpan = $(this).children(":eq(0)");
      $(firstSpan).css({
        background: "#0c1b6e",
      });
    });
  };

  return (
    <section className="w-full flex items-center flex-col px-4 pt-4">
      <div className="mb-2">
        <h1 className="relative pb-[8px]" id="foodMenuHeading">
          Our Food Menu
        </h1>
      </div>

      <div
        id="container"
        className="!text-[rgb(81,81,81)] md:justify-start xl:justify-center justify-start overflow-x-scroll scrollbar-hidden scroll-smooth flex w-full px-10 md:px-20 py-10 items-center gap-10"
      >
        <div
          className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5"
          onClick={setClickStyles}
        >
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <MenuBookIcon className="text-[#ece1e1]" />
          </span>
          <span>Menu</span>
        </div>

        <div
          className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5"
          onClick={setClickStyles}
        >
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <RestaurantMenuIcon className="text-[#ece1e1]" />
          </span>
          <span>Chicken</span>
        </div>

        <div
          className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5"
          onClick={setClickStyles}
        >
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <LiquorIcon className="text-[#ece1e1]" />
          </span>
          <span>Beverages</span>
        </div>

        <div
          className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5"
          onClick={setClickStyles}
        >
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <SetMealIcon className="text-[#ece1e1]" />
          </span>
          <span>Fish</span>
        </div>

        <div
          className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5"
          onClick={setClickStyles}
        >
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <RiceBowlIcon className="text-[#ece1e1]" />
          </span>
          <span>Rice</span>
        </div>

        <div
          className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5"
          onClick={setClickStyles}
        >
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <LunchDiningIcon className="text-[#ece1e1]" />
          </span>
          <span>Burgers</span>
        </div>

        <div
          className="h-32 min-w-[8rem] rounded-lg flex flex-col items-center justify-center gap-5"
          onClick={setClickStyles}
        >
          <span className="bg-[rgb(232,0,19)] rounded-full border-2 border-white w-10 h-10 flex justify-center items-center">
            <IcecreamIcon className="text-[#ece1e1]" />
          </span>
          <span>Ice Cream</span>
        </div>
      </div>

      <div className="flex justify-center flex-wrap px-5 w-full mt-3 bg-[#F5EEE9]">
        {/* For Testing */}
        <Food items={data.items} />
      </div>
    </section>
  );
};

export default FoodMenu;
