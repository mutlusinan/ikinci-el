import { useEffect, useState } from "react";
import logo from "../img/loginLogo.png";
import Plus from "../constants/Plus.js";
import Dude from "../constants/Dude.js";
import {  useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function loginOrSignin(loggedIn) {
    if (loggedIn) {
      navigate("/myPage", { replace: false });
    } else {
      navigate("/login", { replace: false });
    }
  }

  useEffect(() => {
    if (localStorage.getItem("userInfo") !== null) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <div className="header">
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/", { replace: false })}
        />

        <span
          className="headerButton firstItem"
          onClick={
            loggedIn
              ? () => navigate("/addproduct", { replace: false })
              : () => navigate("/signin", { replace: false })
          }
        >
          <Plus />
          <span className="notVisibleMobile">Ürün Ekle</span>
        </span>

        <button
          className="headerButton lastItem"
          onClick={() => loginOrSignin(loggedIn)}
        >
          <Dude />
          <span>{loggedIn ? "Hesabım" : "Giriş Yap"}</span>
        </button>
      </div>
    </>
  );
}

export default Header;
