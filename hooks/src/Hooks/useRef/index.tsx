import React from "react";
import { Route, Link } from "react-router-dom";
import DOM from "./DOM";
import PrevState from "./PrevState";

export interface UseRefProps {}

const UseRef: React.SFC<UseRefProps> = () => {
  return (
    <div>
      <h1>The State Hook</h1>
      <nav>
        <h3>Hooks Navigation</h3>
        <ul>
          <li>
            <Link to="/use-ref/dom">DOM</Link>
          </li>
          <li>
            <Link to="/use-ref/prev-state">Previous State</Link>
          </li>
        </ul>
      </nav>
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
