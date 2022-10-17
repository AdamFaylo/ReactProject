import EditeComment from "./EditComment"
import NewComment from "./NewComment";

export default function Comments() {
  return <div className="container_comment_center">
    <h1>Comments</h1>
    <EditeComment/>
    <NewComment/>
  </div>
}
