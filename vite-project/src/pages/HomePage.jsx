import { LockClosedIcon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../configs";

export default function HomePage() {
  return (
    <div className="flex-1 justify-center items-center">
      <h1>List Router</h1>
      <ul>
        <li>
          <Link to={"/products"}>Go to products</Link>
        </li>
      </ul>
    </div>
  );
}
