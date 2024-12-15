import { useState } from "react";
import CommentCard from "../CommentCard";

const RepliesButton = ({comment }) => {
  const [showCards, setShowCards] = useState(false);
  
  return (
    <div>
      <div className="replies-card">
        <div className="replies" onClick={() => setShowCards(!showCards)}>
          <i className="fa-regular fa-comment primary-text fs-15"></i>
          <span className="reply-text primary-text fs-14">
            {showCards ? "Hide Replies" : `${comment?.replyCount} Replies`}
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default RepliesButton;
