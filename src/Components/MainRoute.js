import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Products from "../Pages/Products/Products";
import Salesman from "../Pages/Salesman/Salesman";
import Zone from "../Pages/Zone/Zone";
import DailySales from "../Pages/DailySales/DailySales";
import Reports from "../Pages/Reports/Reports";
import AddProduct from "../Pages/Products/AddProduct";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/all_product" element={<Products />} />
      <Route path="/salesman" element={<Salesman />} />
      <Route path="/zone" element={<Zone />} />
      <Route path="/daily-sales" element={<DailySales />} />
      <Route path="/report" element={<Reports />} />
      <Route path="/add_product" element={<AddProduct />} />
    </Routes>
  );
}
