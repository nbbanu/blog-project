import Modal from "../Modal";

const AuthModal = ({
  show,
  setShowModal,
  createModalShow,
  setCreateModalShow,
}) => {
  return (
    <div className={`auth-modal flex flex-center-center ${show && "open"}`}>
      <Modal
        setShowModal={setShowModal}
        createModalShow={createModalShow}
        setCreateModalShow={setCreateModalShow}
      />
    </div>
  );
};

export default AuthModal;
