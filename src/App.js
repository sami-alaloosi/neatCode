/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";

import UserLogin from "./components/user/UserLogin";
import UserRegister from "./components/user/UserRegister";

import Markiting from "./components/Markiting";
import QuestionsList from "./components/QuestionsList";
import Todos from "./components/Todos";
import Notes from "./components/Notes";
import Jobs from "./components/Jobs";


import PrivateRouteLogin from "./privateRoutes/PrivateRouteLogin";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRouteLogin path="/Questions" component={QuestionsList} />
        <PrivateRouteLogin path="/Todos" component={Todos} />
        <PrivateRouteLogin path="/Notes" component={Notes} />
        <PrivateRouteLogin path="/Jobs" component={Jobs} />

        <Route path="/UserLogin">
          <UserLogin />
        </Route>

        <Route path="/UserRegister">
          <UserRegister />
        </Route>

        <Route pat="/">
          <Markiting />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
