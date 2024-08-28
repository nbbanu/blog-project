import { useState } from "react";
import Button from "../../../components/common/Button";
import EditProfileModal from "../EditProfileModal";
import AuthModal from "../../../components/common/AuthModal";
import ClapButton from "../../BlogDetail/ClapButton";
import CommentButton from "../../BlogDetail/CommentButton";

const ReadingListPage = () => {
  const [show, setShowModal] = useState(false);
  const openEditProfileModal = () => {
    setShowModal(!show);
  };
  return (
    <div className="container">
         <AuthModal
        show={show}
        setShowModal={setShowModal}
        children={<EditProfileModal setShowModal={setShowModal} />}
      />
      <div className="reading-list-page">
        <div className="reading-list-page-left">
          <div className="profile-info flex flex-center">
            <img
              src="https://miro.medium.com/v2/resize:fill:48:48/0*PVc8ycK2VwtFt7R0"
              className="avatar"
              style={{ width: 48, height: 48 }}
              alt="avatar"
            />
            <div>
              <div className="user-name primary-text">Banubkrli</div>
              <div className="profile-info-bottom flex flex-center">
                <div className="date light-text fs-14">Aug 26, 2024</div>
                <div className="flex flex-center-center">
                  <i
                    className="fa-solid fa-circle light-text"
                    style={{ fontSize: 3 }}
                  ></i>
                </div>
                <div className="story flex flex-center">
                  <span className="fs-13 light-text">5</span>
                  <span className="fs-13 light-text story-text">stories</span>
                  <span>
                    <i className="fa-solid fa-lock fs-12 light-text"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="list-page-header">
            <h2 className="reading-list-h2 primary-text fs-32">Reading List</h2>
            <div>
              <div className="light-line"></div>
              <div className="flex flex-center " style={{gap:25}}>
              <ClapButton/>
              <CommentButton/>
              </div>
          
              <div className="light-line"></div>
            </div>
          </div>
        </div>
        <div className="reading-list-page-right">
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
      </div>
    </div>
  );
};

export default ReadingListPage;
