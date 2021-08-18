import React from "react";
import Button from "../button/Button";
import Digit from "../digit/Digit";

const Counter = (props) => {
  return (
    <div className="w-2/5 p-4 border-2 shadow-lg">
      <header className="w-full">
        <Digit countDigit={props.countDigit} />
      </header>
      <footer className="flex justify-around">
        <Button
          text="Add"
          clickAction={props.addHandler}
          color="bg-indigo-600"
        />
        <Button
          text="Minus"
          clickAction={props.minusHandler}
          color="bg-red-500"
        />
        <Button text="reset" clickAction={props.reset} color="bg-green-600" />
      </footer>
    </div>
  );
};

export default Counter;
