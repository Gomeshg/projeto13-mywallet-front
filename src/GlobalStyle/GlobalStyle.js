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
`;

export { GlobalStyle };
