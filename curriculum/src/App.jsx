import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./views/home";
import { Competencies } from "./views/competencies";
import { NavBar } from "./components/navBar";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);
  console.log(Route);
  return (
    <Router>
      <div>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/competencies">
            <Competencies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
