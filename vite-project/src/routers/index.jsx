import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layout/AuthLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import SideB from "../components/SideB";

function SiteB() {
  return (
    <div>
      <Link to={"/"}>back</Link>
      <SideB />
    </div>
  );
}

export default function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<HomePage />} />
        <Route path="site-b" element={<SiteB />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
