import { Badge, Box, Button, ButtonGroup } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React, { useState } from "react";

export interface CounterProps {}

const Counter = () => {
  let [count, updateCount] = useState(1);

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
      <p>
        The useState hook is used to update the counter when the user clicks on
        the increment or decrement button
      </p>
      <Box my={3}>
        <Badge badgeContent={count} color="secondary">
          <MailIcon color="action" />
        </Badge>
      </Box>
      <ButtonGroup>
        <Button onClick={() => policeCount(count + 1)}>+</Button>
        <Button onClick={() => policeCount(count - 1)}>-</Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
