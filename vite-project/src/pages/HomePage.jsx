import React from "react";
import { Link } from "react-router-dom";
import SideA from "../components/SideA";

export default function HomePage() {
  return (
    <div className="flex-1 flex space-x-5 justify-center items-center">
      <SideA></SideA>
      <Link to={"/site-b"}>go 2 site B</Link>
    </div>
  );
}
