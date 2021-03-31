import React, { useState } from 'react';

const TweetForm = (props: any) => {

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
          placeholder="O que está acontecendo?"
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Tweetar</button>
      </div>
    </form>
  );
}

export default TweetForm;
