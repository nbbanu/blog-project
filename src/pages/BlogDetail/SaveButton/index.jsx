import { useState } from "react";
import AuthModal from "../../../components/common/AuthModal";
import BasicPopup from "../../../components/common/BasicPopup";
import Button from "../../../components/common/Button";
import MiniTooltip from "../../../components/common/MiniTooltip";

const SaveButton = () => {
  const [show, setShowModal] = useState(false);
  const [showDescInput, setShowDescInput] = useState(false);
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const [listNameCharacterCount, setListNameCharacterCount] = useState(0);
  const [descriptionCharacterCount, setDescriptionCharacterCount] = useState(0);
  const [listNameError, setListNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const openCreateListModal = () => {
    setShowModal(!show);
  };
  const handleListNameChange = (e) => {
    setListName(e.target.value);
    setListNameCharacterCount(e.target.value.length);

    if (e.target.value.length > 60) {
      setListNameError("İsim en fazla 60 karakterden oluşabilir.");
    } else {
      setListNameError("");
    }
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionCharacterCount(e.target.value.length);
    console.log(description);

    if (e.target.value.length > 280) {
      setDescriptionError("İsim en fazla 280 karakterden oluşabilir.");
    } else {
      setDescriptionError("");
    }
  };
  const showDescriptionInput = (e) => {
    e.preventDefault();
    setShowDescInput(!showDescInput);
  };

  const createReadingList = (e) => {
    e.preventDefault();
    const readingListFormData = {
      listName,
      description,
      isPrivate,
    };
  };
  const cancelReadingListForm = (e) => {
    e.preventDefault();
    setListName("");
    setDescription("");
    setListNameCharacterCount(0);
    setDescriptionCharacterCount(0);
    setShowModal(false);
  };

  return (
    <div>
      <AuthModal
        show={show}
        setShowModal={setShowModal}
        children={
          <div className="create-list-modal">
            <h2 className="modal-title primary-text fs-32">
              Yeni liste oluştur
            </h2>
            <form className="create-list-form">
              <div className="modal-inputs">
                <div>
                  <input
                    value={listName}
                    type="text"
                    name="list-name"
                    placeholder="Listene bir isim ver"
                    className="list-name-input"
                    onChange={handleListNameChange}
                    style={{ borderColor: listNameError ? "#C94A4A" : "" }}
                  />
                  <div className="character-length flex">
                    <div className="error-area fs-13">{listNameError}</div>
                    <div>
                      <span
                        className="entered-character fs-13 primary-text"
                        style={{ color: listName.length > 60 ? "#C94A4A" : "" }}
                      >
                        {listNameCharacterCount}
                      </span>
                      <span className="total-character fs-13 light-text">
                        /60
                      </span>
                    </div>
                  </div>
                </div>
                <>
                  <div
                    style={{ display: showDescInput ? "none" : "flex" }}
                    className="add-desc-area"
                  >
                    <Button
                      title="Bir açıklama ekle"
                      className={"border-none ghost add-desc-btn"}
                      handleClick={showDescriptionInput}
                    />
                  </div>

                  {showDescInput && (
                    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                      <input
                        value={description}
                        type="text"
                        name="list-name"
                        placeholder="Bir açıklama ekle"
                        className="list-name-input"
                        onChange={handleDescriptionChange}
                        style={{
                          borderColor: descriptionError ? "#C94A4A" : "",
                        }}
                      />
                      <div className="character-length flex">
                        <div className="error-area fs-13">
                          {descriptionError}
                        </div>
                        <div>
                          <span
                            className="entered-character fs-13 primary-text"
                            style={{
                              color: description.length > 280 ? "#C94A4A" : "",
                            }}
                          >
                            {descriptionCharacterCount}
                          </span>
                          <span className="total-character fs-13 light-text">
                            /280
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              </div>
              <div>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark primary-text"></span>
                  Sadece ben görmek istiyorum
                </label>
              </div>
              <div className="flex flex-center buttons">
                <Button
                  title="Cancel"
                  className={"ghost"}
                  handleClick={cancelReadingListForm}
                ></Button>
                <Button
                  title="Create"
                  className={"success create-btn"}
                  disabled={!listName.length > 0}
                  handleClick={createReadingList}
                ></Button>
              </div>
            </form>
          </div>
        }
      />
      <div>
        <BasicPopup
          clickItem={
            <MiniTooltip title={"Save"}>
              <i className="fa-regular fa-bookmark light-text fs-20"></i>
            </MiniTooltip>
          }
          children={
            <div className="bookmark-modal-content">
              <div className="checkboxes">
                <div className="flex flex-center-between">
                  <div>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span className="checkmark primary-text"></span>
                      Okuma Listesi
                    </label>
                  </div>
                  <i className="fa-solid fa-lock primary-text fs-12" style={{marginLeft:7}}></i>
                </div>

                <div>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark primary-text"></span>
                    HTML
                  </label>
                </div>
              </div>
              <div className="light-line"></div>
              <div>
                <Button
                  title="Yeni Liste Oluştur"
                  className="ghost border-none create-list-btn"
                  handleClick={openCreateListModal}
                />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default SaveButton;
