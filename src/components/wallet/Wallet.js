import styled from "styled-components";
// import Button from "../generics/Button";

export default function Wallet({ data }) {
  return (
    <Wrapper isEmpty={data.length === 0 ? true : false}>
      {data.length === 0 ? (
        <TextDataEmpty>Não há registros de entrada ou saída</TextDataEmpty>
      ) : (
        <p>Bunda</p>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 446px;
  width: 326px;

  background-color: white;
  border-radius: 5px;

  display: ${(props) => (props.isEmpty ? "Flex" : "Block")};
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextDataEmpty = styled.div`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 20px;
  color: rgba(134, 134, 134, 1);
`;
