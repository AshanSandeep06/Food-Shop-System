import React from "react";
import Form from "../../../components/Form/Form";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { TextField } from "@mui/material";

const PlaceOrderForm = () => {
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
        </div>
      </section>

      <section></section>

      <section></section>
    </section>
  );
};

export default PlaceOrderForm;
