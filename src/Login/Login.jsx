import React from "react";
import "./Login.css";
import { initiateGoogleLogin } from "../DataStore/auth";
import { useStateValue } from "../Context/StateProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const handleLogin = () => {
    initiateGoogleLogin((userInfo, token) => {
      dispatch({
        type: "LOGIN",
        user: userInfo,
        token: token,
      });
      history.push("/home");
    });
  };
  return (
    <div class="wrapper">
      <div class="logo">
        <img
          src="https://w1.pngwing.com/pngs/138/556/png-transparent-swachh-bharat-logo-swachh-bharat-mission-government-of-india-logo-quiz-2017-cleaning-cleanliness-sanitation-android-thumbnail.png"
          alt=""
        />
      </div>
      <div class="text-center mt-4 name">Garbage Control</div>
      <div class="p-3 mt-3">
        <p
          style={{
            fontStyle: "italic",
            color: "gray",
            margin: "-3px",
          }}
        >
          " Hello Welcome to Garbage Control System, We are a team that attempts
          to make cleanliness process modular and seamless, So that people can
          life a healthy and pollution free life "
        </p>
        <button class="btn mt-3" onClick={handleLogin}>
          Google SignIn
        </button>
      </div>
    </div>
  );
}

export default Login;
