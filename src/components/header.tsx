/** @jsx h */
import { VNode, h } from 'preact';
import Me from '../assets/img/face.jpg';
import Image from './image';

export default function Header(): VNode {
  return (
    <div className="header">
      <div className="info-container bg-very-dark pt-4 pb-4 row justify-content-md-center">
        <div className="col-md-auto">
          <Image src={Me} alt="Me" className="me img-fluid" />
        </div>
        <div className="credentials col-md-auto">
          <h3 className="name text-primary text-center m-1 mt-3">Igor Bolotnikov</h3>
          <h5 className="position text-warning m-1 text-center">Full Stack Software Developer</h5>
        </div>
      </div>
    </div>
  );
}
