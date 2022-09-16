import { useState } from "react"
 // {  wrtierName:"" ,content:"",date:"" ,rating:4}

export default function Comments({id}) {

    const [comments, setComments] = useState()

    // const comments = useSelector(state => state.movies.find(m => m.id === id).comments)

    // dispatch(addComment(comment)) // ADD THE ACTION TO THE STORE
    const addComment = (e) => {
        e.preventDefault()
        let comment = e.target[0].value
        setComments([...comments, comment])
    }

    return <div>

        <form onSubmit={addComment} >
            <label>New Comment</label>
            <input required type="text"/>
        </form>

        <ul>
            {comments.map(comment => <li key ={comment.writerName + comment.date}>
                {comment.content}
            </li>)}
        </ul>
    </div>
}