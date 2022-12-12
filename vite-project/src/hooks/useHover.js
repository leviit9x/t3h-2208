import { useState } from "react";

export function useHover() {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return {
    isHover,
    event: {
      onMouseEnter,
      onMouseLeave,
    },
  };
}
