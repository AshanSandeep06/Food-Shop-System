import React from "react";
import "../PlaceOrder/PlaceOrder.css";
import Table from "../../components/Table/Table";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const PlaceOrder = () => {
  return (
    <section>
      {/* ----- Cart Items Table ----- */}
      <Table
        tblName="Your Items Cart"
        tblHeaders={[
          "Item Code",
          "Description",
          "Item Image",
          "Unit Price",
          "Quantity",
        ]}
        tblData={[
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I002", "Rice"],
        ]}
      />

      {/* --------- Form --------- */}
      <section className="py-10 px-20 border-2 border-black">
        <form className="h-full grid grid-cols-3 gap-6 border-2 border-yellow-400">
          <TextField
            label="Your Name"
            type="text"
            variant="outlined"
            name="name"
            placeholder="Your Name"
            required
          />

          <TextField
            label="Contact Number"
            type="text"
            variant="outlined"
            name="contactNumber"
            placeholder="Contact Number"
            required
          />

          <TextField
            label="Address"
            type="text"
            variant="outlined"
            name="address"
            placeholder="Address"
            required
          />

          <div className="col-start-3 col-end-4">
            <Button className="" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default PlaceOrder;
