import { useState } from "react";
import Button from "../Button";
import { useAuth } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

const UserPopup = ({ clickItem }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { setToken } = useAuth();
  const { email } = useAuth();
  const userEmail = "@" + email.split("@")[0];

  const openPopup = () => {
    setShowPopup(!showPopup);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken("");
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
      <div className="popup-container">
        {showPopup ? (
          <div className="popup flex flex-column"
          onClick={() => setShowPopup(false)}>
            <>
              <div className="links flex flex-column">
                <Link
                  to={`/${userEmail}/main`}
                  className="link flex flex-center light-text"
                 >
                  <i className="fa-regular fa-user fs-20 "></i>
                  <span className=" fs-14">Profil</span>
                </Link>
                <Link className="link flex flex-center  light-text">
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
                <Link className="link fs-14 light-text">
                  Settings
                </Link>
                <Link className="link fs-14 light-text">
                  Settings
                </Link>
                <Link className="link fs-14 light-text">
                  Settings
                </Link>
                <Link className="link fs-14 light-text">
                  Help
                </Link>
              </div>
              <div className="light-line"></div>
              <div className="links flex flex-column">
                <Link
                  className="link fs-14 light-text flex flex-center-between"
                >
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
                <Button title={"Sign out"} className={"ghost border-none"} />
                <p className="light-text fs-14">test@gmail.com</p>
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
