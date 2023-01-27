/** @jsx h */
import { VNode, h } from 'preact';
import { Link } from 'preact-router';

import './Navbar.sass';

export function Navbar(): VNode {
  return (
    <nav className="navbar-bordered bg-very-dark">
      <ul className="nav navlist justify-content-center">
        <li className="nav-item mr-5">
          <Link className="nav-link text-accent" href="/">About</Link>
        </li>
        <li className="nav-item ml-5">
          <Link className="nav-link text-accent" href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
