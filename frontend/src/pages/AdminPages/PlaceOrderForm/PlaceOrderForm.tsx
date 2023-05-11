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

const PlaceOrderForm = () => {
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const [itemImage, setItemImage] = useState<string>("");

  const nowDate = new Date();
  const nowTime = nowDate.toLocaleTimeString("en-US", { hour12: false });

  const [currentTime, setCurrentTime] = useState<string>(nowTime);

  const [selectedCustomerID, setSelectedCustomerID] = useState<string>("");
  const [selectedItemCode, setSelectedItemCode] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date().toISOString().split("T")[0]);
      setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
      setItemImage(chickenPlate);
    }, 1000);
  }, []);

  const handleChangeCustomerID = (event: SelectChangeEvent) => {
    setSelectedCustomerID(event.target.value as string);
    // alert(event.target.value as string);
  };

  function handleChangeItemCode(event: SelectChangeEvent) {
    setSelectedItemCode(event.target.value as string);

    // Set the Item Image Here.
    setItemImage(chickenPlate);
  }

  return (
    <section>
      <section className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <section className="rounded-lg h-max border border-slate-200 px-5 pt-5 pb-8 shadow-lg">
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
              defaultValue="OID-001"
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
                <MenuItem className="!font-poppins" value={1}>
                  C00-001
                </MenuItem>
                <MenuItem className="!font-poppins" value={2}>
                  C00-002
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Customer Name"
              type="text"
              variant="outlined"
              name="customerName"
              placeholder="Customer Name"
              required
              defaultValue="Kamal Perera"
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
              defaultValue="46/D, Makuluwa, Galle"
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
              defaultValue="0758906762"
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
              defaultValue="kamal123@gmail.com"
              InputProps={{
                readOnly: true,
              }}
            />

            <div className="sm:col-start-2 sm:col-end-3 items-center justify-end flex">
              <Button
                className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px]"
                variant="contained"
                color="warning"
              >
                Clear
              </Button>
            </div>
          </div>
        </section>

        <section className="rounded-lg h-max border border-slate-200 px-5 pt-5 pb-8 shadow-lg">
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
                <MenuItem className="!font-poppins" value={1}>
                  I00-001
                </MenuItem>
                <MenuItem className="!font-poppins" value={2}>
                  I00-002
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Item Name"
              type="text"
              variant="outlined"
              name="itemName"
              placeholder="Item Name"
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
              placeholder="Selected Quantity"
              required
            />

            <div className="flex sm:justify-between items-center col-span-1 sm:col-span-2 flex-wrap justify-center gap-[22px] sm:gap-[0px]">
              <Button
                className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px] sm:!mr-[55px]"
                variant="contained"
                color="warning"
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
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 lg:col-start-1 lg:col-span-2 xl:col-start-auto xl:col-span-1 h-max px-5 pt-5 pb-8 shadow-lg">
          <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
            <h1 className="font-medium">Billing Details</h1>
          </div>

          <div
            id="billingDetails"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <div className="flex justify-start items-center md:col-start-1 md:col-end-3">
              <span className="text-start p-1 text-red-700 !text-[25px] font-medium">
                Total :
              </span>
              <span className="text-center text-black p-1 !text-[25px] font-medium">
                0 LKR
              </span>
            </div>

            <TextField
              label="Discount"
              type="number"
              variant="outlined"
              name="discount"
              placeholder="Discount"
              required
            />

            <TextField
              label="Sub Total (LKR)"
              type="text"
              variant="outlined"
              name="subTotal"
              placeholder="Sub Total"
              required
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
              placeholder="Cash"
              required
            />

            <TextField
              label="Balance (LKR)"
              type="text"
              variant="outlined"
              name="balance"
              placeholder="Balance"
              required
            />

            <div className="flex sm:justify-between items-center col-span-1 sm:col-span-2 flex-wrap justify-center gap-[22px] sm:gap-[0px]">
              <Button
                className="!px-[12px] !capitalize !font-poppins !font-normal !text-[15px] sm:!mr-[88px] mr-[0px]"
                variant="outlined"
                color="error"
                endIcon={<DeleteIcon />}
              >
                Cancel Order
              </Button>

              <Button
                className="!px-[12px] !capitalize !font-poppins !font-normal !text-[15px]"
                variant="contained"
                color="success"
                endIcon={<CheckCircleIcon />}
              >
                Place Order
              </Button>
            </div>
          </div>
        </section>
      </section>

      <section className="rounded-lg h-max px-5 pt-5 pb-8">
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
          tblData={[
            [
              "I00-001",
              "Ice Cream",
              <img
                src={chickenPlate}
                alt="foodImage"
                className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
                style={{ transform: "none" }}
              />,
              "Vanilla & Chocalate",
              "450.00",
              "2",
              "900.00",
              <span>
                <button className="flex justify-center items-center w-8 h-8 rounded-lg text-gray-50 bg-[rgb(232,0,19)]">
                  <DeleteIcon className="!text-[25px]" />
                </button>
              </span>,
            ],
            [
              "I00-001",
              "Ice Cream",
              <img
                src={chickenPlate}
                alt="foodImage"
                className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
                style={{ transform: "none" }}
              />,
              "Vanilla & Chocalate",
              "450.00",
              "2",
              "900.00",
              <span>
                <button className="flex justify-center items-center w-8 h-8 rounded-lg text-gray-50 bg-[rgb(232,0,19)]">
                  <DeleteIcon className="!text-[25px]" />
                </button>
              </span>,
            ],
            [
              "I00-001",
              "Ice Cream",
              <img
                src={chickenPlate}
                alt="foodImage"
                className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
                style={{ transform: "none" }}
              />,
              "Vanilla & Chocalate",
              "450.00",
              "2",
              "900.00",
              <span>
                <button className="flex justify-center items-center w-8 h-8 rounded-lg text-gray-50 bg-[rgb(232,0,19)]">
                  <DeleteIcon className="!text-[25px]" />
                </button>
              </span>,
            ],
          ]}
        />
      </section>
    </section>
  );
};

export default PlaceOrderForm;
