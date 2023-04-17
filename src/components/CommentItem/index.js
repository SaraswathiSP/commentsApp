// Write your code here

import {formatDistanceToNow} from 'date-fns'
import {useState} from 'react'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDelete} = props
  const {id, name, comment, initialClassName} = commentDetails
  const initial = name.slice(0, 1)

  const [isClicked, setIsClicked] = useState(false)

  const onClickLikeButton = () => {
    setIsClicked(!isClicked)
  }

  const likeImg = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const likeTextClassName = isClicked ? 'button active' : 'button'

  const time = formatDistanceToNow(new Date())

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <>
      <li className="comment-item">
        <div className="comment-container">
          <div className={initialClassName}>
            <p className="initial">{initial}</p>
          </div>
          <div>
            <div className="username-time-container">
              <p className="username">{name}</p>
              <p className="time">{time}</p>
            </div>
            <p className="comment">{comment}</p>
          </div>
        </div>
        <div className="buttons-container">
          <div className="like-container">
            <img className="like-image" src={likeImg} alt="like" />
            <button
              className={likeTextClassName}
              type="button"
              onClick={onClickLikeButton}
            >
              Like
            </button>
          </div>
          <button className="button" type="button" onClick={onClickDelete}>
            <img
              className="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
        <hr className="comment-line" />
      </li>
    </>
  )
}
export default CommentItem
