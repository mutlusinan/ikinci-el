import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import clsx from "clsx";

import "react-toastify/dist/ReactToastify.css";
import logo from "../../img/loginLogo.png";

import { LoginSchema } from "../../constants/yupSchema";
import { loginErrorNotify } from "../../constants/toastifyNotify";

function LoginComp() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  async function login(email, password) {
    setLoading(true);

    await axios
      .post("https://bootcamp.akbolat.net/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        setLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        loginErrorNotify();
      })
      .finally(setLoading(false));
  }

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
        <Formik
          initialValues={{
            identifier: "",
            password: "",
          }}
          onSubmit={(auth) => {
            login(auth.identifier, auth.password);
          }}
          validationSchema={LoginSchema}
          validateOnChange={false}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <form id="loginBlock" onSubmit={handleSubmit}>
              <div>
                <div id="girisYap">Giriş Yap</div>
                <div id="girisAlt">
                  Fırsatlardan yararlanmak için giriş yap!
                </div>
              </div>
              <div className="loginInput">
                <p>Email</p>
                <input
                  className={clsx({ inputError: !!errors.identifier })}
                  type="email"
                  placeholder="Email@example.com"
                  name="identifier"
                  onChange={handleChange}
                  value={values.identifier}
                />
                <div className="loginValidation">
                  <ErrorMessage name="identifier" />
                </div>
              </div>
              <div className="loginInput">
                <p>Şifre</p>
                <input
                  className={clsx({ inputError: !!errors.password })}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <div className="loginValidation">
                  <ErrorMessage name="password" />
                </div>

                <a href="/">Şifremi Unuttum</a>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Yükleniyor" : "Giriş"}
              </button>
              <div id="loginDirectly">
                Hesabın yok mu? <Link to="/signin">Üye Ol</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default LoginComp;
