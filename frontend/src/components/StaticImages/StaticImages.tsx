import React from "react";
import { motion } from "framer-motion";
import { StaticFoodsList, StaticFoodItems } from "../../types/StaticFoodItems";

const StaticImages: React.FunctionComponent<StaticFoodsList> = ({ items }) => {
  return (
    <div className="w-full h-full absolute flex items-center justify-center top-6 left-0 lg:px-30 lg:py-4 gap-5 md:gap-8 flex-wrap text-[#4a4343] lg:-translate-x-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer !h-[210px] w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-[rgba(256,256,256,0.4)] backdrop-blur-md rounded-xl flex flex-col items-center justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            src={item.imagePath}
            alt="foodImage"
            className="w-24 lg:w-40 -mt-10 lg:-mt-20"
          />
          <p className="text-base lg:text-lg font-semibold text-textColor">
            {item.title}
          </p>
          <p className="text-[10px] lg:text-lg !text-[rgb(81,81,81)] !opacity-[0.7] font-semibold my-2 lg:my-3">
            {item.description}
          </p>
          <p className="text-sm font-semibold text-headingColor">
            {item.price}{" "}
            <span className="text-xs text-red-600 relative bottom-[0.75px]">
              LKR
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default StaticImages;
