import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Initial from "../containers/Initial";
import Register from '../containers/Register';
import Profile from "../containers/Profile";
import Verify from "../containers/Verify";

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Initial} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/verify" component={Verify} />
      </Switch>
    </BrowserRouter>
);

export default App;
