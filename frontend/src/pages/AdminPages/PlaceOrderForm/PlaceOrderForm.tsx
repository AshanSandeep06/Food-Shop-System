import React, { useEffect, useState } from "react";
import Form from "../../../components/Form/Form";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { TextField } from "@mui/material";

const PlaceOrderForm = () => {
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const nowDate = new Date();
  const nowTime = nowDate.toLocaleTimeString("en-US", { hour12: false });

  const [currentTime, setCurrentTime] = useState<string>(nowTime);

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date().toISOString().split("T")[0]);
      setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
  }, []);

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

          <TextField
            label="Customer ID"
            type="text"
            variant="outlined"
            name="customerId"
            placeholder="Customer ID"
            required
            defaultValue="C00-001"
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
