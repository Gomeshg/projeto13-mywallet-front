import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { postSignIn } from "../../services/APIs";
import { useSession } from "../../services/session";

import Input from "../generics/Input";
import Button from "../generics/Button";

export default function Login() {
  const navigate = useNavigate();
  const { setSession } = useSession();
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    setStatus(true);
    postSignIn(body)
      .then((req) => {
        const session = {
          name: req.data.name,
          token: req.data.token,
          userID: req.data.userID,
        };

        setSession(session);
        localStorage.setItem("session", JSON.stringify(session));

        setStatus(false);
        navigate("/current-account");
      })
      .catch((e) => {
        if (e.response.status === 404) {
          alert("Email inválido! Tente novamente...");
        } else if (e.response.status === 403) {
          alert("Senha incorreta! Tente novamente...");
        } else if (e.response.status === 422) {
          alert("Login inválido! Tente novamente...");
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

        <form onSubmit={signIn}>
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
          <Button
            submit="submit"
            text="Entrar"
            typeButton="rectangle"
            status={status}
          />
        </form>
        <Link to="/">Primeira vez? Cadastre-se!</Link>
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
