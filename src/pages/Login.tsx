import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Login = () => {

  const { user } = useContext(UserContext);

  return (
    <div className="app">
      <h1>Login</h1>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
}

export default Login;
