import { LockClosedIcon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideA from "../components/SideA";
import SideB from "../components/SideB";
import { api } from "../configs";

export default function HomePage() {
  return (
    <div className="flex-1 flex space-x-5 justify-center items-center">
      <SideA></SideA>
      <Link to={"/site-b"}>go 2 site B</Link>
    </div>
  );
}
