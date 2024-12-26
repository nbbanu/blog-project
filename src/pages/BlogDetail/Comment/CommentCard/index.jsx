import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/common/Button";
import BloggerTooltip from "../../../../components/common/BloggerTooltip";
import RepliesButton from "../RepliesButton";
import dayjs from "dayjs";
import CommentForm from "../CommentForm";
import ClapButton from "../../ClapButton";
import { useAuth } from "../../../../contexts/AuthContext";

const contentStyle = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 5,
  WebkitBoxOrient: "vertical",
};

const CommentCard = ({ blog, comment }) => {
  const [show, setShow] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const [showReplyCard, setShowReplyCard] = useState(false);

  const { user } = useAuth();
  const ref = useRef("");
  useEffect(() => {
    setShowReadMoreButton(
      ref?.current.scrollHeight !== ref?.current.clientHeight
    );
  }, []);

  const openReplyCard = () => {
    setShowReplyCard(!showReplyCard);
  };

  return (
    <div className="comment-card">
      <div className="comment-card-top flex">
        <div className="flex">
          <img
            src={comment?.user?.profileImage}
            style={{ width: 32, height: 32 }}
            alt="profile-photo"
            className="avatar"
          />
          <div>
            <div className="commenter-info">
              <div className="commenter-name primary-text fs-14">
                {comment?.user?.username}
              </div>
              <BloggerTooltip user={blog?.user} />
            </div>
            <div className="comment-date light-text fs-14">
              {dayjs(comment?.created_at).format("MMM DD, YYYY")}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="comment-card-content fs-14 primary-text"
          ref={ref}
          style={show ? null : contentStyle}
        >
          {comment?.comment}
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
          <div className="clap flex">
            <i className="fa-solid fa-hands-clapping primary-text fs-15"></i>
            <span className="clap-count-text primary-text fs-14">{"5"}</span>
          </div>
          <RepliesButton blog={blog} comment={comment} />
        </div>
        <div className="reply-card">
          <Button
            title="Yanıt Ver"
            handleClick={openReplyCard}
            className={"ghost border-none reply-btn"}
          />
          {showReplyCard && (
            <div className="card-content">
              <CommentForm
                blog={blog}
                user={user}
                comment={comment}
                placeholder={`${comment?.user?.username} kullanıcısına yanıt veriyorsun`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
