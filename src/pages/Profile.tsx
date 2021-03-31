import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Profile = () => {

  const { user } = useContext(UserContext);

  return (
    <div className="app">
      <h1>Profile</h1>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
}

export default Profile;
