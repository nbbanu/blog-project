import AuthenticationButton from "../AuthenticationButton";
import Button from "../Button";
import LoginForm from "../LoginForm";

const Modal = ({
  closeModal,
  setShowModal,
  createModalShow,
  setCreateModalShow,
}) => {
  function closeModal() {
    setShowModal(false);
  }

  function handleClick() {
    setCreateModalShow(!createModalShow);
  }

  return (
    <div className={`modal flex flex-column flex-center-center`}>
      <div className="close light-text" onClick={closeModal}>
        X
      </div>
      {createModalShow ? (
        <>
          <h2 className="modal-header">Tekrar Hoşgeldiniz.</h2>
          <div className="modal-sign-up flex flex-column flex-center-center">
            <LoginForm/>           
            <div className="modal-sign-up-buttons flex flex-column">
              {/* <AuthenticationButton
                className={"success fs-16"}
                title={"Giriş Yap"}
              /> */}
              <AuthenticationButton
                icon={"fa-brands fa-google"}
                title={"Sign in with Google"}
              />
              <AuthenticationButton
                icon={"fa-brands fa-facebook"}
                title={"Sign in with Facebook"}
              />
              {/* <AuthenticationButton
                icon={"fa-brands fa-apple"}
                title={"Sign in with Apple"}
              />
              <AuthenticationButton
                icon={"fa-brands fa-twitter"}
                title={"Sign in with Twitter"}
              />
               */}
            </div>
            <div>
              <span className="primary-text">Hesabın Yok Mu?</span>
              <Button
                className="modal-button fs-16"
                title={"Oluştur"}
                handleClick={handleClick}
              />
            </div>
          </div>
          <p className="fs-13 light-text text-center" >
            Parolamı unuttum? 
            <a href="#" className="link light-text underline" style={{marginLeft:"3px"}}>
             Get help.
            </a>
          </p>
        </>
      ) : (
        <>
          <h2 className="modal-header">Medium'a Katılın.</h2>
          <div className="modal-sign-up flex flex-column flex-center-center">
            <div className="modal-sign-up-buttons flex flex-column">
              <AuthenticationButton
                icon={"fa-brands fa-google"}
                title={"Sign up with Google"}
              />
              <AuthenticationButton
                icon={"fa-brands fa-facebook"}
                title={"Sign up with Facebook"}
              />
              <AuthenticationButton
                icon={"fa-regular fa-envelope"}
                title={"Sign up with email"}
              />
            </div>
            <div>
              <span className="primary-text">Zaten Bir Hesabın Var Mı?</span>
              <Button
                className="modal-button fs-16"
                title={"Giriş Yap"}
                handleClick={handleClick}
              />
            </div>
          </div>
        </>
      )}

      <p className="policy fs-13 light-text text-center">
        Click “Sign up” to agree to Medium’s{" "}
        <a href="#" className="link light-text underline">
          Terms of Service
        </a>{" "}
        and acknowledge that Medium’s{" "}
        <a href="" className="link light-text underline">
          Privacy Policy
        </a>{" "}
        applies to you.
      </p>
    </div>
  );
};

export default Modal;
