import React from "react";
import { Route, Routes } from "react-router-dom";
import FoodMenu from "../../pages/Common/FoodMenu";
import ManageCustomer from "../../pages/AdminPages/ManageCustomer";
import ManageItem from "../../pages/AdminPages/ManageItem";
import PlaceOrderForm from "../../pages/AdminPages/PlaceOrderForm";
import OrderRequests from "../../pages/AdminPages/OrderRequests";

const Admin = () => {
  return (
    <main className="mt-20 gap-2 w-full pt-5 pb-9 px-7 bg-[#FAFAFF]">
      <Routes>
        <Route path="/home" element={<FoodMenu />}></Route>
        <Route path="/manage_customer" element={<ManageCustomer />}></Route>
        <Route path="/manage_item" element={<ManageItem />}></Route>
        <Route path="/purchase_order" element={<PlaceOrderForm />}></Route>
        <Route path="/order_requests" element={<OrderRequests />}></Route>
      </Routes>
    </main>
  );
};

export default Admin;
