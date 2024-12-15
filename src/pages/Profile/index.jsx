import { useAuth } from "../../contexts/AuthContext";
import { Outlet, NavLink, useLocation, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import { useEffect, useState } from "react";
import AuthModal from "../../components/common/AuthModal";
import EditProfileModal from "./partials/EditProfileModal";
import { getUserDetailById } from "../../service";
import FollowCard from "./partials/FollowCard";

const tabs = [
  {
    path: "main",
    title: "Ana Sayfa",
  },
  {
    path: "lists",
    title: "Listeler",
  },
  {
    path: "about",
    title: "Hakkında",
  },
];

const ProfilePage = () => {
  const [show, setShowModal] = useState(false);
  const [userDetail, setUserDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, token } = useAuth();

  const params = useParams();
  const userId = params.userId;

  const location = useLocation();

  useEffect(() => {
    params.userId && getUserDetail();
  }, [params]);

  const getUserDetail = async () => {
    setLoading(true);
    const data = await getUserDetailById(userId);
    setUserDetail(data);
    setLoading(false);
  };

  const isTabPath = tabs.some((tabPath) =>
    location.pathname.endsWith(tabPath.path)
  );

  const openEditProfileModal = () => {
    setShowModal(!show);
  };

  if (token) {
    return (
      <div className="container">
        <AuthModal
          show={show}
          setShowModal={setShowModal}
          children={
            <EditProfileModal user={user} setShowModal={setShowModal} />
          }
        />
        <div className="profile-page">
          <div className="profile-page-left flex flex-column">
            {isTabPath && (
              <>
                <div className="profile-page-left-top flex">
                  <span className="left-userName">{userDetail?.username}</span>
                  {/* <i
                    className="fa-solid fa-ellipsis"
                    style={{ color: "rgba(0,0,0,0.8)" }}
                  ></i> */}
                </div>

                <div className="profile-page-left-menu">
                  <div className="navLinks flex flex-center">
                    {tabs.map((tab, index) => (
                      <NavLink
                        key={index}
                        to={tab.path}
                        className="light-text fs-14 link"
                      >
                        {tab?.title}
                      </NavLink>
                    ))}
                  </div>
                  <div className="light-line"></div>
                </div>
              </>
            )}

            <Outlet />
          </div>

          <div className="profile-page-right">
            <img
              src={userDetail?.profileImage}
              className="avatar img-cover"
              alt="avatar"
              style={{ width: 88, height: 88 }}
            />
            <span className="profile-page-right-username primary-text">
              {userDetail?.username}
            </span>

            {userDetail?.id === user?.id && (
              <Button
                title="Profili Güncelle"
                className="ghost border-none sm edit-btn"
                handleClick={openEditProfileModal}
              />
            )}
            {userDetail?.id !== user?.id && (
              <FollowCard  userDetail={userDetail} loading={loading}/>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default ProfilePage;
