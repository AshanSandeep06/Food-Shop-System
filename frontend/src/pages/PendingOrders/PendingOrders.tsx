import React from "react";
import Table from "../../components/Table";
import "../PendingOrders/PendingOrders.css";

const PendingOrders = () => {
  return (
    <section>
      <Table
        tblName="Your Pending Orders"
        tblHeaders={[
          "Order ID",
          "Customer ID",
          "Name",
          "Contact Number",
          "Sub Total",
          "Delivery Fee",
          "Total Charge",
          "Order Location",
          "Order Status",
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
