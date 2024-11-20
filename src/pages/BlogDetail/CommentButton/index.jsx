import CommentDrawer from "./CommentDrawer";
const CommentButton = ({ commentCount, blog}) => {
  return (
    <div className="comment-button">
      <CommentDrawer commentCount={commentCount} blog={blog}/>
    </div>
  );
};

export default CommentButton;
