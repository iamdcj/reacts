import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UseState from "./Hooks/useState";
import UseRef from "./Hooks/useRef";
import Header from "./components/Header";
// import UseReducer from "./Hooks/useReducer";
// import UseEffect from "./Hooks/useEffect";

const App = () => {
  return (
    <Router>
      <main>
        <Header />

        <Switch>
          <Route path="/use-state">
            <UseState />
          </Route>

          <Route path="/use-ref">
            <UseRef />
          </Route>
          {/* 
          <Route path="/use-ref">
            <UseEffect />
          </Route>

          <Route path="/use-reducer">
            <UseReducer />
          </Route> */}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
