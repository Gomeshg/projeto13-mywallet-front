import styled from "styled-components";
import Input from "../generics/Input";
import Button from "../generics/Button";

export default function Login() {
  return (
    <Wrapper>
      <Content>
        <h1>MyWallet</h1>
        <Input label="E-mail" />
        <Input label="Senha" />
        <Button text="Entrar" type="rectangle" />
        <Link>Primeira vez? Cadastre-se!</Link>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: rgb(140, 17, 190);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Link = styled.a`
  font-family: "Raleway";
  font-weight: 700;
  font-size: 15px;
  color: white;
  cursor: pointer;
`;
