import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";

import "./loginScreen.scss";

const LoginScreen = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [navigate, accessToken]);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="loginScreen">
      <div className="login">
        <img
          src="https://seeklogo.com/images/Y/youtube-logo-FF3BEE4378-seeklogo.com.png"
          alt="yt-logo"
          className="login__logo"
        />
        <h2 className="mb-4">NOT YOUTUBE REALLY!</h2>

        <button onClick={handleLogin}>Login With Google</button>
        <p className="pt-4">YOUTUBE CLONE WITH YOUTUBE API-s </p>
      </div>
    </div>
  );
};

export default LoginScreen;
