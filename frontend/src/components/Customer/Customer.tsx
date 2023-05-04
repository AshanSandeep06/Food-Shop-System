import React from "react";
import FoodMenu from "../../pages/FoodMenu/FoodMenu";
import { Route, Routes } from "react-router-dom";

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
