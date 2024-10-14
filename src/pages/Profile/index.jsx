import { Outlet, NavLink } from "react-router-dom";
import Button from "../../components/common/Button";
import { useEffect, useState } from "react";
import AuthModal from "../../components/common/AuthModal";
import EditProfileModal from "../../pages/Profile/EditProfileModal";
import { getMyLists} from "../../service";

const ProfilePage = () => {
  const [show, setShowModal] = useState(false);
  const openEditProfileModal = () => {
    setShowModal(!show);
  };

  const [myLists, setMyLists] = useState([]);

  useEffect(() => {
    loadMyLists();
  }, []);
  const loadMyLists = async () => {
    const data = await getMyLists();
    setMyLists(data);
  };
  return (
    <div className="container">
      <AuthModal
        show={show}
        setShowModal={setShowModal}
        children={<EditProfileModal setShowModal={setShowModal} />}
      />
      <div className=" profile-page">
        <div className="profile-page-left flex flex-column">
          <div className="profile-page-left-top flex">
            <div className="flex flex-center">
              <img
                src="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
                alt="avatar"
                className="avatar resp-profile-img"
                style={{ width: 48, height: 48, display: "none" }}
              />
              <span className="left-userName">Banubkrli</span>
            </div>
            <div className="profile-page-options">
              <i
                className="fa-solid fa-ellipsis"
                style={{ color: "rgba(0,0,0,0.8)" }}
              ></i>
            </div>
          </div>
          <div className="profile-page-left-menu">
            <div className="navLinks flex flex-center">
              <NavLink to="main" className="light-text fs-14 link">
                Anasayfa
              </NavLink>
              <NavLink to="lists" className="light-text fs-14 link">
                Listeler
              </NavLink>
              <NavLink to="about" className="light-text fs-14 link">
                Hakkında
              </NavLink>
            </div>
            <div className="light-line"></div>
          </div>
        </div>

        <div className="profile-page-right">
          <img
            src="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0"
            className="avatar img-cover"
            alt="avatar"
            style={{ width: 88, height: 88 }}
          />
          <span className="profile-page-right-userName primary-text">
            Banubkrli
          </span>

          <Button
            title="Edit Profile"
            className="ghost border-none sm edit-btn"
            handleClick={openEditProfileModal}
          />

        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
