import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { api } from "../configs";

export default function ProductDetail() {
  const params = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const [detail, setDetail] = useState(null);
  const all = queryParams.get("access_token");

  console.log(all);
  async function fetchProductDetail() {
    api.get("/products/" + params.id).then((data) => {
      setDetail(data);
    });
  }

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const handleClick = () => {
    const test = queryParams.get("key");
    setQueryParams({
      key: Math.random() * 1000,
    });
    console.log(test);
  };

  return <div onClick={handleClick}>{JSON.stringify(detail, null, 2)}</div>;
}
