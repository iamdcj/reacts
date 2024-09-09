import React from "react";
import { Route } from "react-router-dom";
import Fetch from "./fetch";
import SubNav from "../../components/SubNav";
import { Box } from "@material-ui/core";
import Cleanup from "./cleanup";

export interface UseEffectProps {}

const useEffect: React.SFC<UseEffectProps> = () => {
  return (
    <div>
      <Box mb={5}>
        <h1>The Effect Hook</h1>
        <p>
          The useEffect hook allows you to track depedencies with your
          component, and perform some action based on said changes
        </p>
        <p>
          The hook will run on every render, unless explicitly to configured to
          run based on certain depedencies, or one time.
        </p>
        <p>
          If you are setting state within a useEffect you must monitor
          dependencies to avoid triggering an infinite render loop
        </p>
        <p>Triggers re-render? No, but can often contain a call to set the component state..</p>
      </Box>
      <SubNav
        title="useEffect Examples"
        links={[{ path: "/use-effect/fetch", label: "Fetch" }, { path: "/use-effect/cleanup", label: "Cleanup" }]}
      />
      <Route path="/use-effect/fetch">
        <Fetch />
      </Route>
      <Route path="/use-effect/cleanup">
        <Cleanup />
      </Route>
    </div>
  );
};

export default useEffect;
