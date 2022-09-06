import styled from "styled-components";

export default function Button({ text }) {
  return <Wrapper>{text}</Wrapper>;
}

const Wrapper = styled.button`
  height: 46px;
  width: 326px;

  background-color: rgba(163, 40, 214, 1);
  border-radius: 5px;

  font-family: "Raleway";
  font-weight: 700;
  font-size: 20px;
  color: white;

  cursor: pointer;
`;
