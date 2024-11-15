import { useEffect, useState } from "react";
// erişmek istediğimiz componentten, oluşturmuş olduğumuz Context’i çağırmamız gerekmektedir.
import { useAuth } from "../../../contexts/AuthContext";
import AuthenticationButton from "../AuthenticationButton";
import Swal from "sweetalert2";
import { signIn } from "../../../service";
import Loader from "../Loader";

const LoginForm = ({ setShowModal }) => {
  const {onLoginSuccess} = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [mailErrorMessage, setMailErrorMesage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (formData.email || formData.password) {
      validateForm();
    }
  }, [formData]);

  const validateForm = () => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let passwordRegex = /^(?=.*[0-9]).{5,16}$/;
    // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/;

    if (formData.email === "") {
      setMailErrorMesage("Bu alan zorunludur");
      return false;
    }
    if (formData.password === "") {
      setPasswordErrorMessage("Bu alan zorunludur");
      return false;
    }

    if (!emailRegex.test(formData.email) && formData.email) {
      setMailErrorMesage("Geçerli bir email adresi giriniz");
      return false;
    }

    if (!passwordRegex.test(formData.password) && formData.password) {
      setPasswordErrorMessage(
        "Şifre en az 1 rakam, 1 büyük harf ve özel karakter içermelidir."
      );
      return false;
    }

    setMailErrorMesage("");
    setPasswordErrorMessage("");

    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;
    setLoading(true);

    signIn(formData)
      .then((res) => {
        Swal.fire({
          title: "Giriş Başarılı",
          color: "#242424",
          icon: "success",
          iconColor: "#ffc016",
        });

        onLoginSuccess(res?.data?.accessToken);
        setShowModal(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // if (name === "password") {
    //   setFormData((values) => ({ ...values, password: value }));
    // }

    // if (name === "email") {
    //   setFormData((values) => ({ ...values, email: value }));
    // }

    setFormData((values) => ({ ...values, [name]: value.trim() }));
    
    // validateForm({ ...formData, [name]: value }); // useEffect yerine ikinci bir kullanım
  };

  return (
    <form
      id="login-form"
      className="login-form flex flex-column"
      onSubmit={submitForm}
    >
      <label className="email fs-13">Kullanıcı E-maili</label>
      <input
        type="email"
        id="email"
        className="email form-input fs-16"
        name="email"
        value={formData.name}
        onChange={handleChange}
      />
      <p className="emai-error-text fs-13" style={{ color: "red" }}>
        {mailErrorMessage}
      </p>
      <label className="password fs-13">Kullanıcı Şifresi</label>
      <input
        type="password"
        id="password"
        className="password form-input fs-16"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <p className="password-error-text fs-13" style={{ color: "red" }}>
        {passwordErrorMessage}
      </p>
      <p className="error-text fs-13 text-center" style={{ color: "red" }}>
        {error}
      </p>

      <div className="form-login-buttons flex flex-center-center flex-column">
        {loading ? <Loader /> : ""}
        <AuthenticationButton className={"authentication-button fs-16 success"} title={"Giriş Yap"} />
        <AuthenticationButton
          icon={"fa-brands fa-google"}
          title={"Sign in with Google"}
        />
        <AuthenticationButton
          icon={"fa-brands fa-facebook"}
          title={"Sign in with Facebook"}
        />
      </div>
    </form>
  );
};

export default LoginForm;
