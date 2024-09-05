import React from "react";
import { FacebookProvider } from "react-facebook";
import { useNavigate } from "react-router-dom";

function FacebookLoginButton() {
  const appId = "869454131741970";

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
      <FacebookProvider
        appId={appId}
        autoLoad={true}
        fields="name,email,picture"
        callback={responseMessage}
        onError={errorMessage}
      />
    <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default FacebookLoginButton;
