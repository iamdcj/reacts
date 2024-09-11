import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@mui/material";
import UseState from "./Hooks/useState";
import UseRef from "./Hooks/useRef";
import Header from "./components/Header";
import UseEffect from "./Hooks/useEffect";
import UseLayoutEffect from "./Hooks/useLayoutEffect";
import UseCallbackHook from "./Hooks/useCallback";
// import UseReducer from "./Hooks/useReducer";

const routes = [
  { path: "/use-state", component: UseState},
  { path: "/use-ref", component: UseRef},
  { path: "/use-effect", component: UseEffect},
  { path: "/use-layout-effect", component: UseLayoutEffect},
  { path: "/use-callback", component: UseCallbackHook},
];

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Box width="75%" justifyContent="start" py={10}>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </Box>
      </main>
    </Router>
  );
};

export default App;
