import React from 'react';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Navbar />
      <div className="container-md main-container pt-3 pb-5">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
