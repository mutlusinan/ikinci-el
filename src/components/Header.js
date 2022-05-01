import React from "react";
import logo from "../img/loginLogo.png";
import Plus from "../constants/Plus.js";
import Dude from "../constants/Dude.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <span className="headerButton firstItem">
          <Plus />
          <span className="notVisibleMobile">Ürün Ekle</span>
        </span>
        <Link to="/login">
        <span className="headerButton lastItem">
          <Dude />
          <span>Giriş Yap</span>
        </span>
        </Link>
      </div>
    </>
  );
}

export default Header;
