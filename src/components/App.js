// import styled from "styled-components";
// import React, { useState } from "react";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import Login from "./user/Login";
import SignUp from "./user/SignUp";

export default function App() {
  // LOGIC

  // UI
  return (
    <>
      <GlobalStyle />
      {/* <Login /> */}
      <SignUp />
    </>
  );
}
