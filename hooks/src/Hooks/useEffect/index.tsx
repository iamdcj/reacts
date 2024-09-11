import React from "react";
import { Route } from "react-router-dom";
import Fetch from "./fetch";

import { Box } from "@mui/material";
import Cleanup from "./cleanup";

export interface UseEffectProps {}

const useEffect= () => {
  return (
    <div>
      <Box mb={5}>
        <h1>The useEffect Hook</h1>
        <p>
          The useEffect hook allows you to track depedencies with your
          component, and perform some action based on said changes (side effects)
        </p>
        <p>
          The hook will run on every render, unless explicitly to configured to
          run based on certain depedencies, or one time by passing an empty dependency array.
        </p>
        <p>
          If you are setting state within a useEffect you must monitor
          dependencies to avoid triggering an infinite render loop
        </p>
        <p>Triggers re-render? No, but can often contain a call to set the component state..</p>

        <p>Common use cases include: fetching data from a remote source on mount, setting some initial state, reacting to a specific state change</p>
      </Box>
    </div>
  );
};

export default useEffect;
