import { useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const UserPopup = ({ clickItem }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { setToken, user, setUser } = useAuth();

  const navigate = useNavigate();
  const email = user?.email
  const userEmail = "@" + email?.split("@")[0];
  
  const openPopup = () => {
    setShowPopup(!showPopup);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser("");
    navigate("/");
  };

  return (
    <>
      <div className="clickable-place" onClick={openPopup}>
        {clickItem}
      </div>
      {showPopup && (
        <div
          className="popup-out"
          onClick={() => {
            setShowPopup(false);
          }}
        />
      )}
      <div className="user-popup-container">
        {showPopup ? (
          <div
            className="user-popup flex flex-column"
            onClick={() => setShowPopup(false)}
          >
            <>
              <div className="links flex flex-column">
                <Link
                  to={`/${userEmail}/${user?.id}/main`}
                  className="link flex flex-center light-text"
                >
                  <i className="fa-regular fa-user fs-20 "></i>
                  <span className=" fs-14">Profil</span>
                </Link>
                <Link to={`/${userEmail}/lists`} className="link flex flex-center  light-text">
                  <i className="fa-regular fa-bookmark fs-20"></i>
                  <span className="fs-14">Kütüphane</span>
                </Link>
                <Link className="link flex flex-center light-text">
                  <i className="fa-solid fa-align-left fs-20 "></i>
                  <span className=" fs-14">Hikayeler</span>
                </Link>
                <Link className="link flex flex-center light-text">
                  <i className="fa-solid fa-signal fs-18 "></i>
                  <span className=" fs-14">Stats</span>
                </Link>
              </div>
              <div className="light-line"></div>
              <div className="links flex flex-column">
                <Link className="link fs-14 light-text">Settings</Link>
                <Link className="link fs-14 light-text">Settings</Link>
                <Link className="link fs-14 light-text">Settings</Link>
                <Link className="link fs-14 light-text">Help</Link>
              </div>
              <div className="light-line"></div>
              <div className="links flex flex-column">
                <Link className="link fs-14 light-text flex flex-center-between">
                  <p>Become a Medium Member</p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffc016" }}
                  ></i>
                </Link>
                <Link className="link fs-14 light-text">
                  Become a Medium Member
                </Link>
                <Link className="link fs-14 light-text">
                  Become a Medium Member
                </Link>
                <Link className="link fs-14 light-text">
                  Become a Medium Member
                </Link>
                <Link className="link fs-14 light-text">
                  Become a Medium Member
                </Link>
              </div>
              <div className="light-line"></div>
              <div className="sign-out-box" onClick={logOut}>
                <Link
                  to={"/"}
                  title={"Sign out"}
                  className={"light-text fs-14 link logout-link"}
                >
                  Çıkış Yap
                </Link>
                <p className="light-text fs-14">{email}</p>
              </div>
            </>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default UserPopup;
