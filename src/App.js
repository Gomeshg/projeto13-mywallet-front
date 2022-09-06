import styled from "styled-components";
import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyles/GlobalStyle";
import Login from "./components/user/login";

export default function App() {
  console.log("renderizou");
  // LOGIC

  // UI
  return (
    <>
      <GlobalStyle />
      <h1>Testando</h1>
      <Login />
    </>
  );
}

const Btn = styled.button`
  height: 50px;
  width: 50px;
  background-color: blue;
`;
