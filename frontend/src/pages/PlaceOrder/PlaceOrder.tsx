import React from "react";
import "../PlaceOrder/PlaceOrder.css";
import Table from "../../components/Table/Table";
import { Button, Paper, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Form from "../../components/Form/Form";
import Divider from "@mui/material/Divider";

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
        tblData={[["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"],["I001", "Soap", "Uploaded", "350.00", "10"]]}
      />

      {/* ===================================================== */}

      {/* --------- Payment --------- */}
      <section className="my-8 flex justify-center">
        <Paper
          elevation={3}
          className="w-1/3 border border-slate-300 flex flex-col gap-4 p-6"
        >
          <div className="flex items-center gap-6 !text-[rgb(81,81,81)]">
            <span className="text-base md:text-lg">Sub Total</span>
            <span>-</span>
            <span className="text-base md:text-lg">
              2500.00{" "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>

          <div className="flex items-center gap-6 !text-[rgb(81,81,81)]">
            <span className="text-base md:text-lg">Delivery Fee</span>
            <span>-</span>
            <span className="text-base md:text-lg">
              150.00{" "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>

          <Divider />

          <div className="flex items-center gap-6 !text-[rgb(81,81,81)]">
            <span className="text-base md:text-lg">TOTAL</span>
            <span>-</span>
            <span className="text-base md:text-lg">
              2650.00{" "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>
        </Paper>
      </section>

      {/* ===================================================== */}

      {/* --------- Form --------- */}
      <Form />
    </section>
  );
};

export default PlaceOrder;
