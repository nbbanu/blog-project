import { useAuth } from "../../../contexts/AuthContext";
import CommentDrawer from "./CommentDrawer"
const Comment = ({blog}) => {
  const {user} = useAuth();
  return (
    <div className="comment-button">
      <CommentDrawer blog={blog} user={user}/>
    </div>
  );
};

export default Comment;
