import React from 'react'
import logo from "../img/loginLogo.png";

import { Link } from "react-router-dom";



function SigninComp() {
  return (
    <div id="loginRight">
          <img src={logo} alt="logo" id="loginLogo" />
          <form id="loginBlock">
            <div>
              <div id="girisYap">Üye Ol</div>
              <div id="girisAlt">Fırsatlardan yararlanmak için üye ol!</div>
            </div>
            <div className="loginInput">
              <p>Email</p>
              <input type="email" placeholder="Email@example.com" />
              <div></div>
            </div>
            <div className="loginInput">
              <p>Şifre</p>
              <input type="password" />
            </div>
            <button>Üye Ol</button>
            <div id="loginDirectly">
              Hesabın var mı? <Link to="/login">Giriş Yap</Link>
            </div>
          </form>
        </div>
  )
}

export default SigninComp