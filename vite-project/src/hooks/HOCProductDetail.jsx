import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../configs/";
export function withProductDetailWrapper(Component) {
  const [detail, setDetail] = useState(null);
  const params = useParams();

  async function fetchProductDetail() {
    api.get("/products/" + params.id).then((data) => {
      setDetail(data);
    });
  }

  useEffect(() => {
    fetchProductDetail();
  }, []);

  return <Component product={detail} />;
}
