import { log } from "console";
import React, { useEffect, useState } from "react";

export interface CounterProps {}

const Cleanup: React.SFC<CounterProps> = () => {
  let [count, updateCount] = useState(0);

  const policeCount = (count: number) => {
    if (count < 0) {
      updateCount(0);
    } else {
      updateCount(count);
    }
  };

  useEffect(() => {
    const to = setTimeout(() => {
      updateCount(count+1)
    }, 1000);

    return () => {
      clearTimeout(to) // this clears the timeout on unmount
    }
  }, [count])

  return (
    <div>
      <h1>Counter</h1>
      <p>The following effects are used in this example:</p>
      <ul>
        <li>useState - this handles the state for the count value.</li>
        <li>useEffect - this introduces a side effect which causes the counter to update every second.</li>
      </ul>
      <span>{count}</span>
      <button onClick={() => policeCount(count + 1)}>+</button>
      <button onClick={() => policeCount(count - 1)}>-</button>
    </div>
  );
};

export default Cleanup;
