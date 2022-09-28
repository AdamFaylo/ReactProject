import EditeComment from "./EditComment"
import NewComment from "./NewComment";

export default function Comments() {
  return <div className="container_comment_center">
    <EditeComment/>
    <NewComment/>
  </div>
}
