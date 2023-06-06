import React, { useState } from "react";
import store from "../store";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterState = () => {
    const latestState = store.getState();
    // console.log(latestState);
    setCounter(latestState.counter);
  };

  store.subscribe(counterState);

  const incrementer = () => {
    store.dispatch({ type: "increment" });
  };
  const decrementer = () => {
    store.dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h1>Here goes the counter</h1>
      <p>{counter}</p>
      <button onClick={incrementer}>Add+</button>
      &nbsp; &nbsp;
      <button onClick={decrementer}>Sub-</button>
    </div>
  );
};

export default Counter;
