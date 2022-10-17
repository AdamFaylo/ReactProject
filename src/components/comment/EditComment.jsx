import React from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addComment, deleteComment } from "../../features/comments/comments-slice"
import { v4 } from "uuid"
import { IconTrash, IconEdit } from '@tabler/icons';
import { useEffect } from "react";
import "../CssControls/comment.css"

const EditComment = () => {
  const comments = useSelector((state) => state.commentsReducer.comments);
  const dispatch = useDispatch();
  const [editting, setEditting] = useState({});

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
                      <input type="text" placeholder={comment.comment} />
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
