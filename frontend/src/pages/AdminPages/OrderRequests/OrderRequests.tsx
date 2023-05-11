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
import React from "react";
import Table from "../../../components/Table";
import { TransitionProps } from "@mui/material/transitions";
import { motion } from "framer-motion";
import iceCreamImage from "../../../assets/img/icecream-01.png";
import CartItem from "../../../components/CartItem";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OrderRequests = () => {
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
          "Name",
          "Contact",
          "Sub Total",
          "Delivery Fee",
          "Total Charge",
          "Order Location",
          "Order Status",
          "Accept",
          "Deny",
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
            "Accept",
            "Deny",
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
            "Accept",
            "Deny",
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
            "Accept",
            "Deny",
          ],
        ]}
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
          <DialogTitle className="!font-poppins">{"Cart Item List"}</DialogTitle>

          <DialogContent>
            <div className="flex h-[calc(100vh-70px)] flex-col bg-[#F5EEE9] gap-8">
              <div className="flex flex-col pt-5 pl-5 pr-5 gap-3 h-[528px] overflow-y-scroll scrollbar-hidden scroll-smooth">
                {/* cart items */}
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </div>

              <div className="px-16">
                <button
                  className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600
            text-gray-50 text-lg my-2 hover:shadow-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
};

export default OrderRequests;
