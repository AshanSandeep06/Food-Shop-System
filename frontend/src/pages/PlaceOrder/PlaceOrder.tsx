import React, { useRef } from "react";
import "../PlaceOrder/PlaceOrder.css";
import Table from "../../components/Table/Table";
import { Button, Paper, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Form from "../../components/Form/Form";
import Divider from "@mui/material/Divider";

type PlaceOrderState = {
  windowSize: number;
};

const PlaceOrder = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

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
        tblData={[["I001", "Soap", "Uploaded", "350.00", "10"]]}
      />

      {/* ===================================================== */}

      {/* --------- Payment --------- */}
      <section className="my-12 flex justify-center">
        <Paper
          className="md:w-1/3 sm:w-3/4 w-full border border-slate-300 grid grid-cols-1 sm:flex sm:flex-col sm:gap-4 p-6 !bg-[#FAFAFF]"
          elevation={5}
        >
          <div className="grid sm:flex sm:items-center sm:gap-6 !text-[rgb(81,81,81)]">
            <span className="text-[18px] md:text-lg">Sub Total</span>
            {windowSize.current[0] >= 640 ? <span>-</span> : null}
            <span className="text-[18px] md:text-lg">
              2500.00{" "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>

          <div className="flex items-center gap-6 !text-[rgb(81,81,81)]">
            <span className="text-[18px] md:text-lg">Delivery Fee</span>
            <span>-</span>
            <span className="text-[18px] md:text-lg">
              150.00{" "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>

          <Divider />

          <div className="flex items-center gap-6 !text-[rgb(81,81,81)]">
            <span className="text-[18px] md:text-lg">TOTAL</span>
            <span>-</span>
            <span className="text-[18px] md:text-lg">
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
