import React from "react";
import { Route, Link } from "react-router-dom";
import DOM from "./DOM";
import PrevState from "./PrevState";


export interface UseRefProps {}

const UseRef = () => {
  return (
    <div>
      <h1>The State Hook</h1>
      <Route path="/use-ref/dom">
        <DOM />
      </Route>
      <Route path="/use-ref/prev-state">
        <PrevState />
      </Route>
    </div>
  );
};

export default UseRef;
