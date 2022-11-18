import EditeComment from "../components/comment/EditComment"
import NewComment from "../components/comment/NewComment";

export default function Comments() {
  return <div className="container_comment_center">
    <h1>Comments</h1>
    <EditeComment/>
    <NewComment/>
  </div>
}
