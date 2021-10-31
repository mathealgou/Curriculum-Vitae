import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./views/home";
import { Competencies } from "./views/competencies";
import { Projects } from "./views/projects";
import { NavBar } from "./components/navBar";
import { Footer } from "./components/footer";
import "./index.scss";

function App() {
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
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
