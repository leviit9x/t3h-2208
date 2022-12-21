import React from "react";
import { useSelector } from "react-redux";
import { useCreateProductMutation, useGetProductListQuery } from "../services";

export default function HomePage() {
  useGetProductListQuery();
  const [createPost] = useCreateProductMutation();

  const productList = useSelector((state) => state.product.products);

  function handleCreatePost() {
    const example = {
      name: "Product " + new Date().getTime(),
      cost: new Date().getTime(),
      quantity: new Date().getTime(),
      locationId: new Date().getTime(),
      familyId: new Date().getTime(),
    };

    createPost(example);
  }

  return (
    <div className="flex-1 flex space-x-5 justify-center items-center">
      <button onClick={handleCreatePost}>create post</button>
      {/* <button onClick={handleGetProductList}>set product list</button> */}
      <div>{JSON.stringify(productList)}</div>
    </div>
  );
}
