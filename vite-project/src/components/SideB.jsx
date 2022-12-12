import React from "react";
import { useDispatch } from "react-redux";
import { fetchUserById } from "../store/api/auth";
import { useSideA } from "./useSideA";

export default function SideB() {
  const dispatch = useDispatch();

  const [storage] = useSideA();

  storage.set("SideA", "SideA");

  function handleSetUser2() {
    dispatch(fetchUserById(2));
  }
  return (
    <div>
      <button onClick={handleSetUser2}>set user 2</button>
    </div>
  );
}
