import { useState } from "react";
import styled from "styled-components";
import Input from "../generics/Input";
import Button from "../generics/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { postData, updateData, getOneData, getData } from "../../services/APIs";
import { useSession } from "../../services/session";

export default function InsertData() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [cash, setCash] = useState("");
  const [description, setDescription] = useState("");
  const {
    session,
    updateCash,
    updateDescription,
    setUpdateCash,
    setUpdateDescription,
    updateID,
  } = useSession();

  const { typeRoute, typeData } = useParams();

  console.log(updateCash);
  console.log(updateDescription);

  function post(e) {
    e.preventDefault();
    alert("post");
    const body = {
      value: cash,
      description: description,
      type: typeData,
    };

    console.log(body);

    // postData(body)
    //   .then(() => {
    //     console.log("");
    //   })
    //   .catch((e) => {
    //     console.log(e.message);
    //   });
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
            initialValue={typeRoute === "post" ? "" : updateCash}
            label="Valor"
            type="number"
            setValue={typeRoute === "post" ? setCash : setUpdateCash}
            status={status}
          />
          <Input
            initialValue={typeRoute === "post" ? "" : updateDescription}
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
