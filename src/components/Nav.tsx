import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import TweetForm from '../components/TweetForm';

const Nav = () => {

  const [display, setDisplay] = useState(false)

  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink to="/" activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/home" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          Profile
        </NavLink>
        <div onClick={() => {setDisplay(!display)}}>Tweet</div>
        {display && <TweetForm />}
      </li>
    </ul>
  );
}

export default Nav;
