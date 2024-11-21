const Modal = ({ setShowModal, children }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal flex flex-column flex-center-center`}>
      <i className="fa-solid fa-xmark close light-text fs-24" onClick={closeModal}></i>
      {children}
    </div>
  );
};

export default Modal;
