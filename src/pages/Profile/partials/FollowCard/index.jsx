import { Link } from "react-router-dom";
import Button from "../../../../components/common/Button";
import "./follow-card.scss";
import BloggerTooltip from "../../../../components/common/BloggerTooltip";
import { useState } from "react";

const FollowCard = () => {
  const [showBloggerTooltip, setShowBloggerTooltip] = useState(false);
  return (
    <div className="follow-container flex flex-column">
      <div className="follow-card flex flex-column">
        <div className="followers-count fs-16 light-text">37.1K Followers</div>
        <div className="user-bio fs-14 light-text">test</div>

        <div className="buttons flex">
          <Button title="Takip Et" className={"success"} size="md" />
          <Button className={"success mail-btn"} size={"md"}>
            <i className="fa-regular fa-envelope"></i>
          </Button>
        </div>
      </div>

      <div className="following-card">
        <div className="primary-text fs-16 following-card-header">
          Following
        </div>
        <ul className="following-card-list flex flex-column">
          <Link className="link fs-13 light-text following-card-link flex">
            <div className="flex flex-center">
              <img
                src="https://miro.medium.com/v2/resize:fill:20:20/2*QBW-C2MIvjAM25mbkL-LvQ.jpeg"
                className="avatar"
                alt="avatar"
                width={"20px"}
                height={"20px"}
              />
              <div className="username">Test</div>
            </div>
            <div className="blogger-tooltip">
              {showBloggerTooltip && <BloggerTooltip />}
              <i className="fa-solid fa-ellipsis light-text fs-18" onClick={() => setShowBloggerTooltip(!showBloggerTooltip)}></i>
            </div>
          </Link>
        </ul>
        <Link to="" className="see-all-link light-text link fs-13">
              Tümünü Gör (123)
            </Link>
      </div>
    </div>
  );
};

export default FollowCard;
