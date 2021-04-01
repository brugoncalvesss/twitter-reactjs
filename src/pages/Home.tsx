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
          avatar={tweet.avatar}
          author={tweet.author}
          twitteruser={tweet.twitteruser}
          posttime={tweet.posttime}
          posttext={tweet.posttext}
        />
      ))}
    </div>
  )
}

export default Home
