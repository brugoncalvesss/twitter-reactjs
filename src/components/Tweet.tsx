import React from 'react'

const Tweet = (
  {
    avatar,
    author,
    twitteruser,
    posttime,
    posttext
  } : {
    avatar: string,
    author: string,
    twitteruser: string,
    posttime: string,
    posttext: string
  }
) => {

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

export default Tweet
