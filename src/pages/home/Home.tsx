import React, { createContext, useState, useContext } from "react";
import { Container } from "./style";
import { ButtonComp } from "../../components/Button";
import { GitHubIcon } from "../../components/gitHubIcon";
import { useNavigate } from "react-router-dom";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { authenticationService } from "../../firebase.config";
import MyContext from "../../context/myContext";
export const Home = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin]: any = useContext(MyContext);
  const handleLogin = async () => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(authenticationService, provider).then((error) => {
      setUserLogin(error.user.displayName);
    });
    navigate("/user");
  };
  return (
    <Container>
      <div className="container">
        <div className="content">
          <h1 className="text-login">Faça seu Login.</h1>
          <ButtonComp onclick={handleLogin}>
            Login com o GitHub. <GitHubIcon />
          </ButtonComp>
        </div>
        <div></div>
      </div>
    </Container>
  );
};
