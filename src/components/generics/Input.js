import styled from "styled-components";

export default function Input({ label }) {
  // LOGIC

  // UI
  return <Wrapper placeholder={label}></Wrapper>;
}

const Wrapper = styled.input`
  height: 58px;
  width: 326px;
  background-color: white;

  font-family: "Raleway";
  font-size: 23.5px;
  color: black;

  border-radius: 5px;
  padding-left: 15px;

  ::placeholder {
    color: black;
  }
`;
