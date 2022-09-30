import React, { Component } from "react";
import { Badge } from "react-bootstrap";

const NavBar = ({ totalCounters }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <Badge className="bg-success">{totalCounters}</Badge>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
