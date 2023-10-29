import React from 'react'
//  import css from '../Hadder/Navbaar.modul.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"
import '../Hadder/Navbaar.modul.css'
import logo from '../../assets/logo.png'
function Navbaar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="30" height="24" style={{ borderRadius: "9px" }} />

                        <strong>Royal Fashion</strong>
                    </a>
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
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href='#Collection'>
                                    Collections
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">
                                    Brands
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">
                                    New
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">
                                    About US
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbaar
