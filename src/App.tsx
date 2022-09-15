/** @jsx h */
import { VNode, h } from 'preact';
import { Router, Route } from 'preact-router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Projects from './components/projects';

function App(): VNode {
  return (
    <div id="app">
      <Header />
      <Navbar />
      <div className="container-md main-container pt-3 pb-5">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
