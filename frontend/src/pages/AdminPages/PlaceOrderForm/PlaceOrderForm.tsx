import React, { useEffect, useState } from "react";
import Form from "../../../components/Form/Form";
import BackspaceIcon from "@mui/icons-material/Backspace";
import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import "./PlaceOrderForm.css";
import chickenPlate from "../../../assets/img/chicken-01.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "../../../components/Table";
import axios from "../../../axios";
import { Customer } from "../../../types/Customer";
import { Item } from "../../../types/Item";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  setCartItems,
  addNewCartItems,
  removeAllCartItems,
  setCartCount,
  removeFromCart,
} from "../../../globalSlice";
import { OrderDetail } from "../../../types/OrderDetail";
import { Order } from "../../../types/Order";
const { DateTime } = require("luxon");

const PlaceOrderForm = () => {
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const imagePath = "/img/uploads/itemImages/";

  const [itemImage, setItemImage] = useState<string>("");

  const nowDate = new Date();
  const nowTime = nowDate.toLocaleTimeString("en-US", { hour12: false });

  const [currentTime, setCurrentTime] = useState<string>(nowTime);

  const [selectedCustomerID, setSelectedCustomerID] = useState<string>("");
  const [selectedItemCode, setSelectedItemCode] = useState<string>("");

  const [orderID, setOrderID] = useState<string>("");
  const [allCustomers, setAllCustomers] = useState<Customer[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);

  const [cusName, setCusName] = useState<string>("");
  const [cusAddress, setCusAddress] = useState<string>("");
  const [cusContact, setCusContact] = useState<string>("");
  const [cusEmail, setCusEmail] = useState<string>("");

  const [itemName, setItemName] = useState<string>("");
  const [unitPrice, setUnitPrice] = useState<number>(0.0);
  const [qtyOnHand, setQtyOnHand] = useState<number>(0.0);
  const [description, setDescription] = useState<string>("");
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);

  const [subTotal, setSubTotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [cash, setCash] = useState<number>(0);
  const [balance, setBalance] = useState<number>();

  const cart = useSelector((state: any) => state.cartItems);
  const cartCount: string = useSelector((state: any) => state.cartCount);
  const dispatch = useDispatch();

  const [cartItemsList, setCartItemsList] = useState<Array<string[] | any[]>>(
    []
  );
  let tempCartItemsList: (any[] | string[])[] = [];

  const generateNewOrderID = () => {
    axios
      .get("order/generateNewOrderID")
      .then((res) => {
        setOrderID(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadAllCustomers = () => {
    axios
      .get("customer")
      .then((res) => {
        setAllCustomers(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllItems = () => {
    axios
      .get("item")
      .then((res) => {
        setAllItems(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRemoveItemFromCart = (itemCode: string) => {
    dispatch(setCartCount(parseInt(cartCount) - 1));
    dispatch(removeFromCart(itemCode));
  };

  const loadAllItems = () => {
    axios
      .get("item")
      .then((res) => {
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
            res.data.response[i].description,
            res.data.response[i].unitPrice,
            0,
            0,
            <span>
              <button
                onClick={() =>
                  handleRemoveItemFromCart(res.data.response[i].itemCode)
                }
                className="flex justify-center items-center w-8 h-8 rounded-lg text-gray-50 bg-[rgb(232,0,19)]"
              >
                <DeleteIcon className="!text-[25px]" />
              </button>
            </span>,
          ]);
        }

        setInitialData(allItems);
      })
      .catch((error) => {
        alert("Error is : " + error);
      });
  };

  const setInitialData = (allItems: (any[] | string[])[]) => {
    for (let dataRow of allItems) {
      for (let cartItem of cart.cartItems) {
        if (dataRow[0] == cartItem.itemCode) {
          dataRow[5] = cartItem.quantity;
          tempCartItemsList.push(dataRow);
          break;
        }
      }
    }

    let subTotal = 0;
    setTotal(0);
    // set subtotal and total
    for (let itemRow of tempCartItemsList) {
      var totalItemPrice = parseFloat(itemRow[4]) * parseFloat(itemRow[5]);
      itemRow[6] = totalItemPrice;
      console.log(totalItemPrice);
      subTotal = subTotal + totalItemPrice;
    }

    setSubTotal(subTotal);
    setTotal(subTotal);

    setCartItemsList(tempCartItemsList);
  };

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date().toISOString().split("T")[0]);
      setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
      // setItemImage(chickenPlate);
    }, 1000);

    generateNewOrderID();
    loadAllCustomers();
    getAllItems();
    loadAllItems();
  }, [cart.cartItems]);

  const handleChangeCustomerID = (event: SelectChangeEvent) => {
    setSelectedCustomerID(event.target.value as string);
    // let customers: Customer[] = allCustomers;
    for (let i = 0; i < allCustomers.length; i++) {
      if ((event.target.value as string) == allCustomers[i].customerID) {
        setCusName(allCustomers[i].customerName);
        setCusAddress(allCustomers[i].address);
        setCusContact(allCustomers[i].contactNumber);
        setCusEmail(allCustomers[i].email);
      }
    }
  };

  function handleChangeItemCode(event: SelectChangeEvent) {
    setSelectedItemCode(event.target.value as string);

    for (let i = 0; i < allItems.length; i++) {
      if ((event.target.value as string) == allItems[i].itemCode) {
        setItemName(allItems[i].itemName);
        setUnitPrice(allItems[i].unitPrice);
        setQtyOnHand(allItems[i].qtyOnHand);
        setDescription(allItems[i].description);
        setItemImage(imagePath + allItems[i].itemImage);
      }
    }
  }

  const handleClearInvoiceDetails = () => {
    generateNewOrderID();
    loadAllCustomers();

    setSelectedCustomerID("");
    setCusName("");
    setCusAddress("");
    setCusContact("");
    setCusEmail("");
  };

  const handleClearSelectItems = () => {
    loadAllItems();

    setSelectedItemCode("");
    setItemName("");
    setUnitPrice(0.0);
    setQtyOnHand(0.0);
    setItemImage("");
    setDescription("");
    setSelectedQuantity(0);
  };

  const handleSelectedQuantity = (e: any) => {
    setSelectedQuantity(e.target.value);
  };

  const handleOnChangeCash = (e: any) => {
    setCash(e.target.value);

    let balance = e.target.value - total;
    setBalance(balance);
  };

  const handleAddToCart = () => {
    dispatch(
      addNewCartItems({
        itemCode: selectedItemCode,
        itemImage: itemImage,
        itemName: itemName,
        unitPrice: unitPrice,
        quantity: selectedQuantity,
      })
    );
  };

  const handleCancelOrder = () => {
    dispatch(removeAllCartItems());
    dispatch(setCartCount(String(0)));

    handleClearSelectItems();
    handleClearInvoiceDetails();

    setSubTotal(0);
    setTotal(0);
    setCash(0);
    setBalance(0);
  };

  const handlePlaceOrder = () => {
    setCurrentDate(DateTime.now().toISODate());
    setCurrentTime(DateTime.local().toLocaleString(DateTime.TIME_SIMPLE));

    axios
      .get("order/generateNewOrderID")
      .then((res) => {
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
          deliveryFee: 0,
          totalCost: total,
          orderStatus: "Pending",
          deliveryLocation: "None",
          customerID: selectedCustomerID,
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
            alert(res.data.message);
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
      <section className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <section className="rounded-xl h-max border border-slate-200 px-5 pt-5 pb-8 shadow-lg">
          <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
            <h1 className="font-medium">Invoice Details</h1>
          </div>

          <div
            id="invoiceDetails"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <TextField
              label="Order ID"
              type="text"
              variant="outlined"
              name="orderId"
              placeholder="Order ID"
              required
              value={orderID}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              label="Order Date"
              type="date"
              variant="outlined"
              name="orderDate"
              placeholder="Order Date"
              required
              value={currentDate}
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Order Time"
              type="time"
              variant="outlined"
              name="orderTime"
              placeholder="Order Time"
              required
              value={currentTime}
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormControl>
              <InputLabel id="demo-simple-select-label">Customer ID</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Customer ID"
                className="!font-poppins"
                value={selectedCustomerID}
                onChange={handleChangeCustomerID}
              >
                {/* <MenuItem value={customerId}>Customer ID</MenuItem> */}
                {/* <MenuItem className="!font-poppins" value={1}>
                  C00-001
                </MenuItem>
                <MenuItem className="!font-poppins" value={2}>
                  C00-002
                </MenuItem> */}
                {allCustomers.map((c1) => (
                  <MenuItem
                    key={c1.customerID}
                    className="!font-poppins"
                    value={c1.customerID}
                  >
                    {c1.customerID}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Customer Name"
              type="text"
              variant="outlined"
              name="customerName"
              placeholder="Customer Name"
              required
              value={cusName}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              label="Customer Address"
              type="text"
              variant="outlined"
              name="customerAddress"
              placeholder="Customer Address"
              required
              value={cusAddress}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              label="Contact Number"
              type="text"
              variant="outlined"
              name="customerContact"
              placeholder="Contact Number"
              required
              value={cusContact}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              label="Email"
              type="text"
              variant="outlined"
              name="customerEmail"
              placeholder="Email"
              required
              value={cusEmail}
              InputProps={{
                readOnly: true,
              }}
            />

            <div className="sm:col-start-2 sm:col-end-3 items-center justify-end flex">
              <Button
                className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px]"
                variant="contained"
                color="warning"
                onClick={handleClearInvoiceDetails}
              >
                Clear
              </Button>
            </div>
          </div>
        </section>

        <section className="rounded-xl h-max border border-slate-200 px-5 pt-5 pb-8 shadow-lg">
          <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
            <h1 className="font-medium">Select Items</h1>
          </div>

          <div
            id="itemDetails"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <FormControl>
              <InputLabel id="demo-simple-select-label">Item Code</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Customer ID"
                className="!font-poppins"
                value={selectedItemCode}
                onChange={handleChangeItemCode}
              >
                {allItems.map((item) => (
                  <MenuItem
                    key={item.itemCode}
                    className="!font-poppins"
                    value={item.itemCode}
                  >
                    {item.itemCode}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Item Name"
              type="text"
              variant="outlined"
              name="itemName"
              placeholder="Item Name"
              value={itemName}
              required
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Unit Price"
              type="text"
              variant="outlined"
              name="unitPrice"
              placeholder="Unit Price"
              value={unitPrice}
              required
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Qty On Hand"
              type="text"
              variant="outlined"
              name="qtyOnHand"
              placeholder="Qty On Hand"
              value={qtyOnHand}
              required
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <div className="flex justify-center items-center col-span-1 sm:col-span-2 mb-2">
              {itemImage && (
                <img
                  id="itemImage"
                  src={itemImage}
                  className="object-contain h-[140px]"
                  // ref={itemImageRef}
                />
              )}
            </div>

            <TextField
              label="Description"
              type="text"
              variant="outlined"
              name="description"
              value={description}
              placeholder="Description"
              required
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Selected Quantity"
              type="number"
              variant="outlined"
              name="qtyOnHand"
              value={selectedQuantity}
              onChange={handleSelectedQuantity}
              placeholder="Selected Quantity"
              required
            />

            <div className="flex sm:justify-between items-center col-span-1 sm:col-span-2 flex-wrap justify-center gap-[22px] sm:gap-[0px]">
              <Button
                className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px] sm:!mr-[55px]"
                variant="contained"
                color="warning"
                onClick={handleClearSelectItems}
              >
                Clear
              </Button>

              <Button
                className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px]"
                variant="contained"
                color="primary"
              >
                Update
              </Button>

              <Button
                className="!px-[12px] !capitalize !font-poppins !font-normal !text-[15px]"
                variant="contained"
                color="success"
                endIcon={<AddShoppingCartIcon />}
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 lg:col-start-1 lg:col-span-2 xl:col-start-auto xl:col-span-1 h-max px-5 pt-5 pb-8 shadow-lg">
          <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
            <h1 className="font-medium">Billing Details</h1>
          </div>

          <div
            id="billingDetails"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <div className="flex justify-start items-center md:col-start-1 md:col-end-3">
              <span className="text-start p-1 text-red-700 !text-[25px] font-medium">
                Sub Total :
              </span>
              <span className="text-center text-black p-1 !text-[25px] font-medium">
                {`${subTotal} LKR`}
              </span>
            </div>

            <TextField
              label="Total (LKR)"
              type="text"
              variant="outlined"
              name="total"
              placeholder="Total"
              required
              value={total}
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Cash (LKR)"
              type="text"
              variant="outlined"
              name="cash"
              value={cash}
              placeholder="Cash"
              required
              onChange={handleOnChangeCash}
            />

            <TextField
              label="Balance (LKR)"
              type="text"
              variant="outlined"
              name="balance"
              value={balance + " LKR"}
              placeholder="Balance"
              required
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <div className="flex sm:justify-between items-center col-span-1 sm:col-span-2 flex-wrap justify-center gap-[22px] sm:gap-[0px]">
              <Button
                className="!px-[12px] !capitalize !font-poppins !font-normal !text-[15px] sm:!mr-[88px] mr-[0px]"
                variant="outlined"
                color="error"
                endIcon={<DeleteIcon />}
                onClick={handleCancelOrder}
              >
                Cancel Order
              </Button>

              <Button
                className="!px-[12px] !capitalize !font-poppins !font-normal !text-[15px]"
                variant="contained"
                color="success"
                endIcon={<CheckCircleIcon />}
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </div>
          </div>
        </section>
      </section>

      <section className="rounded-xl h-max px-5 pt-5 pb-8">
        <Table
          tblName="Cart Details"
          tblHeight="auto"
          tblHeaders={[
            "Item Code",
            "Item Name",
            "View",
            "Description",
            "Unit Price (LKR)",
            "Quantity",
            "Total (LKR)",
            "Option",
          ]}
          // tblData={[
          //   [
          //     "I00-001",
          //     "Ice Cream",
          //     <img
          //       src={chickenPlate}
          //       alt="foodImage"
          //       className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
          //       style={{ transform: "none" }}
          //     />,
          //     "Vanilla & Chocalate",
          //     "450.00",
          //     "2",
          //     "900.00",
          //     <span>
          //       <button className="flex justify-center items-center w-8 h-8 rounded-lg text-gray-50 bg-[rgb(232,0,19)]">
          //         <DeleteIcon className="!text-[25px]" />
          //       </button>
          //     </span>,
          //   ],
          //   [
          //     "I00-001",
          //     "Ice Cream",
          //     <img
          //       src={chickenPlate}
          //       alt="foodImage"
          //       className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
          //       style={{ transform: "none" }}
          //     />,
          //     "Vanilla & Chocalate",
          //     "450.00",
          //     "2",
          //     "900.00",
          //     <span>
          //       <button className="flex justify-center items-center w-8 h-8 rounded-lg text-gray-50 bg-[rgb(232,0,19)]">
          //         <DeleteIcon className="!text-[25px]" />
          //       </button>
          //     </span>,
          //   ],
          //   [
          //     "I00-001",
          //     "Ice Cream",
          //     <img
          //       src={chickenPlate}
          //       alt="foodImage"
          //       className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
          //       style={{ transform: "none" }}
          //     />,
          //     "Vanilla & Chocalate",
          //     "450.00",
          //     "2",
          //     "900.00",
          //     <span>
          //       <button className="flex justify-center items-center w-8 h-8 rounded-lg text-gray-50 bg-[rgb(232,0,19)]">
          //         <DeleteIcon className="!text-[25px]" />
          //       </button>
          //     </span>,
          //   ],
          // ]}

          tblData={cartItemsList.map((itemArray) => itemArray)}
        />
      </section>
    </section>
  );
};

export default PlaceOrderForm;
