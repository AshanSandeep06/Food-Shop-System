import React from "react";
import { Route, Routes } from "react-router-dom";
import FoodMenu from "../../pages/FoodMenu";
import ManageCustomer from "../../pages/ManageCustomer";
import ManageItem from "../../pages/ManageItem";

const Admin = () => {
  return (
    <main className="mt-20 gap-2 w-full pt-5 pb-9 px-10 bg-[#FAFAFF]">
      <Routes>
        <Route path="/home" element={<FoodMenu />}></Route>
        <Route path="/manage_customer" element={<ManageCustomer />}></Route>
        <Route path="/manage_item" element={<ManageItem />}></Route>
        <Route path="/admin_placeOrder" element={<PlaceOrderForm />}></Route>
      </Routes>
    </main>
  );
};

export default Admin;
