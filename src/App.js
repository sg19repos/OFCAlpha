import React from "react";
import LayoutContainer from "./Modules/Common/Pages/LayoutContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import GlobalCSS from "../src/GlobalTheme";
import SecondPage from "./Modules/Consigner/Pages/Secondpage";
import { Counter } from "./features/counter/Counter";

function App() {
  GlobalCSS();
  return (
    // <Router>
    //   <LayoutContainer />
    //   {/*<Counter />*/}
    // </Router>

    <Router>
      {/* {window.location.pathname !== "/" ? <Header /> : null} */}

      <Switch>
        <Route path="/">
          <LayoutContainer />
        </Route>
        <Route path="/home">
          <LayoutContainer />
        </Route>
        <Route path="/secondpage">
          <SecondPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
