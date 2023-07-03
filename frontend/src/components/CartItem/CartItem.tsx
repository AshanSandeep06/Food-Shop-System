import React from "react";
import ChickenPlate from "../../assets/img/chicken-01.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState, useRef } from "react";
import axios from "../../axios";
import { StaticFoodsList } from "../../types/StaticFoodItems";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import CartDetails, {
  setCartItems,
  removeFromCart,
  setCartCount,
  manualAction,
  searchCartItem,
} from "../../globalSlice";
import { log } from "console";
import { ItemDetails } from "../../types/ItemDetails";
import Swal from "sweetalert2";

type CartItemProps = {
  id: string;
  itemImage: string;
  itemName: string;
  unitPrice: string;
};

const CartItem = (props: CartItemProps) => {
  const [data, setData] = useState<StaticFoodsList>({ items: [] });
  const [itemData, setItemData] = useState<ItemDetails[]>([]);

  const [itemCount, setItemCount] = useState<number>(1);

  // To access the global cart array
  const itemCart = useSelector((state: any) => state.cartItems);
  let globalCartCount = useSelector((state: any) => state.cartCount);

  // To Modify/update the global cart array using dispatch Hook
  const dispatch = useDispatch();

  const getAllItems = () => {
    axios
      .get("item")
      .then((res) => {
        let allItems: ItemDetails[] = [];
        let imagePath = "/img/uploads/itemImages/";

        for (let i = 0; i < res.data.response.length; i++) {
          allItems.push({
            itemCode: res.data.response[i].itemCode,
            itemName: res.data.response[i].itemName,
            itemType: res.data.response[i].itemType,
            description: res.data.response[i].description,
            itemImage: imagePath + res.data.response[i].itemImage,
            qtyOnHand: res.data.response[i].qtyOnHand,
            unitPrice: res.data.response[i].unitPrice,
          });
        }
        setItemData(allItems);
      })
      .catch((error) => {
        alert("Error is : " + error);
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  // Remove Cart Item from Cart
  const handleRemoveCartItem = (itemCode: string) => {
    dispatch(removeFromCart(itemCode));
    dispatch(setCartCount(String(--globalCartCount)));
  };

  const handleDecreaseCount = (itemCode: string) => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);

      // Search item
      dispatch(searchCartItem(itemCode));

      let searchedItem = localStorage.getItem("searchCartItem");
      if (searchedItem !== null) {
        let parsedItem: CartDetails = JSON.parse(searchedItem);
        parsedItem.quantity = itemCount - 1;
        dispatch(setCartItems(parsedItem));
      }

      // dispatch(manualAction(itemCode, itemCount));
    }
  };

  const handleIncreaseCount = (itemCode: string) => {
    for (let item of itemData) {
      if (item.itemCode == itemCode) {
        if (item.qtyOnHand > 0) {
          if (item.qtyOnHand > itemCount) {
            setItemCount(itemCount + 1);

            // Search item
            dispatch(searchCartItem(itemCode));

            let searchedItem = localStorage.getItem("searchCartItem");
            if (searchedItem !== null) {
              let parsedItem: CartDetails = JSON.parse(searchedItem);
              parsedItem.quantity = itemCount + 1;
              dispatch(setCartItems(parsedItem));
            }

            // dispatch(manualAction(itemCode, itemCount));
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Can't Increase count of this item cause item limit is reached!",
              timer: 3000,
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "There has Zero Quantity of this Item..!",
            timer: 3000,
          });
        }
      }
    }
  };

  return (
    <div className="!px-[15px] gap-4 flex items-center justify-evenly drop-shadow-lg bg-[rgba(256,256,256,0.4)] backdrop-blur-md rounded-xl">
      <img
        src={props.itemImage}
        alt="foodImage"
        className="mr-[6px] w-20 h-20 max-w-[73px] rounded-full object-contain"
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
          <button onClick={() => handleDecreaseCount(props.id)}>-</button>
        </span>

        <span className="text-sm text-gray-50 w-5 h-5 rounded-sm bg-[#282a2c] flex items-center justify-center cursor-default">
          {itemCount}
        </span>

        <span>
          <button onClick={() => handleIncreaseCount(props.id)}>+</button>
        </span>

        <button
          onClick={() => handleRemoveCartItem(props.id)}
          className="flex justify-center items-center w-6 h-6 rounded-lg text-gray-50 bg-[rgb(232,0,19)]"
        >
          <DeleteIcon className="!text-[16px] !w-full !h-full !p-[3px]" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
