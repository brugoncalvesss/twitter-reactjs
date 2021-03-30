import React from 'react';
import { NavLink } from "react-router-dom";

const nav = () => {
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
      </li>
    </ul>
  );
}

export default nav;
