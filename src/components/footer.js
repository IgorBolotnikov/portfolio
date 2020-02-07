import React from 'react';
import GitHubLogo from './../img/GitHub-logo-small.png';
import HackerRankLogo from './../img/HackerRank-logo-small.png';
import LinkedInLogo from './../img/LinkedIn-logo-small.png';

export default function Footer(props) {
  return (
    <div className="footer bg-very-dark p-3">
      <div className="row justify-content-sm-center">
        <div className="col-sm-auto">
          <ul className="footer-links-list text-light no-styling pl-0">
            <LinkIcon
              link="https://github.com/IgorBolotnikov"
              icon={GitHubLogo}
              alt="GitHub"
            />
            <LinkIcon
              link="https://www.hackerrank.com/igorbolotnikov11"
              icon={HackerRankLogo}
              alt="HackerRank"
            />
            <LinkIcon
              link="https://www.linkedin.com/in/igor-bolotnikov-181a31a6/?originalSubdomain=ua"
              icon={LinkedInLogo}
              alt="LinkedIn"
            />
          </ul>
        </div>
        <div className="col-sm-auto">
          <ul className="footer-contacts-list  text-light no-styling pl-0">
            <li className="text-white-50 text-center">Odessa, Odessa state, Ukraine.</li>
            <li className="text-center"><a className="text-accent" href="mailto:igorbolotnikov1993@gmail.com">igorbolotnikov1993@gmail.com</a></li>
            <li className="text-center"><a className="text-accent" href="tel:+380674485807">+380674485807</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function LinkIcon(props) {
  return (
    <a href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li className="icon-bg m-3">
        <img className="icon" src={props.icon} alt={props.alt} />
      </li>
    </a>
  );
}
