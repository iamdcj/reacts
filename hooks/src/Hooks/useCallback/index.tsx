import React from "react";
import FunctionAsProp from "./FunctionAsProp";
import Tabs from "../../components/Tabs";

export interface UseStateProps {}

const UseCallbackHook = () => {
  return (
    <div>
      <h1>The UseCallback Hook</h1>
      <p>
        The useCallback hook is an optimization hook that can be used to ensure a memoized version of a function is created, thus allowing for referential equality.
      </p>
      <p>This is especially useful if you pass a function as a proper to a child, or if a function is a dependency of a useEffect hook</p>
      <Tabs
        links={[{ label: "Function as Prop", component: FunctionAsProp }]}
      />
    </div>
  );
};

export default UseCallbackHook;
