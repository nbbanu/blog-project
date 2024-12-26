import { useState } from "react";
import AuthModal from "../AuthModal";
import Button from "../Button";

const Banner = () => {
  const [show, setShowModal] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);

  function handleClick() {
    setShowModal(!show);
    setCreateModalShow(createModalShow);
  }
  return (
    <>
      <AuthModal
        show={show}
        setShowModal={setShowModal}
        createModalShow={createModalShow}
        setCreateModalShow={setCreateModalShow}
      />

      <section id="banner">
        <div className="container flex">
          <div className="banner-left ">
            <h2 className="banner-left-h2">Stay curious.</h2>
            <p className="banner-left-text">
              Herhangi bir konu hakkında yazarların hikayelerini, düşüncelerini
              ve uzmanlıklarını keşfedin.{" "}
            </p>
          </div>
          <div className="banner-right display-none">
            <img src="/banner-right.png" className="img-cover" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
