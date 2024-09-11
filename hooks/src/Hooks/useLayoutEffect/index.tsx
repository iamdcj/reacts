import React from "react";
import { Box } from "@mui/material";
import Tabs from "../../components/Tabs";
import ScrollTo from "./scrollTo";
import Animation from "./animation";

export interface useLayoutEffectProps {}

const useLayoutEffect = () => {
  return (
    <div>
      <Box mb={5}>
        <h1>The useLayoutEffect Hook</h1>
        <p>
          The useLayoutEffect hook allows you to perform a specific task before
          the browser's next - it is a blocking/synchhronous call.
        </p>
        <p>
          The hook will run on every render, unless explicitly to configured to
          run based on certain depedencies, or one time by passing an empty
          dependency array.
          <a href="https://refine.dev/blog/uselayouteffect-vs-useeffect/#comparing-useeffect-to-uselayouteffect">
            resource
          </a>
        </p>
        <p>
          If you are setting state within a useLayoutEffect you must monitor
          dependencies to avoid triggering an infinite render loop
        </p>
        <p>
          Trigegers re-render? No, but can often contain a call to set the
          component state..
        </p>

        <p>
          Common use cases include: fetching data from a remote source on mount,
          setting some initial state, reacting to a specific state change
        </p>
      </Box>
      <Tabs
        links={[
          { label: "Scroll", component: ScrollTo },
          { label: "Animation", component: Animation },
        ]}
      />
    </div>
  );
};

export default useLayoutEffect;
