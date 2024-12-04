import { useEffect, useRef, useState } from "react";
import {
  removeUserImage,
  updateUserImage,
  updateUserInformation,
} from "../../../../service";
import Button from "../../../../components/common/Button";
import { useAuth } from "../../../../contexts/AuthContext";
import Loader from "../../../../components/common/Loader";

const EditProfileModal = ({ user, setShowModal }) => {
  const [username, setUserName] = useState(user?.username);
  const [bio, setShortBio] = useState(user?.bio);
  const [avatar, setAvatar] = useState(user?.profileImage);
  // const [isClickedUptadeBtn, setIsClickedUpdateBtn] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [shortBioError, setShortBioError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUserName(user?.username);
    setShortBio(user?.bio);
    setAvatar(user?.profileImage);
  }, [user]);

  const { setUser, token } = useAuth();
  const inputRef = useRef(null);

  const openFile = (e) => {
    e.preventDefault();
    inputRef.current?.click();
    // setIsClickedUpdateBtn(!isClickedUptadeBtn);
  };
  
  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData?.append("file", file);
    setAvatar(window.URL.createObjectURL(file));

    setLoading(true);
    updateUserImage(formData)
      .then((res) => {
        const storageUser = JSON.parse(localStorage.getItem("user")) || {
          ...user,
        };
        storageUser.profileImage = res?.data?.profileImage;

        localStorage.setItem("user", JSON.stringify(storageUser));
        setUser(storageUser);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const removeAvatar = async (e) => {
    e.preventDefault();
    // https://miro.medium.com/v2/resize:fill:80:80/1*dmbNkD5D-u45r44go_cf0g.png

    const storageUser = JSON.parse(localStorage.getItem("user")) || {
      ...user,
    };
    removeUserImage(storageUser?.profileImageFileName);

    storageUser.profileImage =
      "https://miro.medium.com/v2/resize:fill:80:80/1*dmbNkD5D-u45r44go_cf0g.png";
    storageUser.profileImageFileName =
      "https://miro.medium.com/v2/resize:fill:80:80/1*dmbNkD5D-u45r44go_cf0g.png";

    localStorage.setItem("user", JSON.stringify(storageUser));
    setUser(storageUser);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);

    if (e.target.value.length > 50) {
      setUserNameError("İsim en fazla 50 karakterden oluşabilir.");
    } else if (e.target.value.length == 0) {
      setUserNameError("Lütfen bir isim giriniz.");
    } else {
      setUserNameError("");
    }
  };
  const handleShortBİoChange = (e) => {
    setShortBio(e.target.value);
    if (e.target.value.length > 160) {
      setShortBioError("Bio en fazla 160 karakter içerebilir.");
    } else {
      setShortBioError("");
    }
  };
  const cancelEditForm = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const saveEditForm = async (e) => {
    e.preventDefault();
    const body = {
      username,
      bio,
    };
    setLoading(true);
    updateUserInformation(body)
      .then((res) => {
        const storageUser = JSON.parse(localStorage.getItem("user")) || {
          ...user,
        };

        storageUser.username = body?.username;
        storageUser.bio = body?.bio;

        localStorage.setItem("user", JSON.stringify(storageUser));
        setUser(storageUser);
      })
      .finally(() => {
        cancelEditForm(e);
        setLoading(false);
      });
  };
  return (
    <div className="auth-container">
      {loading ? <Loader /> : ""}
      <div className="edit-profile-modal">
        <h2 className="modal-title primary-text fs-20">Profil Bilgileri</h2>
        <form
          id="edit-profile-form"
          className="edit-profile-form flex flex-column"
        >
          <div className="edit-profile-photo">
            <label className="photo-text fs-14 light-text">Fotoğraf</label>
            <div className="flex">
              <div className="profile-photo">
                <img src={avatar} alt="avatar" className="avatar img-cover" />
              </div>
              <div className="edit-profile-photo-right">
                <div className="edit-buttons flex">
                  <div>
                    <input
                      className="file-input"
                      type="file"
                      accept="image/*"
                      name="avatar"
                      ref={inputRef}
                      onChange={handleAvatarChange}
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
              <div
                className="flex flex-center"
                style={{ position: "relative" }}
              >
                <input
                  value={username}
                  type="text"
                  className="name-input primary-text fs-14"
                  required
                  name="name"
                  onChange={handleUserNameChange}
                  style={{ borderColor: userNameError ? "#C94A4A" : "" }}
                />
                <i
                  className="fa-solid fa-exclamation flex flex-center-center fs-14"
                  style={{ display: userNameError ? "flex" : "none" }}
                ></i>
              </div>
              <div className="character-length flex">
                <div className="error-area fs-13">{userNameError}</div>
                <div>
                  <span
                    className="entered-character fs-13 primary-text"
                    style={{ color: username?.length > 50 ? "#C94A4A" : "" }}
                  >
                    {username?.length}
                  </span>
                  <span className="total-character fs-13 light-text">/50</span>
                </div>
              </div>
            </div>
            <div className="flex flex-column">
              <label className="fs-14 primary-text">Kısa Biyografi</label>
              <div
                className="flex flex-center"
                style={{ position: "relative" }}
              >
                <textarea
                  type="text"
                  className="bio-input primary-text fs-14"
                  rows={3}
                  name="short-bio"
                  onChange={handleShortBİoChange}
                  value={bio}
                  style={{ borderColor: shortBioError ? "#C94A4A" : "" }}
                ></textarea>
                <i
                  className="fa-solid fa-exclamation flex flex-center-center fs-14"
                  style={{ display: shortBioError ? "flex" : "none" }}
                ></i>
              </div>

              <div className="character-length flex">
                <div className="error-area"></div>
                <div>
                  <span
                    className="entered-character fs-13 primary-text"
                    style={{ color: shortBioError ? "#C94A4A" : "" }}
                  >
                    {bio?.length}
                  </span>
                  <span className="total-character fs-13 light-text">/160</span>
                </div>
              </div>
            </div>
          </div>
          <div className="light-line"></div>
          {/* <div className="about-page">
          <div className="flex flex-center-between">
            <p className="fs-14 primary-text">About Page</p>
            <Link className="link" to={"about"} target="_blank">
              <i className="fa-solid fa-arrow-right-long light-text"></i>
            </Link>
          </div>
          <span className="about-page-text fs-13 light-text">
          Kısa biyografinizden daha canlı bir portre çizmek için görseller ve daha fazlasıyla kişiselleştirin.
          </span>
          
        </div> */}
          <div className="buttons flex">
            <Button
              className={"ghost cancel-btn"}
              title={"İptal Et"}
              handleClick={cancelEditForm}
            />
            <Button
              className={"success"}
              title={"Save"}
              // disabled={!isClickedUptadeBtn}
              handleClick={saveEditForm}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
