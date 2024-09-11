import React from "react";
import SubNav from "../../components/SubNav";

export interface UseStateProps {}

const UseEffectHook: React.SFC<UseStateProps> = () => {
  return (
    <div>
      <h1>The State Hook</h1>
      <p>The useState hook allows you to add state to your individual components</p>
      <p>Triggers re-render? Yes, when values changes.</p>
      <SubNav title="useEffect Examples" links={[{ path:'/use-state/basic-toggle', label: 'Basic Toggle'}, { path:'/use-state/counter', label: 'Counter'}]}/>
    </div>
  );
};

export default UseEffectHook;
