import React from "react";
import ChickenPlate from "../../assets/img/chicken-01.png";

const OrderedItem = () => {
  return (
    <div className="px-3 gap-4 flex items-center justify-start drop-shadow-lg bg-[rgba(256,256,256,0.4)] backdrop-blur-md rounded-xl">
      <img
        src={ChickenPlate}
        alt="foodImage"
        className="mr-[6px] w-20 h-20 max-w-[65px] rounded-full object-contain"
      />
      <div className="flex flex-col mr-[6px]">
        <span>Chicken Plate</span>
        <span>
          850
          <span className="text-[#ed1e2f] text-[13px]"> LKR</span>
        </span>
      </div>

      <div className="flex gap-3 justify-center items-center">
        <span className="text-sm text-gray-50 w-5 h-5 rounded-sm bg-[#282a2c] flex items-center justify-center cursor-default">
          1
        </span>
      </div>
    </div>
  );
};

export default OrderedItem;
