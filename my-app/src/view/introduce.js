import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="introduce">
        <Router>
          <div>
            <h2>Accounts</h2>
            <Route path="/me" component={Parent} />
          </div>
        </Router>
      </div>
    );
  }
}
const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);
const Parent = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/Netflix`}>Netflix</Link>
      </li>
      <li>
        <Link to={`${match.url}/6bu6`}>6bu6</Link>
      </li>
      <li>
        <Link to={`${match.url}/tst`}>tst</Link>
      </li>
    </ul>
    <Route path={`${match.url}/:id`} component={Child} />
  </div>
);

export default Introduce;
