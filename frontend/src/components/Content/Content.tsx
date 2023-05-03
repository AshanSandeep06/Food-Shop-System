import React from "react";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <main className="mt-20">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Foods />}></Route>
        <Route path="/" element={<Contact />}></Route>
      </Routes>
    </main>
  );
};

export default Content;
