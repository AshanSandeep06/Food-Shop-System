import React from "react";
import "../PlaceOrder/PlaceOrder.css";
import Table from "../../components/Table/Table";
import { TextField } from "@mui/material";

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
      <section className="bg-orange-300 py-3 px-20">
        <form className="h-full grid grid-cols-3">
          <TextField
            label="Category"
            type="text"
            variant="outlined"
            name="categoryName"
            placeholder="Enter Category Name"
            fullWidth={true}
            required
          />
        </form>
      </section>
    </section>
  );
};

export default PlaceOrder;
