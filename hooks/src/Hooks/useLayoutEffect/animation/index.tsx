import { Box, Button } from "@mui/material";
import React, { useLayoutEffect,  useState } from "react";

export interface CounterProps {}

const delay = (amount: number) => {
  const now = performance.now();
  while (performance.now() - now < amount) {
    // this will block the painting of the button
    // this will block the button move
  }
};

const Animation = () => {
  return (
    
      <Box
        style={{ height: 150, background: "beige", marginBottom: 20 }}
        padding={3}
      >
        <p>
          The button text change will after you see the animation end - the
          blocking nature of useLayoutEffect prevents the paint from occuring
          till after the callback executes.
        </p>
        <TileUseLayoutEffect />
        <p>Note: since React 18 the useEffect hook will work the same way for this sort of scenario.</p>
      </Box>
  );
};

const TileUseLayoutEffect = () => {
  const [position, setPosition] = useState(0);
  const [toggle, setToggle] = useState(false);

  useLayoutEffect(() => {
    if (toggle) {
      delay(5000);
      setPosition(500);
    } else {
      setPosition(0);
    }
  }, [toggle]);

  return (
    <>
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
        useLayoutEffect
      </Box>

      <Button
        type="button"
        variant="outlined"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "END" : "START"}
      </Button>
    </>
  );
};

export default Animation;
