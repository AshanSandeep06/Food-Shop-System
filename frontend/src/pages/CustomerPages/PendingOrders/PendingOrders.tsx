import React from "react";
import Table from "../../../components/Table";
import "./PendingOrders.css";
import { Chip } from "@mui/material";

const PendingOrders = () => {
  return (
    <section>
      <Table
        tblName="My Pending Orders"
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
          "Option",
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
            <Chip
              label="Pending"
              color="primary"
              style={{ fontFamily: "Poppins" }}
            />,
            "Cancel",
          ],
          [
            "OID-001",
            "C00-001",
            "Sunil Bandara",
            "0774592741",
            "1500.00",
            "250.00",
            "1750.00",
            "46/D, Makuluwa, Galle",
            <Chip
              label="Pending"
              color="primary"
              style={{ fontFamily: "Poppins" }}
            />,
            "Cancel",
          ],
          [
            "OID-001",
            "C00-001",
            "Sunil Bandara",
            "0774592741",
            "1500.00",
            "250.00",
            "1750.00",
            "46/D, Makuluwa, Galle",
            <Chip
              label="Pending"
              color="primary"
              style={{ fontFamily: "Poppins" }}
            />,
            "Cancel",
          ],
        ]}
      />
    </section>
  );
};

export default PendingOrders;
