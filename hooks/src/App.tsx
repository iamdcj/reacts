import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UseState from "./Hooks/useState";
import UseRef from "./Hooks/useRef";
import Header from "./components/Header";
import { Box } from "@material-ui/core";
import UseEffect from "./Hooks/useEffect";
import UseLayoutEffect from "./Hooks/useLayoutEffect";
// import UseReducer from "./Hooks/useReducer";

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Box width="75%" justifyContent="start" py={10}>
          <Switch>
            <Route path="/use-state">
              <UseState />
            </Route>
            <Route path="/use-ref">
              <UseRef />
            </Route>
            <Route path="/use-effect">
              <UseEffect />
            </Route>
            <Route path="/use-layout-effect">
              <UseLayoutEffect />
            </Route>
          </Switch>
        </Box>
      </main>
    </Router>
  );
};

export default App;
