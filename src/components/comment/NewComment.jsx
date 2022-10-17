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
    let date = e.target[2].value;
    dispatch(
      addComment({
        id: v4(),
        userName: name,
        comment,
        date,
      })
    );
  };
  return (
    <div className="new_comment">
      <form onSubmit={addCommentSubmit}>
        <div className="comment_left">
          <div>  
            <textarea className="text_comment" placeholder=" New Comment . . ." required type="text"></textarea>
          </div>
          <div className="user_name">
            <input className="input_user" required type="text" placeholder=" UserName" alt="text"/>
          </div>
            <div className="input_data">
              <button className="btn_comment" type="submit">
                Add Comment
              </button>
            </div>
        </div>
      </form>
    </div>
  );
};

export default NewComment;


{/* <img
              className="img_style"
              src="https://i.imgur.com/RpzrMR2.jpg"
              width="45"
            /> */}
         
            
    //         <div className="new_comment">
    //   <form onSubmit={addCommentSubmit}>
    //     <div className="comment_left">
    //       <div>  
    //         <textarea className="text_comment" placeholder="New Comment . . ." required type="text"></textarea>
    //       </div>
    //       <div className="user_name">
    //         <input className="input_user" required type="text" placeholder="UserName" alt="text"/>
    //       </div>
    //       <div>
    //         <input className="input_data" required type="date" alt="date" placeholder="Date"/>
    //       </div>
    //         <div className="input_data">
    //           <button className="btn_comment" type="submit">
    //             Add Comment
    //           </button>
    //         </div>
    //     </div>
    //   </form>
    // </div>