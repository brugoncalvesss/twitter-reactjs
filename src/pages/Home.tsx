import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import TweetForm from '../components/TweetForm';

const Home = () => {

  const { user } = useContext(UserContext);

  return (
    <div className="app">
      <h1>Home</h1>
      <pre>{JSON.stringify(user)}</pre>
      <TweetForm user={user} />
    </div>
  );
}

export default Home;
