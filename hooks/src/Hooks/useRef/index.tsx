import React from "react";
import { Route, Link } from "react-router-dom";
import DOM from "./DOM";
import PrevState from "./PrevState";
import SubNav from "../../components/SubNav";

export interface UseRefProps {}

const UseRef: React.SFC<UseRefProps> = () => {
  return (
    <div>
      <h1>The State Hook</h1>
      <SubNav
        title="useEffect Examples"
        links={[{ path: "/use-ref/dom", label: "DOM" }, { path: "/use-ref/prev-state", label: "Previous State" }]}
      />
      <Route path="/use-ref/dom">
        <DOM />
      </Route>
      <Route path="/use-ref/prev-state">
        <PrevState />
      </Route>
    </div>
  );
};

export default UseRef;
