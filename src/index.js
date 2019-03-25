import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Board from "./Board";
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    {/* <Switch> */}
      <Route exact path="/" component={Login} />
      <Route path="/board/:name" component={Board} />
    {/* </Switch> */}
  </BrowserRouter>,
  document.getElementById("root")
);
