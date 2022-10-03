import React, { Component } from "react";
// import { faHeart, faLight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "font-awesome/css/font-awesome.min.css";

class Like extends Component {
  render() {
    return !this.props.liked ? (
      <i
        onClick={this.props.onClick}
        style={{ backgroundColor: "white", color: "grey", cursor: "pointer" }}
        className=" fa  fa-heart "
      ></i>
    ) : (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className=" fa  fa-heart "
      ></i>
    );
  }
}

export default Like;
