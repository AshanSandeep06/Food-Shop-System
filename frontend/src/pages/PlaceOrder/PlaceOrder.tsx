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
      <section className="border-2 border-black">
        
      </section>

      {/* ===================================================== */}

      {/* --------- Form --------- */}
      <Form />
    </section>
  );
};

export default PlaceOrder;
