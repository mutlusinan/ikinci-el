import React from 'react'
import logo from "../img/loginLogo.png";

import { Link } from "react-router-dom";



function LoginComp() {
  return (
    <div id="loginRight">
        <img src={logo} alt="logo" id="loginLogo" />
        <form id="loginBlock">
          <div>
            <div id="girisYap">Giriş Yap</div>
            <div id="girisAlt">Fırsatlardan yararlanmak için giriş yap!</div>
          </div>
          <div class="loginInput">
            <p>Email</p>
            <input type="email" placeholder="Email@example.com" />
            <div></div>
          </div>
          <div class="loginInput">
            <p>Şifre</p>
            <input type="password" />
            <a href="/">Şifremi Unuttum</a>
          </div>
          <button>Giriş</button>
          <div id="loginDirectly">
            Hesabın yok mu? <Link to="/signin">Üye Ol</Link>
          </div>
        </form>
      </div>
  )
}

export default LoginComp