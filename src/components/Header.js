import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary" data-bs-theme='dark'>
  <div className="container-fluid">
  <Link className="navbar-brand" to="/"  >
    i Weather<i className="fas fa-cloud"></i> 
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
      <ul className="navbar-nav mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link" activeClassName='is-active' aria-current="page" to="/"  >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName='is-active' to="/about">About</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  );
}
