import React from "react";
import Dashboard from "../../pages/Dashboard/Dashboard";
import FoodMenu from "../../pages/FoodMenu/FoodMenu";

const Content = () => {
  return (
    <>
      <main className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-2 w-full py-6 px-10 bg-[#F5F3F3]">
        <Dashboard />
      </main>

      <main>
        {/* ------------ Food Menu ------------ */}
        <FoodMenu />
      </main>
    </>
  );
};

export default Content;
