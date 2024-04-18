import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "../Button";

const Tooltip = ({
  loading,
  showTooltip,
  bloggerName,
  bloggerInformation,
  followersCount,
}) => {
  return (
    <div
      className={`tooltip-container flex-center-center ${
        showTooltip ? "open" : ""
      }`}
    >
      <div className={`flex flex-column tooltip  `}>
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
                  src="https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                  alt="avatar"
                  className="avatar"
                  style={{ width: "35px", height: "35px" }}
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
              <Button className={"success xs"} title={"Follow"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
