import React, { useEffect, useState } from "react";
import Form from "../../../components/Form/Form";
import BackspaceIcon from "@mui/icons-material/Backspace";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

const PlaceOrderForm = () => {
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const nowDate = new Date();
  const nowTime = nowDate.toLocaleTimeString("en-US", { hour12: false });

  const [currentTime, setCurrentTime] = useState<string>(nowTime);

  const [selectedCustomerID, setSelectedCustomerID] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date().toISOString().split("T")[0]);
      setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
  }, []);

  const handleChangeCustomerID = (event: SelectChangeEvent) => {
    setSelectedCustomerID(event.target.value as string);
    // alert(event.target.value as string);
  };

  return (
    <section>
      <section>
        <div>
          <h1>Invoice Details</h1>
        </div>

        <div>
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

          <FormControl className="w-1/4">
            <InputLabel id="demo-simple-select-label">Customer</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Customer"
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
        </div>
      </section>

      <section></section>

      <section></section>
    </section>
  );
};

export default PlaceOrderForm;
