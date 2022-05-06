import { useEffect, useState } from "react";
import axios from "axios";

import logo from "../img/loginLogo.png";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.error("Hatalı giriş.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

function LoginComp() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { data } = await axios
      .post("https://bootcamp.akbolat.net/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        setLoggedIn(true);
        navigate("/", { replace: false });
      })
      .catch((error) => {
        notify();
      })
      .finally(setLoading(false));
  }

  useEffect(() => {
    if (loggedIn) {
    }
  }, [loggedIn]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
      />
      <div id="loginRight">
        <img src={logo} alt="logo" id="loginLogo" />
        <form id="loginBlock" onSubmit={handleSubmit}>
          <div>
            <div id="girisYap">Giriş Yap</div>
            <div id="girisAlt">Fırsatlardan yararlanmak için giriş yap!</div>
          </div>
          <div className="loginInput">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email@example.com"
              name="identifier"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div></div>
          </div>
          <div className="loginInput">
            <p>Şifre</p>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <a href="/">Şifremi Unuttum</a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Yükleniyor" : "Giriş"}
          </button>
          <div id="loginDirectly">
            Hesabın yok mu? <Link to="/signin">Üye Ol</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginComp;
