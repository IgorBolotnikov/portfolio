/** @jsx h */
import { VNode, h } from 'preact';

import './Home.sass';

export function Home(): VNode {
  return (
    <>
      <h4 className="text-accent">Hi!</h4>
      <p className="text-main">
        I am an aspiring web developer. I love building great products with
        over-the-top attention to details and beautiful design. You can check
        out my work in the Projects tab.
      </p>
      <h4 className="text-accent">Technologies</h4>
      <div className="row">
        <div className="col-sm-6">
          <h6 className="text-accent">Backend</h6>
          <p className="text-main mb-1">Python</p>
          <ul className="no-styling">
            <li className="text-main">Flask</li>
            <li className="text-main">Django</li>
            <li className="text-main">Django REST Framework</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h6 className="text-accent">Frontend</h6>
          <p className="text-main mb-1">JavaScript</p>
          <ul className="no-styling">
            <li className="text-main">Angular</li>
            <li className="text-main">React</li>
            <li className="text-main">Preact</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h6 className="text-accent">Databases</h6>
          <p className="text-main mb-1">SQL</p>
          <ul className="no-styling">
            <li className="text-main">PostgreSQL</li>
            <li className="text-main">MySQL</li>
          </ul>
          <p className="text-main mb-1">NoSQL</p>
          <ul className="no-styling">
            <li className="text-main">MongoDB</li>
            <li className="text-main">Redis</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h6 className="text-accent">Other tools</h6>
          <ul className="no-styling">
            <li className="text-main">Git/Git Flow</li>
            <li className="text-main">Docker</li>
          </ul>
        </div>
      </div>
    </>
  );
}
