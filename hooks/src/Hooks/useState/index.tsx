import React from "react";
import { Route } from "react-router-dom";
import BasicToggle from "./BasicToggle";
import Counter from "./Counter";

export interface UseStateProps {}

const UseState = () => {
  return (
    <div>
      <h1>The State Hook</h1>
      <p>The useState hook allows you to add state to your individual components</p>
      <p>Triggers re-render? Yes, when values changes.</p>
    </div>
  );
};

export default UseState;
