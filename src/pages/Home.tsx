import React, { useState, useEffect } from 'react'

import data from '../data.json'
import Tweet from '../components/Tweet'

const Home = () => {

  const [tweets, setTweets] = useState([])

  useEffect(() => {
    // TODO: get tweets
  }, [])

  return (
    <div className="app">
      <h1>Home</h1>
      {data && data.map((tweet, index) => (
        <Tweet
          key={index}
          tweetData={tweet}
        />
      ))}
    </div>
  )
}

export default Home
