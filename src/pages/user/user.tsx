import { useContext } from "react";
import { ContainerUser } from "./style";
import api from "../../services/client";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";
import { GitHubIcon } from "../../components/gitHubIcon";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonComp } from "../../components/Button";
import MyContext from "../../context/myContext";
export const User = () => {
  const [option, setOption]: any = useState(null);
  const [clickRepo, setClickRepo] = useState(false);
  const [clickStarred, setClickStarred] = useState(false);
  const [repos, setRepos]: any = useState([]);
  const [starred, setStarred]: any = useState([]);
  const handleValue = (e: any) => {
    setOption(e.target.value);
  };

  const getUserRepos = async () => {
    try {
      const responseRepos = await api.get(`/${option}/repos`);
      console.log(responseRepos.data);
      setClickStarred(true);
      setClickRepo(false);
      setRepos(responseRepos.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getUserStarred = async () => {
    const responseStarred = await api.get(`/${option}/starred`);
    console.log(responseStarred.data);
    setClickStarred(false);
    setClickRepo(true);
    setStarred(responseStarred.data);
  };
  const [userLogin]: any = useContext(MyContext);
  return (
    <>
      <ContainerUser>
        <h1 className="user">
          Olá, você está logado como {userLogin} <GitHubIcon />{" "}
        </h1>
        <form className="form-content">
          <div className="container-user">
            <div className="content-user">
              <Col sm="5">
                <FormControl
                  className="mb-3"
                  type="text"
                  placeholder="Digite o nome de Usuário"
                  onChange={handleValue}
                ></FormControl>{" "}
              </Col>
              <div className="d-grid gap-4">
                <ButtonComp
                  size="lg"
                  className="buttons"
                  onclick={getUserRepos}
                >
                  Repositórios
                </ButtonComp>
                <ButtonComp
                  size="lg"
                  className="buttons"
                  onclick={getUserStarred}
                >
                  Starred
                </ButtonComp>
              </div>
            </div>
          </div>
        </form>
        {!clickRepo &&
          repos.map((repo: any) => (
            <div className="userMap" key={repo.id}>
              <a className="link" href={repo.html_url}>
                {repo.html_url}
              </a>
            </div>
          ))}

        {!clickStarred &&
          starred.map((starred: any) => (
            <div className="userMap" key={starred.id}>
              <p>
                nome do repositório:
                <a href={starred.html_url}>{starred.name}</a>{" "}
              </p>
              <p>visitas: {starred.watchers}</p>
            </div>
          ))}
      </ContainerUser>
    </>
  );
};
