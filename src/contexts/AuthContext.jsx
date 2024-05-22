import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  // global olarak tutmak istediğimiz state’lerin bulunacağı component’i oluşturmamız gerekmektedir.Bu durumda AuthProvider

  const [user, setUser] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));


  const onLoginSuccess = (token, user) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
  };

  const value = {
    token,
    setToken,
    user,
    setUser,
    onLoginSuccess,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
export default AuthProvider;
