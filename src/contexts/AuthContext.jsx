import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  // global olarak tutmak istediğimiz state’lerin bulunacağı component’i oluşturmamız gerekmektedir.Bu durumda AuthProvider

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email,setEmail] = useState(localStorage.getItem("email"));

  const onLoginSuccess = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const value = {
    setEmail,
    email,
    token,
    setToken,
    onLoginSuccess,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
export default AuthProvider;
