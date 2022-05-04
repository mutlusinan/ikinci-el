import { useEffect, useState } from "react";
import logo from "../img/loginLogo.png";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

function SigninComp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    await axios
      .post("https://bootcamp.akbolat.net/auth/local/register", {
        email: email,
        password: password,
        username: username,
      })
      .then((response) => {
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/", { replace: true });
      })
      .catch((error) => {
        notify();
      })
      .finally(setLoading(false));
  }

  useEffect(() => {
    console.log(email, password, username);
    setUsername(email.split("@")[0]);
  }, [email, password]);

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
            <div id="girisYap">Üye Ol</div>
            <div id="girisAlt">Fırsatlardan yararlanmak için üye ol!</div>
          </div>
          <div className="loginInput">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div></div>
          </div>
          <div className="loginInput">
            <p>Şifre</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Yükleniyor" : "Üye Ol"}
          </button>
          <div id="loginDirectly">
            Hesabın var mı? <Link to="/login">Giriş Yap</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SigninComp;
