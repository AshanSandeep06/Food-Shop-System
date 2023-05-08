import React from "react";
import Table from "../../components/Table";

const PendingOrders = () => {
  return (
    <section>
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
    </section>
  );
};

export default PendingOrders;
