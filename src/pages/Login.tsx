import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Login = () => {

  const message = useContext(UserContext);

  return (
    <div className="app">
      <h1>Login</h1>
      <p>{message}</p>
    </div>
  );
}

export default Login;
