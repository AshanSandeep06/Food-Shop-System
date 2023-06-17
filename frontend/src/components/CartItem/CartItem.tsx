import React from "react";
import ChickenPlate from "../../assets/img/chicken-01.png";
import DeleteIcon from "@mui/icons-material/Delete";

type CartItemState = {}

type CartItemProps = {
  itemImage: string,
  itemName: string,
  unitPrice: number,
}

const CartItem = (props: CartItemProps) => {
  return (
    <div className="pl-3 gap-2 flex items-center justify-start drop-shadow-lg bg-[rgba(256,256,256,0.4)] backdrop-blur-md rounded-xl">
      <img
        src={props.itemImage}
        alt="foodImage"
        className="mr-[6px] w-20 h-20 max-w-[65px] rounded-full object-contain"
      />
      <div className="flex flex-col mr-[6px]">
        <span>{props.itemName}</span>
        <span>
          {props.unitPrice}
          <span className="text-[#ed1e2f] text-[13px]"> LKR</span>
        </span>
      </div>

      <div className="flex gap-3 justify-center items-center">
        <span>
          <button>-</button>
        </span>
        <span className="text-sm text-gray-50 w-5 h-5 rounded-sm bg-[#282a2c] flex items-center justify-center cursor-default">
          1
        </span>
        <span>
          <button>+</button>
        </span>
        <span>
          <button className="flex justify-center items-center w-6 h-6 rounded-lg text-gray-50 bg-[rgb(232,0,19)]">
            <DeleteIcon className="!text-[16px]" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
