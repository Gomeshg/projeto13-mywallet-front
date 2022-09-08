import styled from "styled-components";
import Input from "../generics/Input";
import Button from "../generics/Button";

export default function InsertData({ type }) {
  // existem vários tipos de insertData, como diferenciá-los?

  // Inserção de dados do tipo ENTRADA
  return (
    <Wrapper>
      <Content>
        <h2>Nova Entrada</h2>
        <Input label="Valor" />
        <Input label="Descrição" />
        <Button text="Salvar Entrada" type="rectangle" />
      </Content>
    </Wrapper>
  );

  //   return (
  //     <Wrapper>
  //       <Content>
  //         <h2>Nova Saída</h2>
  //         <Input label="Valor" />
  //         <Input label="Descrição" />
  //         <Button text="Salvar Saída" type="rectangle" />
  //       </Content>
  //     </Wrapper>
  //   );

  //   return (
  //     <Wrapper>
  //       <Content>
  //         <h2>Editar Entrada</h2>
  //         <Input label="Valor" />
  //         <Input label="Descrição" />
  //         <Button text="Atualizar Entrada" type="rectangle" />
  //       </Content>
  //     </Wrapper>
  //   );

  //   return (
  //     <Wrapper>
  //       <Content>
  //         <h2>Editar Saída</h2>
  //         <Input label="Valor" />
  //         <Input label="Descrição" />
  //         <Button text="Atualizar Saída" type="rectangle" />
  //       </Content>
  //     </Wrapper>
  //   );
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
  gap: 20px;
`;
