// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  var items = window.location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  }
  return result;
}

const App = () => {
  console.log(findGetParameter("id"));
  return (
    <Router>
      <div>
        {/* <nav class="text-center">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <p class="mt-20 text-3xl font-bold text-center">about</p>
          </Route>
          <Route path="/users">
            {/* <Users /> */}
            <p class="mt-20 text-3xl font-bold text-center">users</p>
          </Route>
          <Route path="/">
            <p class="mt-2 text-3xl font-bold text-center">main</p>
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
