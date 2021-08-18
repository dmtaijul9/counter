import React from "react";

const Button = (props) => {
  return (
    <button
      className={`px-5 py-2 text-white ${props.color} rounded`}
      onClick={props.clickAction}
    >
      {props.text}
    </button>
  );
};

export default Button;
