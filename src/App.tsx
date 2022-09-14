import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';

const LazyHome = lazy(async () => await import('./components/home'));
const LazyProjects = lazy(async () => await import('./components/projects'));

function App(): React.ReactElement {
  return (
      <Router basename="">
        <Header />
        <Navbar />
        <div className="container-md main-container pt-3 pb-5">
          <React.Suspense fallback={<h4 className="text-accent text-center">Loading...</h4>}>
            <Routes>
              <Route path="/" element={<LazyHome />} />
              <Route path="/projects" element={<LazyProjects />} />
            </Routes>
          </React.Suspense>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
