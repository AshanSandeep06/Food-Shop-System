import React from "react";
import { Route, Routes } from "react-router-dom";
import FoodMenu from "../../pages/FoodMenu";

const Admin = () => {
  return (
    <main className="mt-20 gap-2 w-full pt-6 pb-9 px-10 bg-[#FAFAFF]">
      <Routes>
        <Route path="/home" element={<FoodMenu />}></Route>
      </Routes>
    </main>
  );
};

export default Admin;