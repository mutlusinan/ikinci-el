import LadyInBlue from "../components/LadyInBlue";
import Card from "../components/Card";
import logo from "../img/loginLogo.png";

function Login() {
  return (
    <>
      <div className="bodyLike">
        <LadyInBlue />
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
              Hesabın var mı? <a href="/">Giriş yap</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;