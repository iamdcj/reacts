import { Box } from "@mui/material";
import React from "react";
import Tabs from "../../components/Tabs";
import BasicToggle from "./BasicToggle";
import Counter from "./Counter";

export interface UseStateProps {}

const UseState = () => {
  return (
    <Box>
      <div>
        <h1>The useState Hook</h1>
        <p>
          The useState hook allows you to add state to your individual
          components
        </p>
        <p>Triggers re-render? Yes, when values changes.</p>
      </div>
      <Tabs
        links={[
          { label: "Basic Toggle", component: BasicToggle },
          { label: "Counter", component: Counter },
        ]}
      />
    </Box>
  );
};

export default UseState;
