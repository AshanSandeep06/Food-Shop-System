import React, { useEffect, useState } from "react";
import Form from "../../../components/Form/Form";
import BackspaceIcon from "@mui/icons-material/Backspace";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import "./PlaceOrderForm.css";
import chickenPlate from "../../../assets/img/chicken-01.png";

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
    <section className="grid grid-cols-3">
      <section className="border-2 border-red-600 p-5 bg-white shadow-lg">
        <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
          <h1 className="font-medium">Invoice Details</h1>
        </div>

        <div id="invoiceDetails" className="grid grid-cols-2 gap-5">
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

          <div className="col-start-2 col-end-3 items-center justify-end flex">
            <Button
              className="!px-[20px] !capitalize !font-poppins !font-normal !text-[16px]"
              variant="contained"
              color="info"
            >
              Clear
            </Button>
          </div>
        </div>
      </section>

      <section className="border-2 border-red-600 p-5 bg-white shadow-lg">
        <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
          <h1 className="font-medium">Select Items</h1>
        </div>

        <div id="invoiceDetails" className="grid grid-cols-2 gap-5">
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

          <div className="col-end-3 col-start-1 justify-center items-center flex mb-3">
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
            className="col-end-3 col-start-1"
            label="Selected Quantity"
            type="text"
            variant="outlined"
            name="qtyOnHand"
            placeholder="Selected Quantity"
            required
          />

          <div className="col-start-2 col-end-3 items-center justify-end flex">
            <Button
              className="!px-[20px] !capitalize !font-poppins !font-normal !text-[16px]"
              variant="contained"
              color="info"
            >
              Clear
            </Button>
          </div>

          <div className="col-start-2 col-end-3 items-center justify-end flex">
            <Button
              className="!px-[20px] !capitalize !font-poppins !font-normal !text-[16px]"
              variant="contained"
              color="info"
            >
              Clear
            </Button>
          </div>

          <div className="col-start-2 col-end-3 items-center justify-end flex">
            <Button
              className="!px-[20px] !capitalize !font-poppins !font-normal !text-[16px]"
              variant="contained"
              color="info"
            >
              Clear
            </Button>
          </div>
        </div>
      </section>

      <section></section>
    </section>
  );
};

export default PlaceOrderForm;
