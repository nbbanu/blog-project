import CommentDrawer from "./CommentDrawer";
const CommentButton = ({ commentCount, userName}) => {
  return (
    <div className="comment-button">
      <CommentDrawer commentCount={commentCount} userName={userName}/>
    </div>
  );
};

export default CommentButton;
