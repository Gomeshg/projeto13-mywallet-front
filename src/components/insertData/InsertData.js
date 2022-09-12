import { useState } from "react";
import styled from "styled-components";
import Input from "../generics/Input";
import Button from "../generics/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { postData, updateData, getOneData, getData } from "../../services/APIs";
import { useSession } from "../../services/session";

export default function InsertData() {
  const {
    session,
    updateCash,
    updateDescription,
    setUpdateCash,
    setUpdateDescription,
    updateID,
  } = useSession();
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [cash, setCash] = useState("");
  const [description, setDescription] = useState("");
  const { typeRoute, typeData } = useParams();

  function post(e) {
    e.preventDefault();
    const body = {
      value: cash,
      description: description,
      type: typeData,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    };

    postData(body, config)
      .then(() => {
        navigate("/current-account");
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  function update(e) {
    e.preventDefault();

    const body = {
      value: updateCash,
      description: updateDescription,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    };

    updateData(updateID, body, config)
      .then(() => {
        navigate("/current-account");
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <Wrapper>
      <Content>
        <h2>
          {typeRoute === "post" ? "Nova" : "Editar"}{" "}
          {typeData === "input" ? "entrada" : "saída"}
        </h2>
        <form onSubmit={typeRoute === "post" ? post : update}>
          <Input
            initialValue={typeRoute === "post" ? cash : updateCash}
            label="Valor"
            type="number"
            setValue={typeRoute === "post" ? setCash : setUpdateCash}
            status={status}
          />
          <Input
            initialValue={
              typeRoute === "post" ? description : updateDescription
            }
            label="Descrição"
            type="text"
            setValue={
              typeRoute === "post" ? setDescription : setUpdateDescription
            }
            status={status}
          />
          <Button
            submit="submit"
            text="Salvar Entrada"
            typeButton="rectangle"
            status={status}
          />
        </form>
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

  padding: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
