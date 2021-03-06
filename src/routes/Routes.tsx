import React, { useState, useEffect } from 'react';
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

  const [user, setUser] = useState({});

  useEffect(() => {

    // TODO: receive data user

    const data = {
      userName: 'brugoncalvesss',
      userId: '5effe0bd-98a6-41fc-a861-1ff1610ddabb'
    };
    setUser(data);
  }, []);

  return (
    <div className="nav">
      <Router>
        <UserContext.Provider value={{user, setUser}}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/Profile" component={Profile}></Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default Routes;
