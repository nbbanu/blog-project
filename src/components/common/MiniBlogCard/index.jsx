import { useState } from "react";
import BloggerTooltip from "../BloggerTooltip";
import dayjs from "dayjs";

const MiniBlogCard = ({
  blog,
  index,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="mini-card flex">
      <div className="mini-card-number">{index + 1}</div>
      <div className="mini-card-left">
        <div className="mini-card-header flex flex-center">
          <div className="mini-card-img avatar">
            <img
              src={blog?.user?.profileImage}
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="blogger-tooltip">
            <span
              className="blogger-name fs-13 primary-text"
              onMouseEnter={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
            >
              {blog?.user?.name}
            </span>
            <BloggerTooltip user={blog?.user} />
          </div>
          <span className="publishedby fs-13 primary-text">
            {"Towards Data Science"}
          </span>
        </div>
        <div className="mini-card-title">
          <h2 className="mini-card-title-h2 fs-16 primary-text">
            {blog?.title}
          </h2>
        </div>
        <div className="mini-card-description light-text">
          {blog?.description}
        </div>

        <div className="flex flex-center">
          <span className="mini-card-release-date fs-13 light-text">
            {dayjs(blog?.created_at).format("MMM DD, YYYY")}
          </span>
          <span className="dot light-text"></span>
          <span className="mini-card-reading-time fs-13 light-text">
            {"6 min read"}
          </span>
        </div>
      </div>
      <div className="mini-card-right">
        <img
          src={blog?.image}
          alt=""
          className="mini-blogcard-img"
          style={{ width: 200, height: 134 }}
        />
      </div>
    </div>
  );
};

export default MiniBlogCard;
