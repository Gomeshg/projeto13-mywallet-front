import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSession } from "../../services/session";
import { getData } from "../../services/APIs";

import Wallet from "./Wallet";
import Button from "../generics/Button";

export default function CurrentAccount() {
  // LOGIC
  const { session } = useSession();
  const [token, setToken] = useState(null);
  const [wallet, setWallet] = useState(null);
  const navigate = useNavigate();

  let config = {};

  if (session.token) {
    if (token === null) {
      setToken(session.token);
    }
    config = {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    };
  }

  useEffect(() => {
    if (token !== null) {
      getData(config)
        .then((req) => setWallet([...req.data]))
        .catch((e) => console.log(e));
    }
  }, [token]);

  if (token === null) {
    return <Loading>Carregando...</Loading>;
  }

  if (wallet === null) {
    return <Loading>Carregando...</Loading>;
  }

  // UI
  return (
    <Wrapper>
      <Content>
        <h2>Olá, {session.name} !</h2>
        <Wallet data={wallet} setWallet={setWallet} />
        <ButtonBox>
          <Link to="/insert-data/post/input">
            <Button text="Nova Entrada" typeButton="square" />
          </Link>
          <Link to="/insert-data/post/output">
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

const Loading = styled.p`
  font-size: 40px;
  color: black;
  font-weight: 700;
  font-family: "Raleway";
  text-align: center;
  margin-top: 40vh;
`;
