import { useState } from "react";

export const useCounter = ({ initialValue, minValue, maxValue }) => {
  const [count, setCount] = useState(initialValue);

  const incCount = (value) => {
    value = value ? value : 1;
    if (count + value <= maxValue) {
      setCount((item) => item + value);
    }
  };

  const decCount = (value) => {
    value = value ? value : 1;
    if (count - value >= minValue) {
      setCount((item) => item - value);
    }
  };

  return { count, incCount, decCount };
};
