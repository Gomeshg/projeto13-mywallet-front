import { useState } from "react";
import styled from "styled-components";
import Input from "../generics/Input";
import Button from "../generics/Button";
import { useParams } from "react-router-dom";
import { postData, updateData } from "../../services/APIs";

export default function InsertData() {
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
            label="Valor"
            type="number"
            setValue={setCash}
            status={status}
          />
          <Input
            label="Descrição"
            type="text"
            setValue={setDescription}
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
