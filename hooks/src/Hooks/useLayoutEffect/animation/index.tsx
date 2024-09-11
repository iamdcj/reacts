import { Box, Button } from "@material-ui/core";
import React, { useLayoutEffect, useEffect, useState } from "react";

export interface CounterProps {}

const Animation: React.SFC<CounterProps> = () => {
  const [position, setPosition] = useState(0);
  const [positionB, setPositionB] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [toggleB, setToggleB] = useState(false);

  useLayoutEffect(() => {
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
      <Box
        style={{ height: 150, background: "beige", marginBottom: 20 }}
        padding={3}
      >
        <Tile position={position} title="useLayoutEffect" />
        <p>
          The button text change will after you see the animation end - the
          blocking nature of useLayoutEffect prevents the paint from occuring
          till after the callback executes.
        </p>
        <Button type="button" variant="outlined" onClick={() => setToggle(!toggle)}>
          {toggle ? "END" : "START"}
        </Button>
      </Box>

      <Box style={{ height: 150, background: "beige" }} padding={3}>
        <Tile position={positionB} title="useEffect" />
        <p>
          Notice when the button text changes (paint occurs) before the
          animation fires - useEffect will not stand in the way of the painting,
          instead it will run after the rendering is complete.
        </p>
        <Button type="button" variant="outlined" onClick={() => setToggleB(!toggleB)}>
          {toggleB ? "END" : "START"}
        </Button>
      </Box>
    </>
  );
};

const Tile = ({ position, title }: { position: number; title: string }) => {
  return (
    <Box
      style={{
        transform: `translateX(${position}%)`,
        background: "lightblue",
        height: 50,
        width: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
      }}
      mb={2}
    >
      {title}
    </Box>
  );
};

export default Animation;
