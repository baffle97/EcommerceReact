import React from "react";
import "./styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verify } from "../../services/helper";
import { Loader } from "../loader/loader";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const setValues = (value, event) => {
    if (value === "username") {
      setUserName(event?.target?.value);
    } else if (value === "password") {
      setPassword(event.target.value);
    }
  };

  let login = () => {
    let payload = {
      username: userName,
      password: password,
    };
    setIsLoading(true);
    verify(payload?.username, payload?.password).then((isValid) => {
      setIsLoading(false);
      if (isValid) {
        localStorage.setItem("loggedIn", true);
        navigate("/home", {
          state: { username: payload.username },
          replace: true,
        });
      } else {
        console.log("Username and password are invalid.");
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="login-card">
            <div className="input-container">
              <span>Username</span>
              <input
                value={userName}
                type="text"
                id="username"
                onChange={(event) => setValues("username", event)}
              />
            </div>
            <div className="input-container">
              <span>Password</span>
              <input
                type="password"
                value={password}
                id="password"
                onChange={(event) => setValues("password", event)}
              />
            </div>
            <button onClick={() => login()}>Login</button>
          </div>
        </div>
      )}
    </>
  );
};
