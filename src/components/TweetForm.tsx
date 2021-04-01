import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

const TweetForm = (props: any) => {

  const { user } = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // TODO: save tweet
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          name="message"
          placeholder="What's happening?"
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Tweet</button>
      </div>
    </form>
  );
}

export default TweetForm;
