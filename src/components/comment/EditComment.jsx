import React from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addComment, deleteComment } from "../../features/comments/comments-slice"
import { v4 } from "uuid"
import { IconTrash, IconEdit } from '@tabler/icons';
import { useEffect } from "react";
import "../CssControls/comment.css"
import {editComment} from '../../features/comments/comments-slice';
import { BsFillNutFill } from "react-icons/bs";
const EditComment = () => {
  const comments = useSelector((state) => state.commentsReducer.comments);
  const dispatch = useDispatch();
  const [editting, setEditting] = useState({});

  const submit = (e,comment) =>{
    e.preventDefault()
    const newCommentContent = e.target[0].value
    let newComment = {...comment,comment:newCommentContent}
     dispatch(editComment(newComment))
     const m = editting
     editting[comment.id] = false
     
     setEditting({...m})
  }
  useEffect(() => {
    const ids = comments.map((comment) => comment.id);
    const ed = {};
    for (let id in ids) ed[id] = false;
    setEditting(ed);
  }, [comments]);

  return  <div className="container_edit">
              {comments.map((comment) => (
                  <div key={comment.writerName + comment.date}>
                    {editting[comment.id] ? (
                    <form onSubmit={(e) => submit(e,comment)}>
                        <input type="text" placeholder={comment.comment} />
                        <button  className="btn btn">click here</button>    
                    </form>
                    ) : (
                      <div  className="card_edit">
                        <span>
                            <div className="user_name">{comment.userName}</div>
                            <p className="comment">{comment.comment}</p>
                            <div className="data">{comment.date}</div>
                            <div className="btn_style">
                              <div><IconTrash onClick={() => {dispatch(deleteComment(comment.id));}}/></div>
                              <div><IconEdit onClick={() => {const m = editting; m[comment.id] = !m[comment.id]; setEditting({ ...m });}}/></div>
                            </div>
                        </span>
                      </div>
                    )}
                  </div>
              ))}
          </div>
};
export default EditComment;
