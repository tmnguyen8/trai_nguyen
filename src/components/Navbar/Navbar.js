import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";

function myNavBar() {
    return (
        <Navbar className="border-bottom" bg="transparent" expand="lg">
            <h1>Trai Nguyen</h1>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
    )
};

export default myNavBar;