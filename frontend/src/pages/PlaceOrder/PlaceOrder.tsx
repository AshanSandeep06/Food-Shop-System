import React from "react";
import "../PlaceOrder/PlaceOrder.css";
import Table from "../../components/Table/Table";
import { Button, Paper, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Form from "../../components/Form/Form";
import Divider from '@mui/material/Divider';

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
      <section className="my-8">
      <Paper elevation={3}  className="w-max border-2 border-black flex flex-col gap-4 p-4">
        <div className="flex justify-center items-center gap-3">
        <span className="text-base md:text-lg ">Sub Total</span>
        <span>-</span>
        <span>2500.00 <span className="text-sm text-red-600 relative bottom-[0.75px]">LKR</span></span>
        </div>

        <div className="flex justify-center items-center gap-3">
        <span className="text-base md:text-lg ">Sub Total</span>
        <span>-</span>
        <span>2500.00 <span className="text-sm text-red-600 relative bottom-[0.75px]">LKR</span></span>
        </div>
        
        <Divider />

        <span>TOTAL: 2650.00 <span className="text-sm text-red-600 relative bottom-[0.75px]">LKR</span></span>
      </Paper>
     </section>

      {/* ===================================================== */}

      {/* --------- Form --------- */}
      <Form />
    </section>
  );
};

export default PlaceOrder;
