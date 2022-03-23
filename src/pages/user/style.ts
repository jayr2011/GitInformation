import styled from "styled-components";

export const ContainerUser = styled.div`
  .form-content {
    min-width: 100vw;
    min-height: 100vh;
    background: #6c7a89;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .container-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    height: 500px;
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
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items:center
    height: 2vh;
    width: 95vw;
    border-radius: 10px;
    background: #1c1f23;
    color: #fff;
  }
  .user h2 {
    padding: 5px;
    margin-top:5px
  }
  .div-content{
    max-width: 90%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
  } 
  .userMap {
      min-width: 300px;
      padding: 1em;
      border: 1px solid #7a7a7a;
      border-radius: 5px;
      width: 20%;
      margin: 1px;
      background-color: #cfcece;
      margin-bottom: 5px;
      margin: 6px;
      text-overflow: ellipsis;
      overflow: hidden;
      gap: 3;
     
  }
  .userMap a {
    text-decoration: none;
    color: black;
    
  }
  .no-starred{
    color: #d10000;
    font-size: 3em;
   
    
    
  }

`;
export const NoUserStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6c7a89;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #d10000;
  text-align: center;

  .initial-page-button {
    background-color: #222;
    color: #fff;
    text-decoration: none;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    padding: 15px;
  }
`;
