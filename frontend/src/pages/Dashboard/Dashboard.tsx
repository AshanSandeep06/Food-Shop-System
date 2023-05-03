import React from "react";
import deliveryPhoto from "../../assets/img/delivery.png";
import backgroundImage from "../../assets/img/hero-bg.png";
import { motion } from "framer-motion";
import StaticImages from "../../components/StaticImages";
import { StaticFoodItems, StaticFoodsList } from "../../types/StaticFoodItems";
import apple from "../../assets/img/apple.png";
import iceCream from "../../assets/img/icecream-01.png";
import banana from "../../assets/img/banana.png";
import strawberries from "../../assets/img/strawberries-01.png";
import chicken from "../../assets/img/chicken-01.png";

const Dashboard = () => {
  const staticData: StaticFoodsList = {
    items: [
      {
        id: 1,
        title: "Ice Cream",
        description: "Choclate & Vanilla",
        price: "350",
        imagePath: iceCream,
      },

      {
        id: 2,
        title: "Strawberries",
        description: "Fresh Strawberries",
        price: "800",
        imagePath: strawberries,
      },

      {
        id: 3,
        title: "Banana",
        description: "Fresh Banana",
        price: "400",
        imagePath: banana,
      },

      {
        id: 4,
        title: "Apple",
        description: "Fresh Apples",
        price: "200",
        imagePath: apple,
      },
    ],
  };

  return (
    <>
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-bold">Bike Delivery</p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={deliveryPhoto}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Food Delivery in
          <span className="text-orange-600 text-[2.5rem] lg:text-[4.0rem]">
            {" "}
            Galle Fort
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          At our food shop, we are passionate about providing our customers with
          high-quality and delicious food options. We take pride in sourcing
          only the freshest and most wholesome ingredients, ensuring that every
          dish we prepare is not only tasty but also healthy.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full 
          md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all 
          ease-in-out duration-100 !text-white"
        >
          Order Now
        </motion.button>
      </div>

      <div className="py-2 flex-1 flex items-center relative mb-[35px]">
        <img
          src={backgroundImage}
          alt=""
          className="ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto md:h-full"
        />
        <StaticImages items={staticData.items} />
      </div>
    </>
  );
};

export default Dashboard;
