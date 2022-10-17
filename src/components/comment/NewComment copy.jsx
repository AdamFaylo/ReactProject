import React from "react";
import { useDispatch } from "react-redux";
import "../CssControls/comment.css";
import { v4 } from "uuid";
import { addComment } from "../../features/comments/comments-slice";

const NewComment = () => {
  const dispatch = useDispatch();
  const addCommentSubmit = (e) => {
    e.preventDefault();
    let name = e.target[1].value;
    let comment = e.target[0].value;
    let sharedPublicly = e.target[2].value;
    let date = e.target[3].value;
    dispatch(
      addComment({
        id: v4(),
        userName: name,
        comment,
        sharedPublicly,
      })
    );
  };
  return (
    <div className="comment_botton">
      <form onSubmit={addCommentSubmit}>
        <div className="comment_left">
          <div className="d-flex flex-row align-items-start">
            <img
              className="img_style"
              src="https://i.imgur.com/RpzrMR2.jpg"
              width="45"
            />
            <textarea
              className="form-control ml-1 shadow-none textarea"
              required
              type="text"
            ></textarea>
          </div>
          <div>
            <label>UserName</label>
            <br />
            <input required type="text" alt="text" className="style_input" />
          </div>
          <div>
            <label>Date</label>
            <br />
            <input className="input_data" required type="date" alt="date" />
          </div>
          <br />
          <div>
            <div className="input_data">
              <button className="btn btn-primary shadow-none" type="submit">
                Add Comment
              </button>
            </div>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default NewComment;
