import React from 'react';
import Image from 'react-async-image';

import SCRPRImage from './../img/scrpr.png';
import KarateCatImage from './../img/karate_cat.gif';
import SudokuSolverImage from './../img/sudoku_solver.gif';

export default function Projects(props) {
  return (
    <React.Fragment>
      <h4 className="text-accent text-center">Web Apps</h4>
      <ProjectCard
        image={SCRPRImage}
        title="SCRPR"
        website="https://scrpr-project.herokuapp.com"
        sourceCode="https://github.com/IgorBolotnikov/SCRPR"
      >
        A web scraper app for finding stuff depending on what
        you are looking for. Current version supports the following
        queries: PS4 games, job offers
        If you value your time, or just lazy to search
        manually (just like me), come on in!
      </ProjectCard>
      <div className="dropdown-divider"></div>
      <h4 className="text-accent text-center">Games</h4>
      <ProjectCard
        image={KarateCatImage}
        title="Karate Cat"
        sourceCode="https://github.com/IgorBolotnikov/karate-cat"
      >
        Turn-based fighting game, with pixel graphics, level-up mechanics
        and awesome cat as a main character.
      </ProjectCard>

      <ProjectCard
        image={SudokuSolverImage}
        title="Sudoku Solver"
        sourceCode="https://github.com/IgorBolotnikov/sudoku"
      >
        Sudoku solver using Backtrack algorithm with
        visualised process of solving.
      </ProjectCard>
    </React.Fragment>
  );
}

function ProjectCard(props) {
  return (
    <div className="m-2 mt-4 mb-4 row justify-content-sm-center">
      <div className="col-sm-5">
        <Image
          src={props.image}
          width="200"
          height="200"
          className="project-image mt-2"
          placeholder={<div className="placeholder">Oops...</div>}
        />
        <a
          href={props.website || props.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="stretched-link"
        >
        </a>
      </div>
      <div className="col-sm-7">
        <h5 className="text-accent text-center pt-2">{props.title}</h5>
        <p className="text-light">{props.children}</p>
        { props.website && <a className="text-accent" href={props.website} target="_blank" rel="noopener noreferrer">Visit website</a> }
        { props.website && props.sourceCode ? (<span className="text-light"> | </span>) : ("")}
        { props.sourceCode && <a className="text-accent" href={props.sourceCode} target="_blank" rel="noopener noreferrer">Source code</a> }
      </div>
      <br />
    </div>
  );
}
