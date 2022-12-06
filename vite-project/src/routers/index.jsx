import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layout/AuthLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";

export default function RootRouter() {
  return (
    <Routes>


      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Route>


      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
