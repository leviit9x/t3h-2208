import React from "react";

import { useDispatch } from "react-redux";

function createAction(type, payload) {
  return {
    type,
    payload,
  };
}

export default function SideA() {
  const dispatch = useDispatch();

  const handleSetUser = () => {
    const fakeUser = {
      username: "Nam dep trai",
      age: 22,
    };

    dispatch(createAction("auth/setUser", fakeUser));
  };

  return (
    <div>
      <button onClick={handleSetUser}>set User</button>
    </div>
  );
}
