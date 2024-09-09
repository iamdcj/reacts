import React from "react";
import { Route, Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import Fetch from "./fetch";

export interface UseEffectProps {}

const useEffect: React.SFC<UseEffectProps> = () => {
  return (
    <div>
      <h1>The Effect Hook</h1>
      <p>The useEffect hook allows you to track depedencies with your component, and perform some action based on said changes</p>
      <p>The hook will run on every render, unless explicitly to configured to run based on certain depedencies, or one time.</p>
      <p>If you are setting state within a useEffect you must monitor dependencies to avoid triggering an infinite render loop</p>
      <Box component="nav" mb={5} display="flex">
        <h3>Hooks Navigation</h3>
        <ul>
          <li>
            <Link to="/use-effect/fetch">Fetch</Link>
          </li>
        </ul>
      </Box>
      <Route path="/use-effect/fetch">
        <Fetch />
      </Route>
    </div>
  );
};

export default useEffect;
