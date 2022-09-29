import React, { Component } from "react";
import { Badge } from "react-bootstrap";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
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
        {/* {this.props.children} */}
        {/* <h1>Counter Class</h1> */}
        <h2>Counter #{this.props.counter.id}</h2>
        <Badge style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </Badge>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
