import { useState } from "react";

import LadyInBlue from "../components/LadyInBlue";
import LoginComp from "../components/LoginComp";

function Login() {


  const [user, setUser] = useState({ identifier: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };

  return (
    <>
      <div className="bodyLike">
        <LadyInBlue />
        <LoginComp Login={Login} />
      </div>
    </>
  );
}

export default Login;
