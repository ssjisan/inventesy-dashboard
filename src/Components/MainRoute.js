import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Products from "../Pages/Products/Products";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product" element={<Products />} />
    </Routes>
  );
}
