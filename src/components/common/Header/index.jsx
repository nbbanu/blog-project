import { useState } from "react";
import AuthModal from "../AuthModal";
import Button from "../Button";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [show, setShowModal] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);

  const { token } = useAuth();

  document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const button = document.querySelector("button");

    if (window.scrollY > 462) {
      header.classList.add("white-header");
      button.classList.add("success");
    } else {
      header.classList.remove("white-header");
      button.classList.remove("success");
    }
  });
  function handleClick() {
    setShowModal(!show);
    setCreateModalShow(createModalShow);
  }

  if (token) {
    return (
      <section
        id="header"
        className="header"
        style={token && { backgroundColor: "#fff" }}
      >
        <h1>kdfjasldkfjasdlkfj</h1>
      </section>
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
      <section
        id="header"
        className="header"
        style={token && { backgroundColor: "#fff" }}
      >
        <div className="container flex flex-center-between">
          <a href="/" className="medium-main-logo link">
            <img
              src={token ? "medium-icon.svg" : "medium-logo.svg"}
              className="img-cover"
              alt="medium-logo"
              style={token ? { width: 44 } : { width: 160, height: 24 }}
            />
          </a>
          <nav id="menu" className="menu flex flex-center">
            <a href="#" className="link primary-text">
              Our Story
            </a>
            <a href="#" className="link primary-text">
              Membership
            </a>
            <a href="#" className="link primary-text">
              Write
            </a>
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
      </section>
    </>
  );
};

export default Header;
