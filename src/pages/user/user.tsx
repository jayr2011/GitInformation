import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerUser, NoUserStyle } from "./style";
import { AvatarComponent } from "../../components/Avar";
import api from "../../services/client";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonComp } from "../../components/Button";
import MyContext from "../../context/myContext";
import AvatarContext from "../../context/avatarContext";
import { Loader } from "../../components/loader/Loader";
import { log } from "console";

export const User = () => {
  const handleValue = (e: any) => {
    setOption(e.target.value);
  };
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  const [option, setOption]: any = useState("");
  const [clickRepo, setClickRepo] = useState(false);
  const [clickStarred, setClickStarred] = useState(false);
  const [repos, setRepos]: any = useState([]);
  const [starred, setStarred]: any = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserRepos = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      const responseRepos = await api.get(`/${option}/repos`);

      {
        if (localStorage.getItem(`repos ${option}`)) {
          console.log("achou");
          const localString: any = localStorage.getItem(`repos ${option}`);
          const localObjc = JSON.parse(localString);
          if (localObjc.length != repos.length) {
            localStorage.setItem(`repos ${option}`, JSON.stringify(repos));
          }
        } else {
          await api.get(`/${option}/repos`);
          localStorage.setItem(`repos ${option}`, JSON.stringify(repos));
          console.log("não achou");
        }
      }
      console.log(responseRepos.data);
      setClickStarred(true);
      setClickRepo(false);
      setRepos(responseRepos.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const getUserStarred = async () => {
    setLoading(true);
    const responseStarred = await api.get(`/${option}/starred`);
    localStorage.setItem(`starred ${option}`, JSON.stringify(starred));
    {
      if (localStorage.getItem(`repos ${option}`)) {
        console.log("achou");
        const localString: any = localStorage.getItem(`repos ${option}`);
        const localObjc = JSON.parse(localString);
        if (localObjc.length != repos.length) {
          localStorage.setItem(`repos ${option}`, JSON.stringify(starred));
        }
      }
    }
    console.log(responseStarred.data);
    setClickStarred(false);
    setClickRepo(true);
    setStarred(responseStarred.data);
    setLoading(false);
  };
  const backForInitialPge = () => {
    navigate("/");
  };

  const [userLogin]: any = useContext(MyContext);
  const [avatar]: any = useContext(AvatarContext);

  return (
    <>
      {userLogin != "" && userLogin ? (
        <ContainerUser>
          <form onSubmit={handleFormSubmit} className="form-content">
            <div className="user">
              <h2>Olá, você está logado como {userLogin}</h2>
              <AvatarComponent url={avatar} />
            </div>
            <div className="container-user">
              <div className="content-user">
                <Col sm="5">
                  <FormControl
                    className="mb-3"
                    type="name"
                    placeholder="Digite o nome de Usuário"
                    onChange={handleValue}
                  ></FormControl>{" "}
                </Col>
                <div className="d-grid gap-4">
                  <ButtonComp
                    type="submit"
                    size="lg"
                    className="buttons"
                    onclick={getUserRepos}
                  >
                    Repositórios
                  </ButtonComp>
                  <ButtonComp
                    type="submit"
                    size="lg"
                    className="buttons"
                    onclick={getUserStarred}
                  >
                    {" "}
                    Starred
                  </ButtonComp>
                  {loading === true ? <Loader /> : false}
                </div>
              </div>
            </div>
            <section className="grid-content">
              <div className="div-content">
                {repos.length === 0 && clickStarred && (
                  <div className="no-starred">
                    Usuário não possui repositórios
                  </div>
                )}
                {!clickRepo &&
                  repos.map((repo: any) => (
                    <div className="userMap" key={repo.id}>
                      <p>repositório: {repo.name}</p>
                      <a className="link" href={repo.html_url}>
                        {repo.html_url}
                      </a>
                    </div>
                  ))}

                {!clickStarred &&
                  starred.map((starred: any) => (
                    <div className="userMap" key={starred.id}>
                      <p>visitas: {starred.watchers}</p>
                      <p>
                        nome do repositório:
                        <a href={starred.html_url}>{starred.name}</a>{" "}
                      </p>
                    </div>
                  ))}
                {starred.length === 0 && clickRepo && (
                  <h1 className="no-starred">
                    Usuário pesquisado não tem visusalizações.
                  </h1>
                )}
              </div>
            </section>
          </form>
        </ContainerUser>
      ) : (
        <NoUserStyle>
          <div>
            <h1>Faça loguin com seu GitHub para ter acesso</h1>
            <button onClick={backForInitialPge} className="initial-page-button">
              voltar para a pagina inicial
            </button>
          </div>
        </NoUserStyle>
      )}
    </>
  );
};
