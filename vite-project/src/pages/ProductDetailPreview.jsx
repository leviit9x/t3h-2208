import React from "react";
import UIProductPreview from "../Container/UIProductPreview";
import { withProductDetailWrapper } from "../hooks/HOCProductDetail";

export default function ProductDetailPreview() {
  return withProductDetailWrapper(UIProductPreview);
}
