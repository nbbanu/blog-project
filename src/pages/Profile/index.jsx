import { useAuth } from "../../contexts/AuthContext";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import Button from "../../components/common/Button";
import { useState } from "react";
import AuthModal from "../../components/common/AuthModal";
import EditProfileModal from "./partials/EditProfileModal";

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
  const { user } = useAuth();

  const location = useLocation();

  const isTabPath = tabs.some((tabPath) =>
    location.pathname.endsWith(tabPath.path)
  );

  const openEditProfileModal = () => {
    setShowModal(!show);
  };

  return (
    <div className="container">
      <AuthModal
        show={show}
        setShowModal={setShowModal}
        children={<EditProfileModal user={user} setShowModal={setShowModal} />}
      />
      <div className="profile-page">
        <div className="profile-page-left flex flex-column">
          {isTabPath && (
            <>
              <div className="profile-page-left-top flex">
                <span className="left-userName">{user?.username}</span>
                <i
                  className="fa-solid fa-ellipsis"
                  style={{ color: "rgba(0,0,0,0.8)" }}
                ></i>
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
            src={user?.profileImage}
            className="avatar img-cover"
            alt="avatar"
            style={{ width: 88, height: 88 }}
          />
          <span className="profile-page-right-userName primary-text">
            {user?.username}
          </span>

          <Button
            title="Profili Güncelle"
            className="ghost border-none sm edit-btn"
            handleClick={openEditProfileModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
