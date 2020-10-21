import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import Container from "./RouteContainer";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Container />
    </Router>
  );
};

export default App;
