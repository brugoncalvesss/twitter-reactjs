import React, { useState } from 'react'

const TweetForm = () => {

  const [message, setMessage] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log('Um nome foi enviado: ' + message);
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
