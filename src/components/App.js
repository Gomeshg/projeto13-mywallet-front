import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import React, { useState } from "react";

import Login from "./user/Login";
import SignUp from "./user/SignUp";
import CurrentAccount from "./wallet/CurrentAccount";
import InsertData from "./insertData/InsertData";

export default function App() {
  // LOGIC
  // UI
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/current-account" element={<CurrentAccount />} />
          <Route
            path="/insert-data/:typeRoute/:typeData"
            element={<InsertData />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
