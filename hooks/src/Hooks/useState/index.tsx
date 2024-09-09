import React from "react";
import { Route, Link } from "react-router-dom";
import BasicToggle from "./BasicToggle";
import Counter from "./Counter";
import { Box } from "@material-ui/core";

export interface UseStateProps {}

const UseState: React.SFC<UseStateProps> = () => {
  return (
    <div>
      <h1>The State Hook</h1>
      <p>The useState hook allows you to add state to your individual components</p>
      <p>State updates trigger a re-render.</p>
      <Box component="nav" mb={5} display="flex">
        <h3>Hooks Navigation</h3>
        <ul>
          <li>
            <Link to="/use-state/basic-toggle">Basic Toggle</Link>
          </li>
          <li>
            <Link to="/use-state/counter">Counter</Link>
          </li>
        </ul>
      </Box>
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
