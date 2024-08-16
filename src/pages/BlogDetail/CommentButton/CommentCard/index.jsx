import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/common/Button";
import BloggerTooltip from "../../../../components/common/BloggerTooltip";
import RepliesCard from "../RepliesButton";
import ReplyCard from "../ReplyCard";
import RepliesButton from "../RepliesButton";

const contentStyle = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 5,
  WebkitBoxOrient: "vertical",
};

const CommentCard = ({
  userName,
  commentDate,
  commentCardContent,
  replyCount,
  clapCount,
}) => {
  const [show, setShow] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const [showRepliesButton, setShowRepliesButton] = useState(true);

  const ref = useRef("");

  useEffect(() => {
    setShowReadMoreButton(
      ref?.current.scrollHeight !== ref?.current.clientHeight
    );
  }, []);

  return (
    <div className="comment-card">
      <div className="comment-card-top flex">
        <div className="flex">
          <img
            src="https://miro.medium.com/v2/resize:fill:32:32/0*xgLgNrZxf2ZhQcOk"
            style={{ width: 32, height: 32 }}
            alt="profile-photo"
            className="avatar"
          />
          <div>
            <div className="commenter-profile">
              <div className="commenter-name primary-text fs-14">
                {userName}
              </div>
              <BloggerTooltip
                bloggerName={userName}
                bloggerInformation="Professional domestic abuse advocate by day; a writer by night and a street photographer in my free time. A counsellor in the make."
                followersCount={"1.2K"}
                profileImg="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
              />
            </div>

            <div className="comment-date light-text fs-14">{commentDate}</div>
          </div>
        </div>
        <div className="comment-card-option">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div>
        <div
          ref={ref}
          style={show ? null : contentStyle}
          className="comment-card-content fs-14 primary-text"
        >
          {commentCardContent}
        </div>
        {showReadMoreButton && (
          <Button
            title={show ? "Read Less" : "Read More"}
            className="ghost border-none xs read-more-btn"
            handleClick={() => setShow(!show)}
          />
        )}
      </div>
      <div className="comment-card-bottom flex">
        <div className="flex">
          <div className="clap">
            <i className="fa-solid fa-hands-clapping primary-text fs-15"></i>
            <span className="clap-count-text primary-text fs-14">
              {clapCount}
            </span>
          </div>

          {showRepliesButton && <RepliesButton />}
        </div>
        <ReplyCard />
      </div>
    </div>
  );
};

export default CommentCard;
