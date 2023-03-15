import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/">Посты</Link>
        <Link to="/about">О проекте</Link>
      </div>
      <MyButton onClick={() => setIsAuth(false)} style={{ marginLeft: "auto" }}>
        {isAuth ? 'выйти' : "регистрация"}
      </MyButton>
    </div>
  );
};

export default Navbar;
