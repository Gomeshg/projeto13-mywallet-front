// import styled from "styled-components";
// import React, { useState } from "react";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import CurrentAccount from "./wallet/CurrentAccount";

export default function App() {
  // LOGIC

  // UI
  return (
    <>
      <GlobalStyle />
      {/* <Login /> */}
      {/* <SignUp /> */}
      <CurrentAccount />
    </>
  );
}
