import { createStore } from "redux";
import React, { Component } from "react";
import ReactDOM from "react-dom";

let count = 0;
class CounterWrap extends Component {
  constructor(props) {
    super(props);
    this.handleTemp = this.handleTemp.bind(this);
  }
  componentDidMount() {}
  handleTemp(e) {
    // 接受父组件传递过来的函数，调用并传值
    var action = e.target.getAttribute("data-action");
    this.props.onClickbtn(action);
  }
  render() {
    return (
      <div>
        <p>{this.props.num}</p>
        <button data-action="increment" onClick={this.handleTemp}>
          +
        </button>
        <button data-action="decrement" onClick={this.handleTemp}>
          -
        </button>
      </div>
    );
  }
}

export default CounterWrap;
