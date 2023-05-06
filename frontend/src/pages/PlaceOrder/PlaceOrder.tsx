import React from "react";
import "../PlaceOrder/PlaceOrder.css";
import Table from "../../components/Table/Table";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Form from "../../components/Form/Form";

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

      {/* ===================================================== */}

      {/* --------- Payment --------- */}
      <section className="my-8 border-2 border-black flex flex-col gap-4">
        <span>Sub Total: 2500.00 <span className="text-sm text-red-600 relative bottom-[0.75px]">LKR</span></span>
        <span>Delivery Fee: 150.00 <span className="text-sm text-red-600 relative bottom-[0.75px]">LKR</span></span>

        <span>Total: 2650.00 <span className="text-sm text-red-600 relative bottom-[0.75px]">LKR</span></span>
      </section>

      {/* ===================================================== */}

      {/* --------- Form --------- */}
      <Form />
    </section>
  );
};

export default PlaceOrder;
