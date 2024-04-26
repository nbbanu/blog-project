import { useState } from "react";
import AuthModal from "../AuthModal";
import Button from "../Button";
import { useAuth } from "../../../contexts/AuthContext";

const Banner = () => {
  const [show, setShowModal] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);

  const {token} = useAuth();

  function handleClick() {
    setShowModal(!show);
    setCreateModalShow(createModalShow);
  }
  return (
    <>
    <AuthModal show={show} setShowModal={setShowModal} createModalShow={createModalShow} setCreateModalShow={setCreateModalShow}/>

    <section id="banner">
      <div className="container flex">
        <div className="banner-left ">
          <h2 className="banner-left-h2">Stay curious.</h2>
          <p className="banner-left-text">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Button handleClick={handleClick} title="Okumaya Başla !" size="lg" />
        </div>
        <div className="banner-right display-none">
          <img src="banner-right.png" className="img-cover" alt="" />
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Banner;
