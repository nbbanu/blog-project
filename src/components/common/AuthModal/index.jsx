import Modal from "../Modal";

const AuthModal = ({
  show,
  setShowModal,
  createModalShow,
  setCreateModalShow,
  children,
  closeModal,
}) => {
  return (
    <div className={`auth-modal flex flex-center-center ${show && "open"}`}>
      <Modal
        setShowModal={setShowModal}
        createModalShow={createModalShow}
        setCreateModalShow={setCreateModalShow}
        children={children}
        closeModal={closeModal}
      />
    </div>
  );
};

export default AuthModal;
