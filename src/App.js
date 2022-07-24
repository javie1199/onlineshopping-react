import React from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
