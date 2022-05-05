import { useEffect, useState } from "react";
import logo from "../img/loginLogo.png";
import Plus from "../constants/Plus.js";
import Dude from "../constants/Dude.js";
import { Link, useNavigate } from "react-router-dom";

import { StoreContext } from "../contexts/StoreContext.js";

function Header() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function loginOrSignin(loggedIn) {
    if (loggedIn) {
      navigate("/myPage", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }


  useEffect(() => {
    if(localStorage.getItem("userInfo")!==null)
    {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        
        <span className="headerButton firstItem" onClick={()=> navigate("/addproduct", { replace: true })}>
          <Plus />
          <span className="notVisibleMobile">Ürün Ekle</span>
        </span>

        <button className="headerButton lastItem" onClick={()=> loginOrSignin(loggedIn)}>
          <Dude />
          <span>{loggedIn ? "Hesabım" : "Giriş Yap"}</span>
        </button>
      </div>
    </>
  );
}

export default Header;
