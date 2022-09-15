/** @jsx h */
import { VNode, h } from 'preact';
import GitHubLogo from '../assets/img/GitHub-logo-small.svg';
import HackerRankLogo from '../assets/img/HackerRank-logo-small.svg';
import LinkedInLogo from '../assets/img/LinkedIn-logo-small.svg';
import EMailLogo from '../assets/img/email.png';

export default function Footer(): VNode {
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
              icon={EMailLogo}
              alt="eMail"
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

function LinkIcon(props: Props): VNode {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="m-3"
    >
      <li className="icon-bg">
        <img width={30} height={30} className="icon" src={props.icon} alt={props.alt} />
      </li>
    </a>
  );
}
