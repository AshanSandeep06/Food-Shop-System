import React from "react";
import Table from "../../components/Table";
import "../PendingOrders/PendingOrders.css";

const PendingOrders = () => {
  return (
    <section>
      <Table
        tblName="Your Pending Orders"
        tblHeaders={[
          "Item Code",
          "Description",
          "Item Image",
          "Unit Price",
          "Quantity",
        ]}
        tblData={[
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
          ["I001", "Soap", "Uploaded", "350.00", "10"],
        ]}
      />
    </section>
  );
};

export default PendingOrders;
