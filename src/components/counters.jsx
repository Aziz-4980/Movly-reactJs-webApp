import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters, onDecrement } =
      this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-success btn-bg">
          Reset Counters
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            key={counter.id}
            counter={counter}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
