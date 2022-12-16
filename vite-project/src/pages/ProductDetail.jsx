import React from "react";
import UIProductDetail from "../Container/UIProductDetail";
import { withProductDetailWrapper } from "../hooks/HOCProductDetail";

export default function ProductDetail() {
  return <div>{withProductDetailWrapper(UIProductDetail)}</div>;
}
