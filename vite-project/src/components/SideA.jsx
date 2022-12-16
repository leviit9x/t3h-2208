import React from "react";
import { useHover } from "@hooks";

export default function SideA() {
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
      {[1, 2, 3, 4].map((elm) => (
        <Box key={elm} />
      ))}
    </div>
  );
}
