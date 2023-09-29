import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  nav {
    flex-direction: row;
    .logo {
      flex-direction: row;
    }
  }
  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    width: 100vw;
    height: auto;
    background-color: red;
  }
  footer {
    width: 100vw;
    text-align: center;
    position: absolute;
    bottom: 0;
    padding: 2rem;
    background-color: #221f1f;
    font-family: "Poppins", sans-serif;
    color: white;
    a {
      color: purple;
    }
  }
`;
