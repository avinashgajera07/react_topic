import {
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function GoogleLoginButton() {
  const clientId =
    "79059831896-uge6h3hivnnveik0dbmuo1j64ulk38rg.apps.googleusercontent.com";

  const responseMessage = (response) => {
    alert("Google login successfully", response);
  };
  const errorMessage = (error) => {
    alert("Google login failed", error);
  };
  const navigate = useNavigate();

  const googleLogout = () => {
    navigate("/");
  };


  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <div>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </GoogleOAuthProvider>
      </div>
      
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default GoogleLoginButton;
