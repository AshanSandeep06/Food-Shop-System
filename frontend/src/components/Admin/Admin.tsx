import React from "react";
import { Route, Routes } from "react-router-dom";
import FoodMenu from "../../pages/FoodMenu";
import ManageCustomer from "../../pages/ManageCustomer";

const Admin = () => {
  return (
    <main className="mt-20 gap-2 w-full pt-5 pb-9 px-10 bg-[#FAFAFF]">
      <Routes>
        <Route path="/home" element={<FoodMenu />}></Route>
        <Route path="/manage_customer" element={<ManageCustomer />}></Route>
      </Routes>
    </main>
  );
};

export default Admin;
