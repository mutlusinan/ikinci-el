import LadyInBlue from "../components/LadyInBlue";
import LoginComp from "../components/LoginComp";

function Login() {
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
