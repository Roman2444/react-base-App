import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
  return (
    <div>
      <h2>Страница авторизации</h2>
      <form style={{ width: 300 }}>
        <MyInput placeholder="введите имя" type="text" />
        <MyInput placeholder="введите пароль" type="password" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
