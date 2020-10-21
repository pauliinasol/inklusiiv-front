import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Route exact path="/" component={HeaderFirst} /> */}
      <Route path="/board" component={Board} />
    </Router>
  );
};

export default App;
