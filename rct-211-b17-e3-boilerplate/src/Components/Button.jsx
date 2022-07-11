import { useState } from "react";

export const Button = ({ colorScheme, size, variant }) => {
  const [color, setColor] = useState();
  const [fontSize, setFontSize] = useState();
  const [vari, setVari] = useState();
  return (
    <button style={{ color: colorScheme, fontSize: size, variant: variant }}>
      Button
    </button>
  );
};
