import React from "react";
import Table from "../../components/Table";

const OrdersHistory = () => {
  return (
    <section>
      <Table
        tblName="My Orders History"
        tblHeight="auto"
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
          [
            "OID-001",
            "C00-001",
            "Sunil Bandara",
            "0774592741",
            "1500.00",
            "250.00",
            "1750.00",
            "46/D, Makuluwa, Galle",
            "Pending",
          ],
        ]}
      />
    </section>
  );
};

export default OrdersHistory;
