import { Outlet, NavLink } from "react-router-dom";
import Button from "../../components/common/Button";

const ProfilePage = () => {
  return (
    <div className="container profile-page">
      <div className="profile-page-left flex flex-column">
        <div className="profile-page-left-top flex">
          <img src="https://miro.medium.com/v2/resize:fill:40:40/0*PVc8ycK2VwtFt7R0" alt="avatar" className="avatar resp-profile-img" style={{width:48,height:48, display:"none"}}/>
          <span className="profile-page-left-top-userName">Banubkrli</span>
          <div className="profile-page-left-top-options">
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

        <Button title="Edit Profile" className="ghost border-none sm " />
      </div>

      <Outlet />
    </div>
  );
};

export default ProfilePage;
