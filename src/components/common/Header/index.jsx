import { useState } from "react";
import AuthModal from "../AuthModal";
import Button from "../Button";
import { useAuth } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import UserPopup from "../UserPopup";

const Header = () => {
  const [show, setShowModal] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);

  const { token } = useAuth();

  document.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    const button = document.querySelector("button");

    if (window.scrollY > 462) {
      header?.classList.add("white-header");
      button.classList.add("success");
    } else {
      header?.classList.remove("white-header");
      button.classList.remove("success");
    }
  });

  const handleClick = () => {
    setShowModal(!show);
    setCreateModalShow(createModalShow);
  };

  if (token) {
    return (
      <header
        id="loggedin-header"
        className="loggedin-header light-line"
        style={{ backgroundColor: "#fff", margin: 0 }}
      >
        <div className="container flex flex-center-between">
          <div className="loggedin-header-left flex flex-center">
            <Link to="/" className="medium-main-logo link">
              <img
                src="medium-icon.svg"
                className="img-cover"
                alt="medium-logo"
                style={{ width: 45, height: 25 }}
              />
            </Link>
            <div className="search-area flex flec-center">
              <div className="search-area-icon">
                <i className="fa-solid fa-magnifying-glass light-text"></i>
              </div>
              <input
                type="search"
                className="search-area-input text-primary fs-14"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="loggedin-header-right flex flex-center">
            <Link
              to="new-story"
              className="write-area flex flex-center link"
            >
              <i className="fa-regular fa-pen-to-square light-text fs-20"></i>
              <span className="light-text fs-14">Write</span>
            </Link>

            <i className="fa-regular fa-bell light-text fs-22"></i>

            <UserPopup
              clickItem={
                <Link to="" className="profile link">
                  <img
                    src="https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                    alt="profile-img"
                    style={{ width: 32, height: 32 }}
                    className="avatar loggedin-profile-img"
                  />
                </Link>
              }
            />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <AuthModal
        show={show}
        setShowModal={setShowModal}
        createModalShow={createModalShow}
        setCreateModalShow={setCreateModalShow}
      />
      <header
        id="header"
        className="header"
        style={token ? { backgroundColor: "#fff" } : {}}
      >
        <div className="container flex flex-center-between">
          <Link to="/" className="medium-main-logo link">
            <img
              src="medium-logo.svg"
              className="img-cover"
              alt="medium-logo"
              style={token ? { width: 44 } : { width: 160, height: 24 }}
            />
          </Link>
          <nav id="menu" className="menu flex flex-center">
            <Link className="link primary-text">
              Our Story
            </Link>
            <Link  className="link primary-text">
              Membership
            </Link>
            <Link className="link primary-text">
              Write
            </Link>
            {/* <AuthModal clickItem={<>
              <Button
              className={"primary-text link ghost border-none"}
              title={"Giriş Yap"}
              handleClick={handleClick}
            />
            <Button
              title={token ? "Çıkış Yap" : "Giriş Yap"}
              handleClick={handleClick}
            /></>}/> */}
            <Button
              className={"primary-text link ghost border-none"}
              title={"Giriş Yap"}
              handleClick={handleClick}
            />
            <Button
              title={token ? "Çıkış Yap" : "Giriş Yap"}
              handleClick={handleClick}
            />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
