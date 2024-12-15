import { Link } from "react-router-dom";
import Button from "../../../../components/common/Button";
import "./follow-card.scss";
import BloggerTooltip from "../../../../components/common/BloggerTooltip";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { followAUser } from "../../../../service";
import { Flip, toast } from "react-toastify";

const FollowCard = ({ userDetail, loading }) => {
  const [showBloggerTooltip, setShowBloggerTooltip] = useState(false);
  const [followerCount, setFollowerCount] = useState(null);
  const [isFollowing, setIsFollowing] = useState(null);
  const [followLoading, setFollowLoading] = useState(false);

  useEffect(() => {
    setIsFollowing(userDetail?.isFollowingByUser);
    setFollowerCount(userDetail?.followerCount);
  }, [userDetail]);

  const handleFollowClick = () => {
    const body = {
      userId: userDetail?.id,
      isFollowing: !userDetail?.isFollowingByUser,
    };

    setFollowLoading(true);

    followAUser(body)
      .then((res) => {
        setIsFollowing(!isFollowing);
        setFollowerCount((count) => (!isFollowing ? count + 1 : count - 1));

        !isFollowing
          ? toast.success("Kullanıcı Takip Edildi", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Flip,
            })
          : "";
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setFollowLoading(false);
      });
  };

  return (
    <div className="follow-container flex flex-column">
      {loading ? (
        <>
          <Skeleton width={150}></Skeleton>
          <Skeleton width={"100%"} height={50} />
          <div className="flex flex-center">
            <Skeleton
              width={80}
              height={40}
              style={{ borderRadius: 30, marginRight: 15 }}
            />
            <Skeleton width={50} height={40} style={{ borderRadius: 30 }} />
          </div>
          <Skeleton width={150} style={{ marginTop: 30, marginBottom: 10 }} />
          <div className="flex flex-between">
            <div className="flex flex-center">
              <Skeleton
                width={25}
                height={25}
                style={{ borderRadius: 25, marginRight: 10 }}
              />
              <Skeleton width={80} />
            </div>
            <Skeleton width={30} height={5} />
          </div>
          <div className="flex flex-between">
            <div className="flex flex-center">
              <Skeleton
                width={25}
                height={25}
                style={{ borderRadius: 25, marginRight: 10 }}
              />
              <Skeleton width={80} />
            </div>
            <Skeleton width={30} height={5} />
          </div>
          <div className="flex flex-between">
            <div className="flex flex-center">
              <Skeleton
                width={25}
                height={25}
                style={{ borderRadius: 25, marginRight: 10 }}
              />
              <Skeleton width={80} />
            </div>
            <Skeleton width={30} height={5} />
          </div>
          <Skeleton width={100} />
        </>
      ) : (
        <>
          <div className="follow-card flex flex-column">
            <></>
            <div className="followers-count fs-16 light-text">
              {followerCount?.toString()} Takipçi
            </div>
            <div className="user-bio fs-14 light-text">{userDetail?.bio}</div>

            <div className="buttons flex">
              <Button
                disabled={followLoading}
                title={`${isFollowing ? "Takip Ediliyor" : "Takip Et"}`}
                className={`${isFollowing ? "green-ghost" : "success"}`}
                size="md"
                handleClick={handleFollowClick}
              />
              <Button className={"success mail-btn"} size={"md"}>
                <i className="fa-regular fa-envelope"></i>
              </Button>
            </div>
          </div>

          {userDetail?.following?.length > 0 && (
            <div className="following-card">
              <div className="primary-text fs-16 following-card-header">
                Takip Ettikleri
              </div>

              <ul className="following-card-list flex flex-column">
                {userDetail?.following?.map((user) => (
                  <Link
                    key={user.id}
                    className="link fs-13 light-text following-card-link flex"
                  >
                    <div className="flex flex-center">
                      <img
                        src={user?.profileImage}
                        className="avatar"
                        alt="avatar"
                        width={"20px"}
                        height={"20px"}
                      />
                      <div className="username">{user?.username}</div>
                    </div>
                    {/* <div
                      className="blogger-tooltip"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowBloggerTooltip(!showBloggerTooltip);
                      }}
                    >
                      {showBloggerTooltip && <BloggerTooltip user={user} />}
                      <i className="fa-solid fa-ellipsis light-text fs-18"></i>
                    </div> */}
                  </Link>
                ))}
              </ul>
              <Link to="" className="see-all-link light-text link fs-13">
                {`Tümünü Gör ${userDetail?.following.length}`}
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FollowCard;
