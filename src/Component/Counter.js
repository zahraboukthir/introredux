import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment, resetcount } from "../JS/actions/counteractions";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <button onClick={() => dispatch(resetcount())}>reset</button>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
