import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { getUserDetailById } from "../../../service";
import Button from "../Button";

const BloggerTooltip = ({ user, loading }) => {
  const [followerData, setFollowerData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {

  }, []);

  const getFollowerData = async () => {
    const data = await getUserDetailById(user?.id);
    setFollowerData(data);
  };

  const openBloggerProfile = (followerData) => {
    const userEmail = "@" + followerData?.email?.split("@")[0];

    navigate(`/${userEmail}/${followerData?.id}/main`);
  };

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
                src={followerData?.profileImage}
                alt="avatar"
                className="avatar"
                style={{ width: 35, height: 35 }}
              />
            </div>
            <div className="tooltip-name">
              <h2
                className="fs-16 primary-text"
                onClick={() => openBloggerProfile(followerData)}
              >
                {followerData?.name}
              </h2>
            </div>
          </div>
          <div className="tooltip-info">
            <p className="primary-text fs-13">{followerData?.bio}</p>
          </div>
          <div className="light-line"></div>
          <div className="tooltip-bottom flex flex-center-between">
            <div className="followers-count">
              <span className="light-text fs-13">
                {followerData?.followerCount}
              </span>
              <span className="light-text fs-13">{" Takipçi"} </span>
            </div>
            <Button
              // className={"success xs blogger-tooltip-btn"}
              className={`${
                followerData?.isFollowingByUser ? "green-ghost" : "success"
              } blogger-tooltip-btn`}
              size={"xs"}
              title={`${
                followerData?.isFollowingByUser ? "Takip Ediliyor" : "Takip Et"
              }`}
              
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BloggerTooltip;
