import { useState } from "react";
import CommentCard from "../CommentCard";
import { getCommentRepliesByCommentId } from "../../../../service";

const RepliesButton = ({ blog, comment }) => {
  // const [showCards, setShowCards] = useState(false);
  const [replies, setReplies] = useState([]);

  const showReplies = () => {
    // setShowCards(!showCards);
    getReplies();
  };
  const getReplies = async () => {
    const data = await getCommentRepliesByCommentId(comment?.id);
    setReplies(data);
  };

  return (
    <div className="replies-card" onClick={showReplies}>
      <div>
        <i className="fa-regular fa-comment primary-text fs-15"></i>
        <span className="reply-text primary-text fs-14">
          {/* {showCards ? "Yanıtları Gizle" : `${comment?.replyCount} Yanıt`} */}
          { `${comment?.replyCount} Yanıt`}
        </span>
      </div>

        <div>
          {replies.map((reply) => (
            <CommentCard key={replies.id} blog={blog} comment={reply} />
          ))}
        </div>

   
    </div>
  );
};

export default RepliesButton;
