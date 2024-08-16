import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "../Button";

const BloggerTooltip = ({
  profileImg,
  loading,
  bloggerName,
  bloggerInformation,
  followersCount,
}) => {
  return (
    <div className="tooltip-container">
      {loading ? (
        <div>
          <div className="flex flex-center" style={{ marginBottom: 15 }}>
            <Skeleton circle width={35} height={35} />
            <Skeleton width={150} style={{ marginLeft: 7 }} />
          </div>
          <Skeleton count={2} style={{ height: 10, marginBlock: 7 }} />
          <Skeleton style={{ height: 1, marginTop: 10, marginBottom: 10 }} />
          <div className="flex flex-center-between">
            <Skeleton width={70} />
            <Skeleton width={40} />
          </div>
        </div>
      ) : (
        <>
          <div className="tooltip-header flex flex-center">
            <div className="tooltip-profile-img">
              <img
                src={profileImg}
                alt="avatar"
                className="avatar"
                style={{ width: 35, height: 35 }}
              />
            </div>
            <div className="tooltip-name">
              <h2 className="fs-16 primary-text">{bloggerName}</h2>
            </div>
          </div>
          <div className="tooltip-info">
            <p className="primary-text fs-13">{bloggerInformation}</p>
          </div>
          <div className="light-line"></div>
          <div className="tooltip-bottom flex flex-center-between">
            <div className="followers-count">
              <span className="light-text fs-13">{followersCount}</span>
              <span className="light-text fs-13">{" Followers"} </span>
            </div>
            <Button className={"success xs blogger-tooltip-btn"} title={"Follow"} />
          </div>
        </>
      )}
    </div>
  );
};

export default BloggerTooltip;
