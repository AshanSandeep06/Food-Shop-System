import React from "react";
import "../PlaceOrder/PlaceOrder.css";
import Table from "../../components/Table/Table";

const PlaceOrder = () => {
  return (
    <section>
      {/* ----- Cart Items Table ----- */}
      <Table 
      tblName="Your Items Cart" 
      tblHeaders={[]}
      tblData={[[]]}
      />

      {/* --------- Form --------- */}
      <section></section>
    </section>
  );
};

export default PlaceOrder;
