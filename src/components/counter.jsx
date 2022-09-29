import React, { Component } from "react";
import { Badge } from "react-bootstrap";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7"],
  };
  getBadgeClasses() {
    let classes = "bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        {/* <h1>Counter Class</h1> */}
        <Badge style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </Badge>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* {this.state.tags.length === 0 ? (
          "please add something in tags"
        ) : ( */}
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}> {tag}</li>
          ))}
        </ul> */}
        {/* )} */}
      </div>
    );
  }
}

export default Counter;
