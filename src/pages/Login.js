import LadyInBlue from "../components/Common/LadyInBlue";
import LoginComp from "../components/Common/LoginComp";

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
