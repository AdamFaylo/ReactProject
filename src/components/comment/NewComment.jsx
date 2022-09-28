import React from 'react';
import { useDispatch } from 'react-redux';
import "./comment.css";
import { v4 } from "uuid"
import { addComment } from "../../features/comments/comments-slice"

const NewComment = () => {
  const dispatch = useDispatch()
  const addCommentSubmit = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let comment = e.target[2].value
    let sharedPublicly = e.target[1].value
    dispatch(addComment({
      id: v4(),
      userName: name,
      comment,
      sharedPublicly
    }))
  }
  return (
    <div className="comment_botton">
    <form onSubmit={addCommentSubmit} >
       
      <div className="bg-light p-2">
        <div className="d-flex flex-row align-items-start">
            <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
            <textarea className="form-control ml-1 shadow-none textarea" required type="text">
            </textarea>
          </div>
        <div>
          <label>User Name</label>
          <br />
          <input required type="text" alt="date" />
        </div>
        <div>
          <label className="text-right">Date</label>
          <br />
          <input className="input_data" required type="date" alt="date" />
        </div>
        <br />
        <div>
          <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none" type='submit'>Add Comment</button></div>
        </div>
      </div>
      <br />
      {/* <button type='submit' className="btn btn-info">Add Comment</button> */}
    </form>
  </div>
  )
}

export default NewComment