import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addComment,deleteComment } from "../../features/comments/comments-slice"
import { v4 } from "uuid"
import { IconTrash,IconEdit } from '@tabler/icons';
import { useEffect } from "react";
export default function Comments() {

    const comments = useSelector(state => state.commentsReducer.comments)
    const dispatch = useDispatch()
    
    const [editting,setEditting] = useState({})

    useEffect(() => {
        const ids = comments.map(comment => comment.id)
        const ed = {}
        for(let id in ids)
            ed[id] = false
        setEditting(ed)
    },[comments])
    const addCommentSubmit = (e) => {
        e.preventDefault()
        let comment = e.target[0].value
        let name = e.target[1].value
        dispatch(addComment({
            id:v4(),
            userName:name,
            comment
        }))
    }

    return <div>

        <form onSubmit={addCommentSubmit} >
            <label>New Comment</label>
            <input required type="text"/>

            <label>Name</label>
            <input required type="text"/>

            <button type='submit'>Add Comment</button>
        </form>

        <ul>
            {comments.map(comment => <li key ={comment.writerName + comment.date}>

                {editting[comment.id] ? <input type='text' placeholder={comment.comment}/>: <span>
                  {comment.comment} ~{comment.userName}
                </span>}
               
                <IconTrash onClick={()=> {
                    dispatch(deleteComment(comment.id))
                }}/>
                <IconEdit onClick={() => {
                   const m = editting
                   m[comment.id] = !m[comment.id]
                   setEditting({...m})
                }}/>
            </li>)}
        </ul>
    </div>
}