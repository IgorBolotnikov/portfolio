import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
