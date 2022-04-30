import LadyInBlue from "../components/LadyInBlue";
import Card from "../components/Card";
import "../css/logScreen.css";
import logo from "../img/loginLogo.png";

function Signin() {
  return (
    <>
    <div className="bodyLike"></div>
      <LadyInBlue />
      <Card/>
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
            Hesabın yok mu? <a href="/">Üye Ol</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;