import React from 'react';
import GitHubLogo from '../img/GitHub-logo-small.png';
import HackerRankLogo from '../img/HackerRank-logo-small.png';
import LinkedInLogo from '../img/LinkedIn-logo-small.png';
import MailLogo from '../img/mail.png';

export default function Footer(): React.ReactElement {
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
            <LinkIcon
              link="mailto:igorbolotnikov1993@gmail.com"
              icon={MailLogo}
              alt="Mail"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

interface Props {
  link: string
  icon: string
  alt: string
}

function LinkIcon(props: Props): React.ReactElement {
  return (
    <a href={props.link}
       target="_blank"
       rel="noopener noreferrer"
       className="m-3"
    >
      <li className="icon-bg">
        <img className="icon" src={props.icon} alt={props.alt} />
      </li>
    </a>
  );
}
