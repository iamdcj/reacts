import React, { useRef, useEffect, useState } from "react";

export interface DOMProps {}

const PrevState: React.SFC<DOMProps> = () => {
  const prevState = useRef() as React.MutableRefObject<number>;
  const [count, setCount] = useState(0);

  useEffect(() => {
    prevState.current = count;
  });

  return (
    <>
      <h1>Previous State</h1>
      <p>The following effects are used in this example:</p>
      <ul>
        <li>useState - this handles the state for the count variable.</li>
        <li>
          useRef - this captures the previous version of the count variable.
        </li>
        <li>
          useEffect - this the capturing of previous versio of the count
          variable with every update.
        </li>
      </ul>
      <p>
        Current Count: {count} | Previous Count:{prevState.current}
      </p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </>
  );
};

export default PrevState;
