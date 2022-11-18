import React, { useState } from "react";

export interface BasicToggleProps {}

const BasicToggle: React.SFC<BasicToggleProps> = () => {
  const [isVisible, setVisibility] = useState(true);

  return (
    <div>
      <h1>Toggle Element</h1>
      <p>The following effects are used in this example:</p>
      <ul>
        <li>useState - this handles the state for visibility boolean.</li>
      </ul>
      {isVisible && <span>OI OI!</span>}
      <button onClick={() => setVisibility(!isVisible)}>Toggle Text</button>
    </div>
  );
};

export default BasicToggle;
