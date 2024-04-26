import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  // global olarak tutmak istediğimiz state’lerin bulunacağı component’i oluşturmamız gerekmektedir.Bu durumda AuthProvider

  const [user, setUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  // useEffect(() => {
  // },[]);

  const onLoginSuccess = (token, user) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
    setIsLoggedIn(true);
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
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
