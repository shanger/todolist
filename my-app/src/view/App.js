import React, { Component } from "react";
import logo from "../logo.svg";
import Clock from "../component/clock";
import Updatetst from "../component/update_test";
import CounterWrap from "../component/counter";
import reducer from "../redux/reducer";
import { createStore } from "redux";
import "../css/App.css";
const ele = <h1>hello,everyone</h1>;
let store = createStore(reducer);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "todo1",
          done: "not"
        },
        {
          title: "todo2",
          done: "not"
        },
        {
          title: "todo3",
          done: "not"
        },
        {
          title: "todo4",
          done: "not"
        }
      ],
      doneList: [],
      msg: "from parent",
      num: 0
    };
    this.handleCounter = this.handleCounter.bind(this);
  }
  showTitle(arg) {
    let arr = this.state.list;
    arr.forEach(ele => {
      if (ele.title === arg) {
        ele.done = ele.done === "not" ? "done" : "not";
      }
    });
    this.setState({ list: arr });
  }
  componentDidMount() {
    console.log("this is parent");
  }
  handleCounter(arg) {
    let _num = this.state.num;
    if (arg == "increment") {
      this.setState({
        num: ++_num
      });
      // store.dispatch({ type: "INCREMENT" });
    } else if (arg == "decrement") {
      this.setState({
        num: --_num
      });
      // store.dispatch({ type: "DECREMENT" });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {ele}
        <h1>Todo List</h1>
        <ul>
          {this.state.list.map((ele, index) => {
            return (
              ele.done !== "done" && (
                <li
                  key={index}
                  className={ele.done}
                  onClick={() => {
                    this.showTitle(ele.title);
                  }}
                >
                  {ele.title}
                </li>
              )
            );
          })}
        </ul>
        <h2>done list</h2>
        <ul>
          {this.state.list.map((ele, index) => {
            return (
              ele.done === "done" && (
                <li
                  key={index}
                  className={ele.done}
                  onClick={() => {
                    this.showTitle(ele.title);
                  }}
                >
                  {ele.title}
                </li>
              )
            );
          })}
        </ul>
        <Clock />
        <h3>flex 布局</h3>
        <Updatetst />
        <div className="flex-box">
          <div />
          <div />
          <div />
        </div>
        <CounterWrap num={this.state.num} onClickbtn={this.handleCounter} />
        <div id="tst" />
      </div>
    );
  }
}

export default App;
