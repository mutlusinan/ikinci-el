import React from "react";
import logo from "../img/loginLogo.png";
import Plus from "../constants/Plus.js";
import Dude from "../constants/Dude.js";

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo"></img>
        <span className="headerButton"><Plus/><span className="notVisibleMobile">Ürün Ekle</span></span>
        <span className="headerButton"><Dude/><span>Giriş Yap</span></span>
      </div>
    </>
  );
}

export default Header;
