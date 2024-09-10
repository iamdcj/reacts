import React, { useLayoutEffect, useEffect, useState } from "react";

export interface CounterProps {}

const Animation: React.SFC<CounterProps> = () => {
  const [position, setPosition] = useState(0);
  const [positionB, setPositionB] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [toggleB, setToggleB] = useState(false);

  useLayoutEffect(() => {
    if(!toggle) {
      return
    }

    const now = performance.now();

    while (performance.now() - now < 5000) {
      // this will block the painting of the button
      // this will block the button move
    }

    if (toggle) {
      setPosition(500);
    } else {
      setPosition(0);
    }
  }, [toggle]);

  useEffect(() => {
    if(!toggleB) {
      return
    }

    const now = performance.now();

    while (performance.now() - now < 2000) {
      // this will block the button move
    }

    if (toggleB) {
      setPositionB(500);
    } else {
      setPositionB(0);
    }
  }, [toggleB]);

  return (
    <>
      <div style={{ height: 150, background: "beige", marginBottom: 20 }}>
        <div
          style={{
            transform: `translateX(${position}%)`,
            background: "orange",
            height: 50,
            width: 150,
          }}
        >
          useLayoutEffect
        </div>
        <p>The button text change will </p>
        <button type="button" onClick={() => setToggle(!toggle)}>
          {toggle ? "END" : "START"}
        </button>
      </div>

      <div style={{ height: 150, background: "beige" }}>
        <div
          style={{
            transform: `translateX(${positionB}%)`,
            background: "lightblue",
            height: 50,
            width: 150,
          }}
        >
          useEffect
        </div>
        <p>Notice when the button text changes (paint occurs)</p>
        <button type="button" onClick={() => setToggleB(!toggleB)}>
          {toggleB ? "END" : "START"}
        </button>
      </div>
    </>
  );
};

export default Animation;
