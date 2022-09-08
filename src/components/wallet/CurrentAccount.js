import styled from "styled-components";
import Wallet from "./Wallet";
import Button from "../generics/Button";

export default function CurrentAccount() {
  // LOGIC
  const data = [];

  // UI
  return (
    <Wrapper>
      <Content>
        <h2>Olá, fulano!</h2>
        <Wallet data={data} />
        <ButtonBox>
          <Button text="Nova Entrada" type="square" />
          <Button text="Nova Saída" type="square" />
        </ButtonBox>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
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
