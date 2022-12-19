import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../store/features/productsSlice";
import { useLazyGetProductListQuery } from "../services";
import { useEffect } from "react";

export default function HomePage() {
  const [getProductList, { data, isLoading, isFetching, isError, isSuccess }] =
    useLazyGetProductListQuery();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.product.products);

  function handleGetProductList() {
    getProductList();
  }

  useEffect(() => {
    if (data) {
      dispatch(setProductList(data));
    }
  }, [data]);

  return (
    <div className="flex-1 flex space-x-5 justify-center items-center">
      <button onClick={handleGetProductList}>set product list</button>
      <div>{JSON.stringify(productList)}</div>
    </div>
  );
}
