import React, { useRef, useState } from "react";
import "../PlaceOrder/PlaceOrder.css";
import Table from "../../components/Table/Table";
import { Button, Paper, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Form from "../../components/Form/Form";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";

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
        tblData={[["I001", "Soap", "Uploaded", "350.00", "10"]]}
      />

      {/* ===================================================== */}

      {/* --------- Payment --------- */}
      <section className="my-12 flex justify-center">
        <Paper
          className="md:w-1/3 sm:w-3/4 w-full border border-slate-300 grid grid-cols-1 sm:flex sm:flex-col sm:gap-4 p-6 !bg-[#FAFAFF]"
          elevation={5}
        >
          <div className="grid mb-[5px] sm:mb-0 justify-center sm:flex sm:items-center sm:gap-6 !text-[rgb(81,81,81)]">
            <span className="text-[20px] font-bold sm:font-normal md:text-lg">
              Sub Total
            </span>
            <span className="hidden sm:block">-</span>
            <span className="text-[18px] md:text-lg">
              2500.00{" "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>

          <div className="grid mb-[10px] sm:mb-0 justify-center sm:flex sm:items-center sm:gap-6 !text-[rgb(81,81,81)]">
            <span className="text-[20px] font-bold sm:font-normal md:text-lg">
              Delivery Fee
            </span>
            <span className="hidden sm:block">-</span>
            <span className="text-[18px] md:text-lg">
              150.00{" "}
              <span className="text-sm text-red-600 relative bottom-[0.75px]">
                LKR
              </span>
            </span>
          </div>

          <Divider />

          <div className="grid justify-center sm:flex sm:items-center sm:gap-6 !text-[rgb(81,81,81)]">
            <span className="text-[20px] font-bold sm:font-normal md:text-lg">
              TOTAL
            </span>
            <span className="hidden sm:block">-</span>
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
      <Form
        textFieldsArray={[
          {
            label: "Your Name",
            textFieldType: "text",
            name: "name",
            placeHolderText: "Your Name",
          },
        ]}
        buttonsArray={[
          {
            color: "error",
            icon: <DeleteIcon />,
          },
        ]}
      />
    </section>
  );
};

export default PlaceOrder;
