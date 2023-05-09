import React from "react";
import FoodMenu from "../../pages/FoodMenu/FoodMenu";
import { Route, Routes } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PlaceOrder from "../../pages/PlaceOrder/PlaceOrder";
import PendingOrders from "../../pages/PendingOrders";

const Customer = () => {
  return (
    <main className="mt-20 gap-2 w-full pt-6 pb-9 px-10 bg-[#FAFAFF]">
      <Routes>
        <Route path="/home" element={<FoodMenu />}></Route>
        <Route path="/placeOrder" element={<PlaceOrder />}></Route>
        <Route path="/pending_orders" element={<PendingOrders />}></Route>
        <Route path="/orders_history" element={<OrdersHistory />}></Route>
      </Routes>
    </main>
  );
};

export default Customer;
