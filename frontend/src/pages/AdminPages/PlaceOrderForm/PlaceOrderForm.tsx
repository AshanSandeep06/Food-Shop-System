import React from "react";
import Form from "../../../components/Form/Form";
import BackspaceIcon from "@mui/icons-material/Backspace";

const PlaceOrderForm = () => {
  return (
    <section>
      <section>
        <div>
          <h1>Invoice Details</h1>
        </div>

        <div>
          <Form
            textFieldsArray={[
              {
                label: "Order ID",
                textFieldType: "text",
                name: "orderId",
                placeHolderText: "Order ID",
                defaultValue: "OID-001",
                readOnly: true,
              },

              {
                label: "Order Date",
                textFieldType: "date",
                name: "orderId",
                placeHolderText: "Order ID",
                defaultValue: "",
                focused: true,
                readOnly: true,
              },

              {
                label: "Order ID",
                textFieldType: "text",
                name: "orderId",
                placeHolderText: "Order ID",
                defaultValue: "",
              },
            ]}
            buttonsArray={[
              {
                color: "info",
                icon: <BackspaceIcon />,
                text: "Clear",
              },
            ]}
          />
        </div>
      </section>

      <section></section>

      <section></section>
    </section>
  );
};

export default PlaceOrderForm;
