// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbaar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-transparent">
        <div className="container-fluid">
          <Link to="" className="navbar-brand">
            <img src={logo} alt="" width="30" height="24" />
            <strong>Royal Fashion</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link mx-3" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/collection " className="nav-link mx-3">
                  Collections
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/brands" className="nav-link mx-3">
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/new" className="nav-link mx-3">
                  New
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link mx-3">
                  About Us
                </Link>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn-info rounded-pill"
              style={{ width: "120px" }}
            >
              {" "}
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbaar;
