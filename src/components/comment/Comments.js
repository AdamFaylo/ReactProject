import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addComment, deleteComment } from "../../features/comments/comments-slice"
import { v4 } from "uuid"
import { IconTrash, IconEdit } from '@tabler/icons';
import { useEffect } from "react";
import "./comment.css"


export default function Comments() {
  const comments = useSelector(state => state.commentsReducer.comments)
  const dispatch = useDispatch()

  const [editting, setEditting] = useState({})

  useEffect(() => {
    const ids = comments.map(comment => comment.id)
    const ed = {}
    for (let id in ids)
      ed[id] = false
    setEditting(ed)
  }, [comments])
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
  return <div className="container_comment_center">
    <div className="container mt-5">
      <div className="justify-content-center">
        <div>
          <div className="d-flex flex-column comment-section gap_comment">
            {comments.map(comment => <div className="" ><div key={comment.writerName + comment.date}>
              {editting[comment.id] ? <input type='text' placeholder={comment.comment} /> : <span className="container_commment ">
                <div className="user-info">
                  <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                  <div className=" flex-column justify-content-start ml-2 "><span className="d-block font-weight-bold name">{comment.userName}</span></div>
                  <div className="mt-2"><p className="comment-text">{comment.comment}</p></div>
                  <div className="ml-2 "><span className="d-block font-weight-bold name">{comment.sharedPublicly}</span></div>
                  <div className="d-flex flex-row fs-12">
                    <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                    <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                    <div className="like p-2 cursor"><i className="fa fa-share"></i><span className="ml-1">Share</span></div>
                  </div>
                </div>
                <div className="btn_comment">
                  <div>
                    <IconTrash onClick={() => {
                      dispatch(deleteComment(comment.id))
                    }} />
                  </div>
                  <div>
                    <IconEdit onClick={() => {
                      const m = editting
                      m[comment.id] = !m[comment.id]
                      setEditting({ ...m })
                    }} />
                  </div>
                </div>
              </span>
              }
            </div>
            </div>)}
          </div >
        </div>
      </div>
    </div>
     {/* put comment */}
      <div className="comment_botton">
        <form onSubmit={addCommentSubmit} >
         
          <div className="bg-light p-2">
             <label>User Name</label>
          <br />
          <input required type="text" alt="date"/>
          <br />
          <label className="text-right">Date</label>
          <br />
          <input required type="date" alt="date"/>
          <br />
            <div className="d-flex flex-row align-items-start"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /><textarea className="form-control ml-1 shadow-none textarea" required type="text"></textarea></div>
            <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none" type='submit'>Add Comment</button></div>
          </div>
          <br />
          {/* <button type='submit' className="btn btn-info">Add Comment</button> */}
        </form>
      </div>
      {/* put comment */}
  </div>
}
