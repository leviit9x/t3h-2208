import React, { useEffect } from "react";
import { api } from "../configs";

export default function HomePage() {
  async function fetchProducts() {
    api.get("/products").then((data) => {
      console.log("====data", data);
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="flex-1 justify-center items-center">HomePage</div>;
}
