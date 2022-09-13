import React from 'react';
import Image from './../img/face.jpg';

export default function Header(): React.ReactElement {
  return (
    <div className="header">
      <div className="info-container bg-very-dark pt-4 pb-4 row justify-content-md-center">
        <div className="col-md-auto">
          <img src={Image} alt="Me" className="me img-fluid" />
        </div>
        <div className="credentials col-md-auto">
          <h3 className="name text-primary text-center m-1 mt-3">Igor Bolotnikov</h3>
          <h5 className="position text-warning m-1 text-center">Full Stack Software Developer</h5>
        </div>
      </div>
    </div>
  );
}
