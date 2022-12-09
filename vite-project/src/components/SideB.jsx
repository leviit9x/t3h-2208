import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selectors";

//
// {
//   user:
//   product:
// }

export default function SideB() {
  const root = useSelector((state) => state.auth);
  return <div>{JSON.stringify(root)}</div>;
}
