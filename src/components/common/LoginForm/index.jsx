import AuthenticationButton from "../AuthenticationButton";

const LoginForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log("deneme");
  };

  return (
    <form id="login-form" className="login-form flex flex-column" onSubmit={submitForm}>
      <label className="email fs-13">Kullanıcı E-maili</label>
      <input
        type="email"
        id="email"
        className="email form-input fs-16"
        name="email"
        // onChange={}
      />
      <label className="password fs-13">Kullanıcı Şifresi</label>
      <input
        type="password"
        id="password"
        className="password form-input fs-16"
        name="password"
      />

      <div className="form-login-buttons flex flex-column">
        <AuthenticationButton
          className={"success fs-16"}
          title={"Giriş Yap"}
        
        />
        {/* <AuthenticationButton
          icon={"fa-brands fa-google"}
          title={"Sign in with Google"}
        />
        <AuthenticationButton
          icon={"fa-brands fa-facebook"}
          title={"Sign in with Facebook"}
        /> */}
      </div>
    </form>
  );
};

export default LoginForm;
