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
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
};

export default OrderRequests;
