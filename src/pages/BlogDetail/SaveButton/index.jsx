import { useState } from "react";
import AuthModal from "../../../components/common/AuthModal";
import BasicPopup from "../../../components/common/BasicPopup";
import Button from "../../../components/common/Button";
import MiniTooltip from "../../../components/common/MiniTooltip";
import Swal from "sweetalert2";
import { createReadingList, getListDetailByBlogId } from "../../../service";
import Loader from "../../../components/common/Loader";

const SaveButton = ({ blogId }) => {
  const [show, setShowModal] = useState(false);
  const [showDescInput, setShowDescInput] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [listNameCharacterCount, setListNameCharacterCount] = useState(0);
  const [descriptionCharacterCount, setDescriptionCharacterCount] = useState(0);
  const [listNameError, setListNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [blogDetailInList, setBlogDetailInList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isBlogOnList, setIsBlogOnList] = useState(false);
  const [loading, setLoading] = useState(true);

  const openCreateListModal = () => {
    setShowModal(!show);
  };
  const handleListNameChange = (e) => {
    setTitle(e.target.value);
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
    if (e.target.value.length > 280) {
      setDescriptionError("İsim en fazla 280 karakterden oluşabilir.");
    } else {
      setDescriptionError("");
    }
  };
  const handlePrivateChecked = () => {
    // setIsPrivate(e.target.checked);
    setIsPrivate(!isPrivate);
  };
  const showDescriptionInput = (e) => {
    e.preventDefault();
    setShowDescInput(!showDescInput);
  };

  const createList = (e) => {
    e.preventDefault();
    const readingListFormData = {
      title,
      description,
      isPrivate,
    };

    createReadingList(readingListFormData)
      .then((res) => {
        Swal.fire({
          title: "Okuma Listesi Oluşturuldu",
          color: "#242424",
          icon: "success",
          iconColor: "#ffc016",
        });
        setShowModal(false);
        console.log(readingListFormData);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setTitle("");
        setDescription("");
        // setIsPrivate(false);
      });
  };
  const cancelReadingListForm = (e) => {
    e.preventDefault();
    setTitle("");
    setDescription("");
    setIsPrivate(false);
    setListNameCharacterCount(0);
    setDescriptionCharacterCount(0);
    setShowModal(false);
  };

  const handleSaveClick = async () => {
    const data = await getListDetailByBlogId(blogId);
    setBlogDetailInList(data.lists);
    setLoading(false);
  };

  const checkHandler = (isAdded) => {
    setChecked(!checked);
    if (isAdded) {
      setIsBlogOnList(true);
    }
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
                    value={title}
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
                        style={{ color: title.length > 60 ? "#C94A4A" : "" }}
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
                  <input type="checkbox" onChange={handlePrivateChecked} />
                  <span className="checkmark primary-text"></span>
                  Sadece ben görmek istiyorum
                </label>
              </div>
              <div className="flex flex-center buttons">
                <Button
                  title="İptal Et"
                  className={"ghost"}
                  handleClick={cancelReadingListForm}
                ></Button>
                <Button
                  title="Oluştur"
                  className={"success create-btn"}
                  disabled={!title.length > 0}
                  handleClick={createList}
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
              <i
                className={`${
                  isBlogOnList ? "fa-solid" : "fa-regular"
                } fa-bookmark light-text fs-20`}
                onClick={handleSaveClick}
              ></i>
            </MiniTooltip>
          }
          children={
            <div className="bookmark-modal-content">
              {loading ? <Loader /> : ""}
              <div className="checkboxes">
                {blogDetailInList?.map((list) => (
                  <div className="list-to-save flex flex-center-between">
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          defaultChecked={list.isAdded ? true : false}
                          onClick={() => checkHandler(list.isAdded)}
                        />
                        <span className="checkmark primary-text"></span>
                        {list.title}
                      </label>
                    </div>
                    {list.isPrivate == true ? (
                      <i
                        className="fa-solid fa-lock primary-text fs-12"
                        style={{ marginLeft: 7 }}
                      ></i>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
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
