import styled from "styled-components";

export const Container = styled.div`
  .container {
    min-width: 100vw;
    height: 100vh;
    background: #444242;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .box {
    min-width: 50vw;
    min-height: 50vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 0.5px;
    background-color: #e2e2e2;
    gap: 3em;
  }

  .text-login {
    margin-bottom: 70px;
  }
`;
