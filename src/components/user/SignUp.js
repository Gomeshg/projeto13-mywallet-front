import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postSignUp } from "../../services/APIs";
import Input from "../generics/Input";
import Button from "../generics/Button";
// teste

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [status, setStatus] = useState(false);
  function signUp(e) {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("As senhas precisam ser iguais!");
      return;
    }

    const body = {
      name: name,
      email: email,
      password: password,
    };

    setStatus(true);
    postSignUp(body)
      .then(() => {
        setStatus(false);
        navigate("/sign-in");
      })
      .catch((e) => {
        if (e.response.status === 422) {
          alert("Cadastro inválido! Tente novamente...");
        } else if (e.response.status === 409) {
          alert("Este usuário já existe! Tente novamente...");
        } else if (e.response.status === 500) {
          alert("Erro ao acessar o servidor!");
        }
        setStatus(false);
      });
  }

  return (
    <Wrapper>
      <Content>
        <h1>MyWallet</h1>
        <form onSubmit={signUp}>
          <Input
            label="Nome"
            type="text"
            value={name}
            setValue={setName}
            status={status}
          />
          <Input
            label="E-mail"
            type="email"
            value={email}
            setValue={setEmail}
            status={status}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            setValue={setPassword}
            status={status}
          />
          <Input
            label="Confirmar a senha"
            type="password"
            value={repeatPassword}
            setValue={setRepeatPassword}
            status={status}
          />
          <Button
            submit="submit"
            text="Cadastrar"
            typeButton="rectangle"
            status={status}
          />
        </form>
        <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
