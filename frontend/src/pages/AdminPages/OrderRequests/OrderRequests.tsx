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
import ChickenPlate from "../../../assets/img/chicken-01.png";
import DeleteIcon from "@mui/icons-material/Delete";

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
              className="!font-semibold"
              onClick={handleClose}
              type="button"
              endIcon={<CloseIcon className="text-black" />}
            ></Button>
          </DialogTitle>

          <DialogContent className="!pb-2">
            <div className="flex flex-col bg-[#F5EEE9] gap-8">
              <div className="flex flex-col py-5 px-4 gap-3 h-[480px] overflow-y-auto scroll-smooth">
                <div className="px-3 gap-4 flex items-center justify-start drop-shadow-lg bg-[rgba(256,256,256,0.4)] backdrop-blur-md rounded-xl">
                  <img
                    src={ChickenPlate}
                    alt="foodImage"
                    className="mr-[6px] w-20 h-20 max-w-[65px] rounded-full object-contain"
                  />
                  <div className="flex flex-col mr-[6px]">
                    <span>Chicken Plate</span>
                    <span>
                      850
                      <span className="text-[#ed1e2f] text-[13px]"> LKR</span>
                    </span>
                  </div>

                  <div className="flex gap-3 justify-center items-center">
                    <span className="text-sm text-gray-50 w-5 h-5 rounded-sm bg-[#282a2c] flex items-center justify-center cursor-default">
                      1
                    </span>
                  </div>
                </div>
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
