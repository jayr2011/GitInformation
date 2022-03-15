import styled from "styled-components";

export const ContainerUser = styled.div`
  .form-content {
    border: #7b7b7b solid 1px;
    padding: 1em 1em 1em 1em;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .container-user {
    width: 539px;
    height: 539px;
    margin-top: 50px;
    background: #e5e5e5;
    border-radius: 10px;
  }
  .content-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .buttons {
    background-color: #222;
    color: #fff;
    padding: 0.7em 1.2em;
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;
    border: none;
    margin-right: 0.5em;
  }
  .user {
    margin-right: 10px;
    margin-top: 10px;
    margin-left: 10px;
    border: solid 2px #3d3b3b;
    border-radius: 10px;
    background: #1c1f23;
    color: #fff;
  }
  .userMap {
    border: solid 2px black;
    border-radius: 10px;
    background: #fff;
    margin-bottom: 7px;
    margin-top: 5px;
    margin-left: 5px;
    max-width: 80%;
    text-align: center;
    background: #1c1f23;
    color: #fff;
  }

  .link {
    text-decoration: none;
  }
`;
