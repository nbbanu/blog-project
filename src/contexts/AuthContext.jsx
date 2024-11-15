import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  // global olarak tutmak istediğimiz state’lerin bulunacağı component’i oluşturmamız gerekmektedir.Bu durumda AuthProvider

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("user"));

  const onLoginSuccess = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const value = {
    token,
    setToken,
    onLoginSuccess,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
export default AuthProvider;
