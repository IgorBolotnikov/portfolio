/** @jsx h */
import { VNode, ComponentChildren, h } from 'preact';

import SCRPRImage from '../assets/img/scrpr.webp';
import KarateCatImage from '../assets/img/karate_cat.gif';
import SudokuSolverImage from '../assets/img/sudoku_solver.gif';
import CoinChangeVisualizerImage from '../assets/img/coin_change_visualizer.webp';
import Image from './image';

export default function Projects(): VNode {
  return (
    <>
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

      <div className="dropdown-divider" />
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

      <div className="dropdown-divider" />
      <h4 className="text-accent text-center">Visualizers</h4>
      <ProjectCard
        image={CoinChangeVisualizerImage}
        title="Coin Change Visualizer"
        website="https://igorbolotnikov.github.io/Coin-change-visualizer/"
        sourceCode="https://github.com/IgorBolotnikov/Coin-change-visualizer"
      >
        Visualizer of coin change algorithm with optimal amount of coins.
        Bonus feature is a playground with automated cachier business day simulation.
      </ProjectCard>
    </>
  );
}

interface ProjectCardProps {
  title: string
  image: string
  children: ComponentChildren
  sourceCode?: string
  website?: string
}

function ProjectCard(props: ProjectCardProps): VNode {
  const hasWebsite = Boolean(props.website);
  const hasCourceCode = Boolean(props.sourceCode);
  return (
    <div className="m-2 mt-4 mb-4 row justify-content-sm-center">
      <div className="col-sm-5 project-image-container">
        <a
          href={props.website !== undefined ? props.website : props.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={props.image}
            className="project-image mt-2"
            placeholder={<div className="placeholder">Oops...</div>}
          />
        </a>
      </div>
      <div className="col-sm-7">
        <h5 className="text-accent text-center pt-2">{props.title}</h5>
        <p className="text-light">{props.children}</p>
        {hasWebsite &&
          <a className="text-accent" href={props.website} target="_blank" rel="noopener noreferrer">Visit website</a>}
        {hasWebsite && hasCourceCode ? (<span className="text-light"> | </span>) : ('')}
        {hasCourceCode &&
          <a className="text-accent" href={props.sourceCode} target="_blank" rel="noopener noreferrer">Source code</a>}
      </div>
      <br />
    </div>
  );
}
