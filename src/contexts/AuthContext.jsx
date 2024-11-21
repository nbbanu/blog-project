import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  // global olarak tutmak istediğimiz state’lerin bulunacağı component’i oluşturmamız gerekmektedir.Bu durumda AuthProvider
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const onLoginSuccess = (token, user) => {
    localStorage.setItem("token", token);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const value = {
    user,
    setUser,
    token,
    setToken,
    onLoginSuccess,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
export default AuthProvider;
