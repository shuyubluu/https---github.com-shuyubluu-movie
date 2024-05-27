import React from "react";

function Button({ onClick, active, label }) {
  return (
    <button onClick={onClick} className={active ? "active" : ""}>
      {label}
    </button>
  );
}

export default Button;
