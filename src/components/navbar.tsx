import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(): React.ReactElement {
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
            My CV
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item text-accent pt-2 pb-2" href="https://drive.google.com/file/d/1dv9CV9oiSK-itODFyFfh6uC183u04AoN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Russian
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item text-accent pt-2 pb-2" href="https://drive.google.com/file/d/1RZdljXDVLZDGwur2U72NMnyvROv_-PO-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              English
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}