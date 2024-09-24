import React, { useContext } from "react";
import themeContext from "../context/theme";

function Button({ text, className, ...props }) {
  // props pour récupérer toutes les autres propriétés des boutons, par exemple les évènements onClick

  const theme = useContext(themeContext);
  console.log(theme);

  return (
    <button {...props} className={`btn-${theme} mx-1`}>
      {text}
    </button>
  );
}

export default Button;
