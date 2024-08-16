import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import { useRef, useState } from "react";

const EditProfileModal = ({ setShowModal }) => {
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);

  const inputRef = useRef(null);

  const openFile = (e) => {
    e.preventDefault();
    inputRef.current?.click();
  };
  const updateAvatar = (e) => {
    const file = e.target.files[0];
    // setAvatar(file);
    setAvatar(window.URL.createObjectURL(file));
  };

  const removeAvatar = (e) => {
    e.preventDefault();
    setAvatar(
      "https://miro.medium.com/v2/resize:fill:80:80/1*dmbNkD5D-u45r44go_cf0g.png"
    );
  };

  return (
    <div className="edit-profile-modal">
      <h2 className="modal-title primary-text fs-20">Profil Bilgileri</h2>
      <form id="edit-profile-form" className="edit-profile-form">
        <div className="edit-profile-photo">
          <label className="photo-text fs-14 light-text">Fotoğraf</label>
          <div className="flex">
            <div className="profile-photo">
              <img
                src={
                  avatar
                    ? avatar
                    : "https://miro.medium.com/v2/resize:fill:40:40/1*i5p9qg4BGA4i2NXsghlnxQ.png"
                }
                alt="avatar"
                className="avatar img-cover"
              />
            </div>
            <div className="edit-profile-photo-right">
              <div className="edit-buttons flex">
                <div >
                  <input
                    className="file-input"
                    type="file"
                    accept="image/*"
                    name="avatar"
                    ref={inputRef}
                    onChange={updateAvatar}
                  />
                  <Button
                    title={"Güncelle"}
                    className={"ghost border-none update-btn"}
                    handleClick={openFile}
                  />
                </div>
                <Button
                  title={"Sil"}
                  className={"ghost border-none remove-btn"}
                  handleClick={removeAvatar}
                  type={"reset"}
                />
              </div>
              <div className="recommended-info">
                <span className="recommended-info-text light-text fs-14">
                  Önerilen: JPG, PNG ya da GIF
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="form-inputs">
          <div className="flex flex-column">
            <label className="fs-14 primary-text">İsim*</label>
            <input
              value={"BanuBkrli"}
              type="text"
              className="name-input primary-text fs-14"
              required
              name="name"
            />
            <div className="character-length">
              <span className="entered-character fs-13 primary-text">9</span>
              <span className="total-character fs-13 light-text">/50</span>
            </div>
          </div>
          <div className="flex flex-column">
            <label className="fs-14 primary-text">Kısa Biyografi</label>
            <textarea
              type="text"
              className="bio-input primary-text fs-14"
              rows={3}
              name="short-bio"
            ></textarea>
            <div className="character-length">
              <span className="entered-character fs-13 primary-text">9</span>
              <span className="total-character fs-13 light-text">/160</span>
            </div>
          </div>
        </div>
        <div className="light-line"></div>
        <div className="about-page">
          <div className="flex flex-center-between">
            <p className="fs-14 primary-text">About Page</p>
            <Link className="link" to={"about"} target="_blank">
              <i className="fa-solid fa-arrow-right-long light-text"></i>
            </Link>
          </div>
          <span className="about-page-text fs-13 light-text">
            Personalize with images and more to paint more of a vivid portrait
            of yourself than your ‘Short bio.’
          </span>
          <div className="buttons flex">
            <Button
              className={"ghost cancel-btn"}
              title={"Cancel"}
              handleClick={() => setShowModal(false)}
            />
            <Button className={"success"} title={"Save"} disabled={true} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfileModal;
