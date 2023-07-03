import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React, { useState } from "react";
import Table from "../../../components/Table";
import { TransitionProps } from "@mui/material/transitions";
import { motion } from "framer-motion";
import iceCreamImage from "../../../assets/img/icecream-01.png";
import CartItem from "../../../components/CartItem";
import CloseIcon from "@mui/icons-material/Close";
import ChickenPlate from "../../../assets/img/chicken-01.png";
import DeleteIcon from "@mui/icons-material/Delete";
import OrderedItem from "../../../components/OrderedItem/OrderedItem";
import axios from "../../../axios/";
import { Customer } from "../../../types/Customer";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OrderRequests = () => {
  // For Load All Orders
  const [allOrders, setAllOrders] = React.useState<Array<string[] | any[]>>([]);

  // const getCustomer = (customerID: string) => {
  //   let customer: Customer = {
  //     customerID: "",
  //     customerName: "",
  //     address: "",
  //     contactNumber: "",
  //     email: "",
  //   };

  //   axios
  //     .get("customer/getByCustomerID/" + customerID)
  //     .then((res) => {
  //       customer = res.data.response;
  //     })
  //     .catch((error) => {
  //       console.log("Error Invoked : " + error);
  //     });

  //   return customer;
  // };

  const handleAcceptOrder = (orderID: string) => {
    axios
      .put("/order/" + orderID + "/" + "Accepted")
      .then((res) => {
        console.log(res.data.message);
        getAllOrderRequests();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDenyOrder = (orderID: string) => {
    axios
      .put("/order/" + orderID + "/" + "Denied")
      .then((res) => {
        console.log(res.data.message);
        getAllOrderRequests();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllOrderRequests = () => {
    axios
      .get("order")
      .then((res) => {
        console.log(res.data.response);

        let allOrders = [];
        let allOrdersArray = res.data.response;
        for (let i = 0; i < allOrdersArray.length; i++) {
          if (allOrdersArray[i].orderStatus == "Pending") {
            allOrders.push([
              allOrdersArray[i].orderID,
              allOrdersArray[i].customerID,
              allOrdersArray[i].subTotal + " LKR",
              allOrdersArray[i].deliveryFee + " LKR",
              allOrdersArray[i].totalCost + " LKR",
              allOrdersArray[i].orderLocation,
              <Chip
                label={allOrdersArray[i].orderStatus}
                color="primary"
                style={{ fontFamily: "Poppins" }}
              />,
              <Button
                onClick={() => handleAcceptOrder(allOrdersArray[i].orderID)}
                className="!px-[10px] !capitalize !font-poppins !font-normal !text-[15px]"
                variant="contained"
                color="success"
              >
                Accept
              </Button>,
              <Button
                onClick={() => handleDenyOrder(allOrdersArray[i].orderID)}
                className="!px-[10px] !capitalize !font-poppins !font-normal !text-[15px]"
                variant="contained"
                color="error"
              >
                Deny
              </Button>,
            ]);
          }
        }

        setAllOrders(allOrders);
      })
      .catch((error) => {
        console.log("Error Invoked : " + error);
      });
  };

  React.useEffect(() => {
    // Load All Order Requests
    getAllOrderRequests();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section>
      <Table
        tblName="Manage Order Requests"
        tblHeight="auto"
        tblHeaders={[
          "Order ID",
          "Customer ID",
          "Sub Total",
          "Delivery Fee",
          "Total Charge",
          "Order Location",
          "Order Status",
          "Accept",
          "Deny",
        ]}
        tblData={allOrders.map((orders) => orders)}
        // tblData={allItemsList.map((itemArray) => itemArray)}
        handleTblRowClick={handleClickOpen}
      />

      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle className="!font-poppins text-center flex justify-between">
            <p>Cart Items List</p>
            <Button
              className="!font-semibold"
              onClick={handleClose}
              type="button"
              endIcon={<CloseIcon className="text-black" />}
            ></Button>
          </DialogTitle>

          <DialogContent className="!pb-2">
            <div className="flex flex-col bg-[#F5EEE9] gap-8">
              <div className="flex flex-col py-5 px-4 gap-3 h-[480px] overflow-y-auto scroll-smooth">
                <OrderedItem />
                <OrderedItem />
                <OrderedItem />
                <OrderedItem />
                <OrderedItem />
                <OrderedItem />
                <OrderedItem />
                <OrderedItem />
                <OrderedItem />
              </div>
            </div>
          </DialogContent>

          <DialogActions className="!pb-5 !pr-5">
            <Button
              className="!px-[15px] !capitalize !font-poppins !font-normal !text-[16px]"
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
};

export default OrderRequests;
