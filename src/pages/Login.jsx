import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
  const { setIsAuth, isAuth } = React.useContext(AuthContext);
  const logIn = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  };
  return (
    <div>
      <h2>Страница авторизации</h2>
      <form onSubmit={(e) => logIn(e)} style={{ width: 300 }}>
        <MyInput placeholder="введите имя" type="text" />
        <MyInput placeholder="введите пароль" type="password" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
