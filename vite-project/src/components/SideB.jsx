import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selectors";

export default function SideB() {
  const root = useSelector(userSelector);
  return <div>{JSON.stringify(root)}</div>;
}
