import React from "react";
import { Route, Link } from "react-router-dom";
import BasicToggle from "./BasicToggle";
import Counter from "./Counter";

export interface UseStateProps {}

const UseState: React.SFC<UseStateProps> = () => {
  return (
    <div>
      <h1>The State Hook</h1>
      <nav>
        <h3>Hooks Navigation</h3>
        <ul>
          <li>
            <Link to="/use-state/basic-toggle">Basic Toggle</Link>
          </li>
          <li>
            <Link to="/use-state/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <Route path="/use-state/basic-toggle">
        <BasicToggle />
      </Route>
      <Route path="/use-state/counter">
        <Counter />
      </Route>
    </div>
  );
};

export default UseState;
