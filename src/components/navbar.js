import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar-bordered bg-very-dark">
      <ul className="nav navlist justify-content-around">
        <li className="nav-item">
          <Link className="nav-link text-accent" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-accent" to="/projects">Projects</Link>
        </li>
        <div className="dropdown">
          <a className="nav-link dropdown-toggle text-accent" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Resume
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item text-accent" href="https://drive.google.com/file/d/1AgA7O7uNyCsMsvhrn5Ii4uxgZNG4ABm6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Russian
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item text-accent" href="https://drive.google.com/file/d/1rCcFuW5DhvoWmK35pDu84QUOVJY4GhKR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              English
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}
