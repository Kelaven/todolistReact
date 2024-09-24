import React from "react";

function Button({ text, ...props }) {
  // props pour récupérer toutes les autres propriétés des boutons, par exemple les évènements onClick
  return <button {...props}>{text}</button>;
}

export default Button;
