import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./style";
import { ButtonComp } from "../../components/Button";
import { GitHubIcon } from "../../components/gitHubIcon";
import { useNavigate } from "react-router-dom";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { authenticationService } from "../../firebase.config";
import MyContext from "../../context/myContext";
import AvatarContext from "../../context/avatarContext";
export const Home = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin]: any = useContext(MyContext);
  const [avatar, setAvatar]: any = useContext(AvatarContext);

  const handleLogin = async () => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(authenticationService, provider).then((error) => {
      console.log(error);
      setUserLogin(error.user.email);
      setAvatar(error.user.photoURL);
    });
    navigate("/user");
  };
  return (
    <Container>
      <div className="container">
        <div className="box">
          <h1>Faça Seu Login.</h1>
          <ButtonComp onclick={handleLogin}>
            Login com o GitHub. <GitHubIcon />
          </ButtonComp>
        </div>
      </div>
    </Container>
  );
};
