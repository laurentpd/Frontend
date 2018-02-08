import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Problems from "./pages/Problems.jsx";
import Help from "./pages/Help.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Settings from "./pages/Settings.jsx";

const app = document.getElementById("app");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="problems" name="problems" component={Problems} />
      <Route path="settings" name="settings" component={Settings} />
      <Route path="help" name="help" component={Help} />
    </Route>
  </Router>,
  app
);
