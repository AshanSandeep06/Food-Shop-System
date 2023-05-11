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
import CloseIcon from "@mui/icons-material/Close";

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
          <DialogTitle className="!font-poppins text-center flex justify-between">
            <h5>Cart Items List</h5>
            <Button
              onClick={handleClose}
              type="button"
              endIcon={<CloseIcon className="text-black" />}
            ></Button>
          </DialogTitle>

          <DialogContent>
            <div className="flex flex-col bg-[#F5EEE9] gap-8">
              <div className="flex flex-col py-5 pl-5 pr-5 gap-3 h-[480px] overflow-y-scroll scroll-smooth">
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
