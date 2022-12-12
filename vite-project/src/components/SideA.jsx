import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHover } from "../hooks/useHover";
import { fetchUserById } from "../store/api/auth";
import { useSideA } from "./useSideA";

export default function SideA() {
  const dispatch = useDispatch();
  //   const [storage] = useSideA();
  //
  //   storage.set("SideA", "SideA");
  //
  //   const user = useSelector((state) => state.auth.user);
  //
  //   const handleSetUser = async () => {
  //     dispatch(fetchUserById(1));
  //   };

  const Box = () => {
    const hookHover = useHover();
    return (
      <div
        className="h-20 w-20 bg-slate-300 flex items-center justify-center"
        {...hookHover.event}
      >
        {hookHover.isHover ? "on" : "off"}
      </div>
    );
  };

  return (
    <div>
      {/* <button onClick={handleSetUser}>set State</button>
      <p>{JSON.stringify(user)}</p> */}
      {[1, 2, 3, 4].map((elm) => (
        <Box key={elm} />
      ))}
    </div>
  );
}
