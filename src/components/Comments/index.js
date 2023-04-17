import {v4 as uuid} from 'uuid'

import {useState} from 'react'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const Comments = () => {
  const [commentsList, setCommentsList] = useState([])
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const initialBackgroundClassName = `initial-container ${
    initialContainerBackgroundClassNames[
      Math.ceil(Math.random() * initialContainerBackgroundClassNames.length - 1)
    ]
  }`

  const onAddComments = event => {
    event.preventDefault()
    const newComment = {
      id: uuid(),
      name,
      comment,
      initialClassName: initialBackgroundClassName,
      isFavorite: false,
    }
    setCommentsList([...commentsList, newComment])
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeComment = event => {
    setComment(event.target.value)
  }

  const onDelete = id => {
    const filteredList = commentsList.filter(each => each.id !== id)
    setCommentsList(filteredList)
  }

  return (
    <div className="app-container">
      <div className="comments-container">
        <h1 className="app-heading">Comments</h1>
        <div className="comments-inputs">
          <form className="form" onSubmit={onAddComments}>
            <p className="form-description">
              Say something about 4.0 Technologies
            </p>

            <input
              className="name-input"
              onChange={onChangeName}
              type="text"
              placeholder="Your Name"
            />
            <textarea
              className="comment-input"
              onChange={onChangeComment}
              type=""
              placeholder="Your Comment"
            />
            <button className="add-button" type="submit">
              Add Comment
            </button>
          </form>

          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>

        <hr className="line" />
        <p className="heading">
          <span className="comments-count">{commentsList.length}</span>
          Comments
        </p>
        <ul>
          {commentsList.map(each => (
            <CommentItem
              key={each.id}
              commentDetails={each}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Comments
