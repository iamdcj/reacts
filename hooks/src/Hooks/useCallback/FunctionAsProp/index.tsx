import { Box, Button, TextField } from "@mui/material";
import React, { memo, useCallback, useEffect, useState } from "react";

export interface UseStateProps {}

const FunctionAsProp = () => {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string | null>(null);

  console.log("--------------");
  console.log("PARENT RENDER");
  console.log("--------------");

  const someHandler = useCallback(() => {
    console.log(value);
  }, [value]); // if the values of the dependencies change then the function will be created new
  // without this hook the function will be created new on every render, which could be frequent given how state is handled

  useEffect(() => {
    setValue("FIYAH");
  }, []);

  return (
    <Box>
        <h2>Passing Function as a Prop</h2>
        <p>Any function wrapped in a useCallback is considered a cached version of the function returned from the hook on the initial render</p>
        <p>This function will be considered the same unless it's dependencies change.</p>
        <p>This prevents re-renders when passed as a prop to a memoized child function</p>
      <div>
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></TextField>
      </div>
      <Button
        onClick={() => setValue(inputValue)}
        variant="contained"
        sx={{ my: 1 }}
      >
        Update Value
      </Button>
      <p>(Check the Console)</p>
      <ChildComponent callback={someHandler} />
      <a href="https://react.dev/reference/react/useCallback" target="_blank">
        Reference
      </a>
    </Box>
  );
};

const ChildComponent = memo(({ callback }: { callback: () => void }) => {
    // without the memo wrapper the useCallback addition will not be useful
    // and without the useCallback the component fill not memoize
  console.log("--------------");
  console.log("CHILD RENDER");
  callback();
  console.log("--------------");

  return <div></div>;
});

export default FunctionAsProp;
