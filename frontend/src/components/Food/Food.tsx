import React from "react";
import { motion } from "framer-motion";
import { StaticFoodsList } from "../../types/StaticFoodItems";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Food = (props: StaticFoodsList) => {
  return (
    <div className="w-full h-full flex items-center justify-center top-6 left-0 lg:px-30 lg:pt-4 gap-5 md:gap-8 flex-wrap text-[#4a4343] xl:-translate-x-2 mb-12">
      {props.items.map((item) => (
        <div
          key={item._id}
          className="mt-10 cursor-pointer !h-[265px] !w-[275px] lg:min-w-[250px] drop-shadow-lg p-2 bg-[rgba(256,256,256,0.4)] backdrop-blur-md rounded-xl flex flex-col items-center justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            src={item.imagePath}
            alt="foodImage"
            className="w-40 lg:w-40 -mt-10 lg:-mt-20 h-40 object-contain"
          />
          <p className="text-md lg:text-lg font-semibold text-textColor">
            {item.title}
          </p>
          <p className="text-[10px] lg:text-lg !text-[rgb(81,81,81)] !opacity-[0.7] font-semibold my-2 lg:my-3">
            {item.description}
          </p>
          <p className="text-sm font-semibold text-headingColor pb-[13px]">
            {item.price}{" "}
            <span className="text-xs text-red-600 relative bottom-[0.75px]">
              LKR
            </span>
          </p>

          <span className="bg-[rgb(232,0,19)] rounded-full border-white w-10 h-10 flex justify-center items-center">
            <AddShoppingCartIcon className="text-[#ece1e1]" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Food;