import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../configs";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function getProductList() {
    api.get("/products").then((data) => {
      setProducts(data);
    });
  }

  useEffect(() => {
    getProductList();
  }, []);

  function go2Detail(id) {
    navigate({
      pathname: "/products/" + id,
    });
  }

  function go2Preview(id) {
    navigate({
      pathname: "/products/preview/" + id,
    });
  }

  return (
    <ul>
      {products.map((pr, idx) => (
        <li key={idx}>
          <button>Name: {pr.name}</button>
          <button onClick={() => go2Preview(pr.id)}>Preview</button>
          <button onClick={() => go2Detail(pr.id)}>Detail</button>
        </li>
      ))}
    </ul>
  );
}
