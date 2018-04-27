import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./view/App";
import Introduce from "./view/introduce";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/me" component={Introduce} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
