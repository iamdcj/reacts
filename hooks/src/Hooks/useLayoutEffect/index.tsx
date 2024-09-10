import React from "react";
import { Route } from "react-router-dom";
import ScrollTo from "./scrollTo";
import Animation from "./animation";
import SubNav from "../../components/SubNav";
import { Box } from "@material-ui/core";

export interface useLayoutEffectProps {}

const useLayoutEffect: React.SFC<useLayoutEffectProps> = () => {
  return (
    <div>
      <Box mb={5}>
        <h1>The useLayoutEffect Hook</h1>
        <p>
          The useLayoutEffect hook allows you to perform a specific task before the browser's next - it is a blocking/synchhronous call.
        </p>
        <p>
          The hook will run on every render, unless explicitly to configured to
          run based on certain depedencies, or one time by passing an empty dependency array.

          <a href="https://refine.dev/blog/uselayouteffect-vs-useeffect/#comparing-useeffect-to-uselayouteffect">resource</a>
        </p>
        <p>
          If you are setting state within a useLayoutEffect you must monitor
          dependencies to avoid triggering an infinite render loop
        </p>
        <p>Triggers re-render? No, but can often contain a call to set the component state..</p>

        <p>Common use cases include: fetching data from a remote source on mount, setting some initial state, reacting to a specific state change</p>
      </Box>
      <SubNav
        title="useLayoutEffect Examples"
        links={[{ path: "/use-layout-effect/scrollTo", label: "Scroll" },{ path: "/use-layout-effect/animation", label: "Animation" }, ]}
      />
      <Route path="/use-layout-effect/scrollTo">
        <ScrollTo />
      </Route>
      <Route path="/use-layout-effect/animation">
        <Animation />
      </Route>
    </div>
  );
};

export default useLayoutEffect;
