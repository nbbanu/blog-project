import CommentDrawer from "./CommentDrawer";
const CommentButton = ({ commentCount }) => {
  return (
    <div className="comment-button">
      <CommentDrawer commentCount={commentCount} />
    </div>
  );
};

export default CommentButton;
