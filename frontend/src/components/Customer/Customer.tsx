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

const Customer = () => {
  
  return (
    <main className="mt-20 gap-2 w-full py-7 px-10 bg-[#F5F3F3]">
      <Routes>
        <Route path="/home" element={<FoodMenu />}></Route>
      </Routes>
    </main>
  );
};

export default Customer;
