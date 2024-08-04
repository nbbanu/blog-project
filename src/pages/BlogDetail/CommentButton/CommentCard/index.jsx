import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/common/Button";
import BloggerTooltip from "../../../../components/common/BloggerTooltip";
import RepliesCard from "../RepliesCard";
import ReplyCard from "../ReplyCard";

const contentStyle = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 5,
  WebkitBoxOrient: "vertical",
};

const CommentCard = ({ userName }) => {
  const [show, setShow] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    setShowReadMoreButton(
      ref.current.scrollHeight !== ref.current.clientHeight
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

            <div className="comment-date light-text fs-14">
              about 1 month ago
            </div>
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
          The alternative to async/await is callback hell. So happy we moved
          beyond that. I totally disagree 🤣 Sometimes we want to rise above the
          chaos of "anything happening anytime" to deterministic, synchronous
          code. Sometimes we actually can't tell, or don't care, what order
          independent events happen in. But unless we actually really understand
          the reality, we're just "poking and hoping", and that's where
          programmer laziness trumps user frustration. A screwdriver is a great
          tool, unless what you actually need is a hammer 😉 The *actual* worst
          thing to happen to programming is lazy or arrogant coders 😊
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
            <span className="clap-count-text primary-text fs-14">307</span>
          </div>
          <div>
            <div className="replies" onClick={() => setShowCards(!showCards)}>
              <i className="fa-regular fa-comment primary-text fs-15"></i>
              <span className="reply-text primary-text fs-14">
                {showCards ? "Hide Replies" : "4 Replies"}
              </span>
            </div>
          </div>
        </div>
        <ReplyCard />
      </div>
      {showCards && <RepliesCard/>}
    </div>
  );
};

export default CommentCard;
