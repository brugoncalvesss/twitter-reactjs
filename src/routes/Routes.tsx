import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Nav from '../components/Nav';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

import { UserContext } from '../UserContext';

const Routes = () => {
  return (
    <div className="nav">
      <Router>
        <Nav />
        <Switch>
          <UserContext.Provider value="Hello">
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/Profile" component={Profile}></Route>
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
