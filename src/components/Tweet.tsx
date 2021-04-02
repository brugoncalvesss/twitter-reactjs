import React from 'react'
import PropTypes from 'prop-types'

const Tweet = ({ tweetData } : any) => {

  const {
    avatar,
    author,
    twitteruser,
    posttime,
    posttext,
  } = tweetData;

  return (
    <div className="d-flex">
      <div className="flex-shrink-0">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="flex-grow-1 ms-3">
        <div>
          <strong>{twitteruser}</strong> {author}
        </div>
        <div>
          <p>{posttext}</p>
        </div>
        <div>actions</div>
      </div>
    </div>
  )
}

Tweet.propTypes = {
  tweetData: PropTypes.object
}

export default Tweet
