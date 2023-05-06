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
        <div className="border border-slate-400 rounded text-slate-400 cursor-pointer w-full">
          <form className="flex flex-col gap-[12px] p-8">
            <TextField
              required
              id="txtPostTitle"
              label="Post Title"
              variant="outlined"
              placeholder="Enter Post Title"
              type="text"
              fullWidth={true}
              name="title"
            />

            <TextField
              label="Category"
              type="text"
              variant="outlined"
              name="categoryName"
              placeholder="Enter Category Name"
              fullWidth={true}
              required
            />

            <TextField
              required
              id="txtPostDescription"
              label="Post Description"
              variant="outlined"
              placeholder="Enter Post Description"
              type="text"
              fullWidth={true}
              multiline
              minRows={5}
              maxRows={10} //Infinity
              name="description"
            />

            <TextField
              required
              id="txtHoursCount"
              label="Hours Count"
              variant="outlined"
              type="number"
              fullWidth={true}
              name="hoursCount"
            />

            <TextField
              id="txtLecturerName"
              label="Lecturer Name"
              variant="outlined"
              type="text"
              fullWidth={true}
              placeholder="Lecturer Name"
              name="lecturerName"
            />

            <TextField
              className="!mb-2"
              required
              id="txtTags"
              label="Tags (Comma seperated tags)"
              variant="outlined"
              type="text"
              fullWidth={true}
              placeholder="Enter comma seperated tags"
              name="tags"
            />

            <button className="font-poppins font-semibold py-2 bg-blue-800 text-white rounded">
              <h6>Publish Post</h6>
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default PlaceOrder;
