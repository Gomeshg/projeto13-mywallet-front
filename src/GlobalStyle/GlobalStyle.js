import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
  }

  h1{
    font-family: "Saira Stencil One";
    font-size: 32px;
    font-weight: 400;
    color: white;
  }

  h2{
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    color: white;
  }
`;

export { GlobalStyle };
