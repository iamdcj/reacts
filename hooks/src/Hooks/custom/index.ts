import { useReducer, useRef, useEffect } from "react";

export const useSetState = (initialState: any) => {
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    initialState
  );

  return [state, setState];
};

export const usePrevious = (value: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return [ref.current];
};
