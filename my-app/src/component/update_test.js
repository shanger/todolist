import React, { Component } from "react";
import "../css/update_test.css";
class Updatetst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  Add() {
    this.setState({ count: ++this.state.count });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count % 2 !== 0) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div className="updatetst">
        <h2
          onClick={() => {
            this.Add();
          }}
        >
          update {this.state.count}
        </h2>
      </div>
    );
  }
}

export default Updatetst;
