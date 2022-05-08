import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import clsx from "clsx";

import "react-toastify/dist/ReactToastify.css";
import logo from "../../img/loginLogo.png";

import { SigninSchema } from "../../constants/yupSchema";
import { signinErrorNotify } from "../../constants/toastifyNotify";

function SigninComp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function signin(email, password) {
    setLoading(true);
    console.log(email);
    console.log(password);
    console.log(email.split("@")[0]);
    await axios
      .post("https://bootcamp.akbolat.net/auth/local/register", {
        email: email,
        password: password,
        username: email.split("@")[0],
      })
      .then((response) => {
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => {
        signinErrorNotify();
        console.log(error);
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
        transition={Slide}
      />
      <div id="loginRight">
        <img src={logo} alt="logo" id="loginLogo" />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(auth) => {
            signin(auth.email, auth.password);
          }}
          validationSchema={SigninSchema}
          validateOnChange={false}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <form id="loginBlock" onSubmit={handleSubmit}>
              <div>
                <div id="girisYap">Üye Ol</div>
                <div id="girisAlt">Fırsatlardan yararlanmak için üye ol!</div>
              </div>
              <div className="loginInput">
                <p>Email</p>
                <input
                  className={clsx({ inputError: !!errors.email })}
                  type="email"
                  placeholder="Email@example.com"
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                />
                <div className="loginValidation">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className="loginInput">
                <p>Şifre</p>
                <input
                  className={clsx({ inputError: !!errors.password })}
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                />
                <div className="loginValidation">
                  <ErrorMessage name="password" />
                </div>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Yükleniyor" : "Üye Ol"}
              </button>
              <div id="loginDirectly">
                Hesabın var mı? <Link to="/login">Giriş Yap</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default SigninComp;
