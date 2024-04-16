import { useState } from "react";
import AuthModal from "../AuthModal";
import Button from "../Button";

const Header = () => {
  const [show, setShowModal] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);

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
 
  return (
    <>
      <AuthModal show={show} setShowModal={setShowModal} createModalShow={createModalShow} setCreateModalShow={setCreateModalShow}/>
      <section id="header" className="header">
        <div className="container flex flex-center-between">
          <a href="/" className="medium-main-logo link">
            <img
              src="medium-logo.svg"
              className="img-cover"
              alt="medium-logo"
              style={{ width: "160px", height: "24px" }}
            />
          </a>
          <nav className="menu flex flex-center">
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
              className={"primary-text visible ghost border-none"}
              title={"Giriş Yap"}
              handleClick={handleClick}
            />
            <Button
              title="Hemen Başla"
              handleClick={handleClick}
            />
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
