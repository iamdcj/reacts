import React, { useState } from "react";

export interface CounterProps {}

const Counter: React.SFC<CounterProps> = () => {
  let [count, updateCount] = useState(0);

  const policeCount = (count: number) => {
    if (count < 0) {
      updateCount(0);
    } else {
      updateCount(count);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>The following effects are used in this example:</p>
      <ul>
        <li>useState - this handles the state for the count value.</li>
      </ul>
      <span>{count}</span>
      <button onClick={() => policeCount(count + 1)}>+</button>
      <button onClick={() => policeCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
