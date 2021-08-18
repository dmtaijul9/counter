import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Counter from "./components/counter/Counter";

const Home = () => {
  const [countDigit1, setCountDigit1] = useState(0);
  const [countDigit2, setCountDigit2] = useState(0);

  const addHandler1 = (e) => {
    setCountDigit1(countDigit1 + 1);
  };
  const addHandler2 = (e) => {
    setCountDigit2(countDigit2 + 1);
  };

  const minusHandler1 = (e) => {
    setCountDigit1(countDigit1 - 1);
  };

  const minusHandler2 = (e) => {
    setCountDigit2(countDigit2 - 1);
  };
  const reset1 = (e) => {
    setCountDigit1(0);
  };
  const reset2 = (e) => {
    setCountDigit2(0);
  };

  return (
    <div className="w-3/5 h-screen margin-auto">
      <div className="flex justify-between">
        <Counter
          countDigit={countDigit1}
          addHandler={addHandler1}
          minusHandler={minusHandler1}
          reset={reset1}
        />
        <Counter
          countDigit={countDigit2}
          addHandler={addHandler2}
          minusHandler={minusHandler2}
          reset={reset2}
        />
      </div>
    </div>
  );
};
export default Home;
