import { Link } from "react-router-dom";
import Button from "../../../../components/common/Button";
import "./follow-card.scss";
import BloggerTooltip from "../../../../components/common/BloggerTooltip";
import { useState } from "react";

const FollowCard = ({ userDetail }) => {
  const [showBloggerTooltip, setShowBloggerTooltip] = useState(false);

  return (
    <div className="follow-container flex flex-column">
      <div className="follow-card flex flex-column">
        <div className="followers-count fs-16 light-text">{`${userDetail?.followerCount} Followers`}</div>
        <div className="user-bio fs-14 light-text">{userDetail.bio}</div>

        <div className="buttons flex">
          <Button
            title={`${userDetail.isFollowingByUser ? "Following" : "Takip Et"}`}
            className={`${userDetail.isFollowingByUser ? "green-ghost" : "success"}`}
            size="md"
          />
          <Button className={"success mail-btn"} size={"md"}>
            <i className="fa-regular fa-envelope"></i>
          </Button>
        </div>
      </div>

      {userDetail?.following && (
        <div className="following-card">
          <div className="primary-text fs-16 following-card-header">
            Following
          </div>

          <ul className="following-card-list flex flex-column">

            <Link className="link fs-13 light-text following-card-link flex">
              <div className="flex flex-center">
                <img
                  src={userDetail?.following[0]?.profileImage}
                  className="avatar"
                  alt="avatar"
                  width={"20px"}
                  height={"20px"}
                />
                <div className="username">{userDetail?.following[0]?.username}</div>
              </div>
              <div className="blogger-tooltip">
                {showBloggerTooltip && <BloggerTooltip/>}
                <i
                  className="fa-solid fa-ellipsis light-text fs-18"
                  onClick={() => setShowBloggerTooltip(!showBloggerTooltip)}
                ></i>
              </div>
            </Link>


          </ul>
          <Link to="" className="see-all-link light-text link fs-13">
            {`Tümünü Gör ${userDetail?.following.length}`}
          </Link>
        </div>
      )}
    </div>
  );
};

export default FollowCard;
