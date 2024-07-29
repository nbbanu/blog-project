import { useState } from "react";
import Tooltip from "../BloggerTooltip";

const MiniBlogCard = ({
  profileImg,
  bloggerName,
  publishedBy,
  title,
  description,
  releaseDate,
  readingTime,
  cardIndex,
  miniCardImg,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="mini-card flex">
      <div className="mini-card-number">{cardIndex}</div>
        <div className="mini-card-left">
          <div className="mini-card-header flex flex-center">
            <div className="mini-card-img avatar">
              <img src={profileImg} alt="avatar" className="avatar" />
            </div>
            <span
              className="blogger-name fs-13 primary-text"
              onMouseEnter={() => {
                setShowTooltip(!showTooltip);
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  setShowTooltip(false);
                }, 400);
              }}
            >
              {bloggerName}
              <Tooltip
                profileImg={
                  "https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                }
                loading={loading}
                showTooltip={showTooltip}
                bloggerName={bloggerName}
                bloggerInformation="Director of Machine Learning Engineering at Instacart"
                followersCount="67"
              />
            </span>

            <span className="publishedby fs-13 primary-text">
              {publishedBy}
            </span>
          </div>
          <div className="mini-card-title">
            <h2 className="mini-card-title-h2 fs-16 primary-text">{title}</h2>
          </div>
          <div className="mini-card-description light-text">
            {description}
          </div>

          <div className="flex flex-center">
            <span className="mini-card-release-date fs-13 light-text">
              {releaseDate}
            </span>
            <span className="dot light-text"></span>
            <span className="mini-card-reading-time fs-13 light-text">
              {readingTime}
            </span>
          </div>
        </div>
        <div className="mini-card-right">{miniCardImg}</div>
    </div>
  );
};

export default MiniBlogCard;
