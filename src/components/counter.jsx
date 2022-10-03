import React, { Component } from "react";
import { Badge } from "react-bootstrap";

class Counter extends Component {
  getBadgeClasses() {
    let classes = "bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <Badge style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
            {this.formatCounter()}
          </Badge>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
