import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import AnotherScreen from "./AnotherScreen";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/another" component={AnotherScreen} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
