import { useForm } from "react-hook-form";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { signUp } from "../../../service";
import Swal from "sweetalert2";

const SignUpForm = ({ show, setCreateModalShow, createModalShow }) => {
  let passwordRegex = /^(?=.*[0-9]).{5,16}$/;

  useEffect(() => {
    if (!show) {
      reset({
        name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
    }
  }, [show]);

  const schema = yup
    .object({
      name: yup
        .string()
        .trim()
        .required("Bu alan zorunludur.")
        .max(20, "İsim 20 karakterden uzun olamaz."),
      username: yup
        .string()
        .trim()
        .required("Bu alan zorunludur.")
        .max(20, "Kullanıcı adı 20 karakterden uzun olamaz."),
      email: yup
        .string()
        .email()
        .trim()
        .required("Geçerli bir email adresi giriniz."),
      password: yup
        .string()
        .trim()
        .required("Bu alan zorunludur")
        .matches(
          passwordRegex,
          "Şifre en az 1 büyük harf ve bir özel karakter içermelidir"
        ),
      repeatPassword: yup
        .string()
        .trim()
        .required("Bu alan zorunludur.")
        .oneOf([yup.ref("password")], "Şifreler eşleşmiyor."),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (data) => {
    signUp(data)
      .then((res) => {
        Swal.fire({
          title: "Kayıt Başarılı! Lütfen Tekrar Giriş Yapınız!",
          color: "#242424",
          icon: "success",
          iconColor: "#ffc016",
        });
        setCreateModalShow(!createModalShow);
      })
      .catch((err) => {
        err.errors?.forEach((error) => {
          setError(error.property, { type: "custom", message: error.message });
        });
      });
  };

  return (
    <form
      id="sign-up-form"
      className="sign-up-form flex flex-column"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-inputs flex flex-column">
        <div className="flex flex-column">
          <label>İsim</label>
          <input
            className="form-input primary-text"
            placeholder="*"
            {...register("name")}
          />
          <p className="error-text fs-13">{errors?.name?.message}</p>
        </div>
        <div className="flex flex-column">
          <label>Kullanıcı Adı</label>
          <input
            className="form-input"
            placeholder="*"
            {...register("username")}
          />
          <p className="error-text fs-13">{errors?.username?.message}</p>
        </div>

        <div className="flex flex-column">
          <label>E-mail</label>
          <input
            className="form-input"
            placeholder="*"
            {...register("email")}
          />
          <p className="error-text fs-13">{errors?.email?.message}</p>
        </div>

        <div className="flex flex-column">
          <label>Şifre</label>
          <input
            type="password"
            placeholder="*"
            className="form-input"
            {...register("password")}
          />
          <p className="error-text fs-13">{errors?.password?.message}</p>
        </div>

        <div className="flex flex-column">
          <label>Şifre Doğrulama</label>
          <input
            type="password"
            placeholder="*"
            className="form-input"
            {...register("repeatPassword")}
          />
          <p className="error-text fs-13">{errors?.repeatPassword?.message}</p>
        </div>
      </div>

      <Button type="button" title={"Kaydol"} className={"success submit-btn"} />
    </form>
  );
};

export default SignUpForm;
