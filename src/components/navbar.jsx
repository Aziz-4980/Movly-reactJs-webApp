import React, { Component } from "react";
import { Badge } from "react-bootstrap";
class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar{" "}
              <Badge className="bg-success">{this.props.totalCounters}</Badge>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
