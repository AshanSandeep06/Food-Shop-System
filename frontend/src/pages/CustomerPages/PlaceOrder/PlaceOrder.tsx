import React, { useEffect, useRef, useState } from "react";
import "./PlaceOrder.css";
import Table from "../../../components/Table/Table";
import { Button, Paper, TextField } from "@mui/material";
import Form from "../../../components/Form/Form";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { ItemDetails } from "../../../types/ItemDetails";
import axios from "../../../axios";
import { useDispatch, useSelector } from "react-redux";
import { motion, sync } from "framer-motion";
import CartDetails, {
  removeAllCartItems,
  setCartCount,
} from "../../../globalSlice";
import { Order } from "../../../types/Order";
import { OrderDetail } from "../../../types/OrderDetail";

const PlaceOrder = () => {
  const [cartItemsList, setCartItemsList] = useState<Array<string[] | any[]>>([]);
  let tempCartItemsList: (any[] | string[])[] = [];

  const cart = useSelector((state: any) => state.cartItems);
  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  const [customerName, setCustomerName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [deliveryLocation, setDeliveryLocation] = useState<string>("");

  const [orderID, setOrderID] = useState<string>("asdasd");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  //State Hook
  const [state, setState] = useState({});

  const { DateTime } = require("luxon");

  const getAllItems = () => {
    axios
      .get("item")
      .then((res) => {
        // console.log(res.data.response);
        // console.log(res.data.response.length);

        let allItems = [];
        let imagePath = "/img/uploads/itemImages/";

        for (let i = 0; i < res.data.response.length; i++) {
          allItems.push([
            res.data.response[i].itemCode,
            res.data.response[i].itemName,
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              src={imagePath + res.data.response[i].itemImage}
              alt="foodImage"
              className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
            />,
            res.data.response[i].unitPrice,
            res.data.response[i].qtyOnHand,
          ]);
        }

        setInitialData(allItems);
      })
      .catch((error) => {
        alert("Error is : " + error);
      });
  };

  // ---------------------------------------------------------------------

  useEffect(() => {
    getAllItems();
  }, [cart.cartItems]);

  const setInitialData = (allItems: (any[] | string[])[]) => {
    for (let dataRow of allItems) {
      for (let cartItem of cart.cartItems) {
        if (dataRow[0] == cartItem.itemCode) {
          dataRow[4] = cartItem.quantity;
          tempCartItemsList.push(dataRow);
          break;
        }
      }
    }
    setCartItemsList(tempCartItemsList);

    let subTotal = 0;
    setTotal(0);
    // set subtotal and total
    for (let itemRow of tempCartItemsList) {
      var totalItemPrice = parseFloat(itemRow[3]) * parseFloat(itemRow[4]);
      console.log(totalItemPrice);
      subTotal = subTotal + totalItemPrice;
    }

    if (tempCartItemsList.length !== 0) {
      setDeliveryFee(150.0);
    } else {
      setDeliveryFee(0.0);
    }

    setSubTotal(subTotal);
    setTotal(subTotal + (subTotal != 0 ? 150.0 : 0));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name == "customerName") {
      setCustomerName(value);
    } else if (name == "contactNumber") {
      setContactNumber(value);
    } else {
      setDeliveryLocation(value);
    }
  };

  const handleCancelOrder = () => {
    dispatch(removeAllCartItems());
    dispatch(setCartCount(String(0)));
    setCustomerName("");
    setContactNumber("");
    setDeliveryLocation("");
    setDeliveryFee(0);
    setTotal(0);
  };

  const handlePlaceOrder = () => {
    setCurrentDate(DateTime.now().toISODate());
    setCurrentTime(DateTime.local().toLocaleString(DateTime.TIME_SIMPLE));

    console.log(currentDate);
    console.log(currentTime);

    axios
      .get("order/generateNewOrderID")
      .then((res) => {
        console.log("Sucess Invoked");
        setOrderID(res.data.response);

        let orderDetails: OrderDetail[] = [];
        for (let cartItem of cart.cartItems) {
          orderDetails.push({
            orderID: res.data.response,
            itemCode: cartItem.itemCode,
            itemName: cartItem.itemName,
            unitPrice: cartItem.unitPrice,
            orderedQty: cartItem.quantity,
          });
        }

        // Place Order function
        let newOrder: Order = {
          orderID: res.data.response,
          orderDate: DateTime.now().toISODate(),
          orderTime: DateTime.local().toLocaleString(DateTime.TIME_SIMPLE),
          subTotal: subTotal,
          deliveryFee: deliveryFee,
          totalCost: total,
          orderStatus: "Pending",
          deliveryLocation: deliveryLocation,
          customerID: "C00-001",
          orderDetails: orderDetails,
        };

        console.log(newOrder);

        axios
          .post("order", newOrder, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log("Sucess Invoked");
            console.log(res);
            handleCancelOrder();
          })
          .catch((error) => {
            console.log("Error Invoked");
            console.log(error);
            handleCancelOrder();
          });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Invoked");
        handleCancelOrder();
      });
  };

  return (
    <section>
      {/* ----- Cart Items Table ----- */}
      <Table
        tblName="Your Items Cart"
        tblHeight="159px"
        tblHeaders={[
          "Item Code",
          "Description",
          "Item Image",
          "Unit Price",
          "Quantity",
        ]}
        tblData={cartItemsList.map((itemArray) => itemArray)}
      />

      {/* ===================================================== */}

      {/* --------- Payment --------- */}
      <section className="my-12 flex justify-center">
        <Paper
          className="md:w-1/3 sm:w-3/4 w-full border border-slate-300 grid grid-cols-1 sm:flex sm:flex-col sm:gap-4 p-6 !bg-[#FAFAFF]"
          elevation={5}
        >
          <div className="grid mb-[5px] sm:mb-0 justify-center sm:flex sm:items-center sm:gap-6 !text-[rgb(81,81,81)]">
            <span className="text-[20px] font-bold sm:font-normal md:text-lg">
              Sub Total
            </span>
            <span className="hidden sm:block">-</span>
            <span className="text-[18px] md:text-lg">
              {subTotal}
              {".00 "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>

          <div className="grid mb-[10px] sm:mb-0 justify-center sm:flex sm:items-center sm:gap-6 !text-[rgb(81,81,81)]">
            <span className="text-[20px] font-bold sm:font-normal md:text-lg">
              Delivery Fee
            </span>
            <span className="hidden sm:block">-</span>
            <span className="text-[18px] md:text-lg">
              {deliveryFee}
              {".00 "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>

          <Divider />

          <div className="grid justify-center sm:flex sm:items-center sm:gap-6 !text-[rgb(81,81,81)]">
            <span className="text-[20px] font-bold sm:font-normal md:text-lg">
              TOTAL
            </span>
            <span className="hidden sm:block">-</span>
            <span className="text-[18px] md:text-lg">
              {total}
              {".00 "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>
        </Paper>
      </section>

      {/* ===================================================== */}

      {/* --------- Form --------- */}
      <Form
        textFieldsArray={[
          {
            label: "Your Name",
            textFieldType: "text",
            name: "customerName",
            placeHolderText: "Your Name",
            value: customerName,
            onChange: handleInputChange,
          },

          {
            label: "Contact Number",
            textFieldType: "text",
            name: "contactNumber",
            placeHolderText: "Contact Number",
            value: contactNumber,
            onChange: handleInputChange,
          },

          {
            label: "Delivery Location",
            textFieldType: "text",
            name: "deliveryLocation",
            placeHolderText: "Delivery Location",
            value: deliveryLocation,
            onChange: handleInputChange,
          },
        ]}
        buttonsArray={[
          {
            color: "error",
            icon: <DeleteIcon />,
            text: "Cancel Order",
            onClick: handleCancelOrder,
          },

          {
            color: "success",
            icon: <SendIcon />,
            text: "Place Order",
            onClick: handlePlaceOrder,
          },
        ]}
      />
    </section>
  );
};

export default PlaceOrder;
