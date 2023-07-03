import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { StaticFoodsList } from "../../types/StaticFoodItems";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Food.css";
import { useSelector, useDispatch } from "react-redux";
import state from "sweetalert/typings/modules/state";
import { setCartCount, setCartItems } from "../../globalSlice";
import $ from "jquery";
import { useRef } from "react";
import { log } from "console";

const Food = (props: StaticFoodsList) => {
  let globalCartCount = useSelector((state: any) => state.cartCount);
  let cart = useSelector((state: any) => state.cartItems);

  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    let count = 0;

    let element = $(e.target).parent().parent();
    if (element[0].id) {
      for (let item of cart.cartItems) {
        if (item.itemCode == element[0].id) {
          count++;
        }
      }

      if (count == 0) {
        dispatch(setCartCount(++globalCartCount));
        dispatch(
          setCartItems({
            itemCode: element[0].id,
            itemImage: element.children(":eq(0)").attr("src"),
            itemName: element.children(":eq(1)").text(),
            unitPrice: element.children(":eq(3)").text().split(" ")[0],
            quantity: 1
          })
        );
      }
    } else if (element.parent()[0].id) {
      for (let item of cart.cartItems) {
        if (item.itemCode == element.parent()[0].id) {
          count++;
        }
      }

      if (count == 0) {
        dispatch(setCartCount(++globalCartCount));
        // dispatch(setCartItems(element.parent()[0].id));

        dispatch(
          setCartItems({
            itemCode: element.parent()[0].id,
            itemImage: element.parent().children(":eq(0)").attr("src"),
            itemName: element.parent().children(":eq(1)").text(),
            unitPrice: element.parent().children(":eq(3)").text().split(" ")[0],
            quantity: 1
          })
        );
      }
    }
    count = 0;
  };

  return (
    <div className="w-full h-full flex items-center justify-center top-6 left-0 lg:px-30 lg:pt-4 gap-5 md:gap-8 flex-wrap text-[#4a4343] xl:-translate-x-2 mb-12">
      {props.items.map((item) => (
        <div
          id={item._id}
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

          <motion.span
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            className="cartIcon bg-[rgb(232,0,19)] rounded-full border-white w-10 h-10 flex justify-center items-center"
          >
            <AddShoppingCartIcon className="text-[#ece1e1] !w-full !h-full !p-2" />
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default Food;
