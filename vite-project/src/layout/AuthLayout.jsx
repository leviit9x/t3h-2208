import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Outlet />
    </div>
  );
}
