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
    const searchQuery = {
      key: "node",
      mode: "light",
    };

    const _search = new URLSearchParams(searchQuery);

    navigate({
      pathname: "/products/" + id,
      search: _search.toString(),
    });
  }

  return (
    <ul>
      {products.map((pr, idx) => (
        <li key={idx}>
          <div onClick={() => go2Detail(pr.id)}>{pr.name}</div>
        </li>
      ))}
    </ul>
  );
}
