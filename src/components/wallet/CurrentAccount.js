import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useSession } from "../../services/session";
import { getData } from "../../services/APIs";

import Wallet from "./Wallet";
import Button from "../generics/Button";

export default function CurrentAccount() {
  // LOGIC
  const { session } = useSession();
  const navigate = useNavigate();

  const data = [
    {
      userID: "631c6ce48f4b3db40f0e1d6b",
      type: "output",
      value: 220,
      description: "Jaw",
      date: "10/09",
    },
    {
      userID: "631c6ce48f4b3db40f0e1d6b",
      type: "output",
      value: 80,
      description: "Academia",
      date: "10/09",
    },
    {
      userID: "631c6ce48f4b3db40f0e1d6b",
      type: "output",
      value: 230,
      description: "Minoxidil",
      date: "10/09",
    },
    {
      userID: "631c6ce48f4b3db40f0e1d6b",
      type: "input",
      value: 500,
      description: "Salário Novação",
      date: "10/09",
    },
  ];

  // UI
  return (
    <Wrapper>
      <Content>
        <h2>Olá, {session.name} !</h2>
        <Wallet data={data} />
        <ButtonBox>
          <Link to="/insert-data/input">
            <Button text="Nova Entrada" typeButton="square" />
          </Link>
          <Link to="/insert-data/output">
            <Button text="Nova Saída" typeButton="square" />
          </Link>
        </ButtonBox>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: min-content;
  background-color: rgb(140, 17, 190);

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Content = styled.div`
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
