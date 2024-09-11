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
          The useLayoutEffect hook provides a way to perform certain tasks before the next browser paint occurs - this is achived by blocking the next render/paint.
        </p>
        <p>
          This hook should be used sparingly, say for measuring DOM elements, or certain kinds of animation.
        </p>
      </Box>
      <Tabs
        links={[
          { label: "Animation", component: Animation },
          { label: "Scroll", component: ScrollTo },
        ]}
      />
    </div>
  );
};

export default useLayoutEffect;
