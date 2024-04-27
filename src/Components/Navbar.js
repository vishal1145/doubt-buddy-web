import React from "react";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid d-flex justify-content-between">
        <div className="">
          <a className="navbar-brand" href="#Home">
            <img className="logo" src="/Main Logo.png" alt="logo" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="bi bi-list"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="d-flex justify-content-end w-100">
            <ul className="navbar-nav d-flex justify-content-end w-100">
              <li className="nav-item">
                <a
                  className="nav-link main-gray"
                  aria-current="page"
                  href="#Features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link main-gray"
                  aria-current="page"
                  href="https://blog.doubtbuddy.com/"
                  target="_black"
                  rel="noreferrer"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link main-gray"
                  aria-current="page"
                  href="#Contact"
                >
                  Contact Us
                </a>
              </li>
              <button className="btn try nav-item">
                <a
                  className="text-decoration-none main-white"
                  href="https://play.google.com/store/apps/details?id=com.doubtbuddy.student&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it Now
                </a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
