const Modal = ({ setShowModal, children }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal flex flex-column flex-center-center`}>
      <div className="close light-text" onClick={closeModal}>
        X
      </div>
      {children}
    </div>
  );
};

export default Modal;
