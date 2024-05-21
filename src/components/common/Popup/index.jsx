import { useState } from "react";
import Button from "../Button";
import { useAuth } from "../../../contexts/AuthContext";

const Popup = ({ clickItem, type }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { setToken } = useAuth();

  const openPopup = () => {
    setShowPopup(!showPopup);
  };

  const logOut = () => {
    localStorage.removeItem("token");
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
          <div className="popup flex flex-column">
            <>
              <div className="links flex flex-column">
                <a href="#" className="link flex flex-center light-text">
                  <i className="fa-regular fa-user fs-20 "></i>
                  <span className=" fs-14">Profile</span>
                </a>
                <a href="#" className="link flex flex-center  light-text">
                  <i className="fa-regular fa-bookmark fs-20"></i>
                  <span className="fs-14">Library</span>
                </a>
                <a href="#" className="link flex flex-center light-text">
                  <i className="fa-solid fa-align-left fs-20 "></i>
                  <span className=" fs-14">Stories</span>
                </a>
                <a href="#" className="link flex flex-center light-text">
                  <i className="fa-solid fa-signal fs-18 "></i>
                  <span className=" fs-14">Stats</span>
                </a>
              </div>
              <div className="light-line"></div>
              <div className="links flex flex-column">
                <a href="#" className="link fs-14 light-text">
                  Settings
                </a>
                <a href="#" className="link fs-14 light-text">
                  Settings
                </a>
                <a href="#" className="link fs-14 light-text">
                  Settings
                </a>
                <a href="#" className="link fs-14 light-text">
                  Help
                </a>
              </div>
              <div className="light-line"></div>
              <div className="links flex flex-column">
                <a
                  href="#"
                  className="link fs-14 light-text flex flex-center-between"
                >
                  <p>Become a Medium Member</p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffc016" }}
                  ></i>
                </a>
                <a href="#" className="link fs-14 light-text">
                  Become a Medium Member
                </a>
                <a href="#" className="link fs-14 light-text">
                  Become a Medium Member
                </a>
                <a href="#" className="link fs-14 light-text">
                  Become a Medium Member
                </a>
                <a href="#" className="link fs-14 light-text">
                  Become a Medium Member
                </a>
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

export default Popup;
