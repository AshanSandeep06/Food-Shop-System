import React from "react";
import Dashboard from "../Dashboard";
import FoodMenu from "../../pages/Common/FoodMenu/FoodMenu";

const Content = () => {
  return (
    <>
      <main className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-2 w-full py-6 px-10 bg-[#F5F3F3]">
        <Dashboard />
      </main>

      <main className="gap-2 w-full pt-6 px-10 bg-[#F5F3F3]">
        {/* ------------ Food Menu ------------ */}
        <FoodMenu />
      </main>
    </>
  );
};

export default Content;
