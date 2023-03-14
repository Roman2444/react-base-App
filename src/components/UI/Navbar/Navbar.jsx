import React from 'react';
import {Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/posts">Посты</Link>
            <Link to="/about">О проекте</Link>
      </div>
    );
};

export default Navbar;