// import styled from "styled-components";
import React, { useState } from "react";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import CurrentAccount from "./wallet/CurrentAccount";
import InsertData from "./insertData/InsertData";

export default function App() {
  // LOGIC
  const [insertType, setInsertType] = useState(null);
  // UI
  return (
    <>
      <GlobalStyle />
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <CurrentAccount /> */}
      <InsertData insertType={insertType} />
    </>
  );
}
