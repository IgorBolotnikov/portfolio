/** @jsx h */
import { VNode, h } from 'preact';
import { Router, Route } from 'preact-router';
// Default imports ensure route-based code splitting.
import Navbar from 'src/components/Navbar';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Projects from 'src/components/Projects';
import Footer from 'src/components/Footer';

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
