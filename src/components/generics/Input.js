import styled from "styled-components";

export default function Input({ label, type, setValue, status }) {
  // LOGIC

  // UI
  return (
    <Wrapper
      placeholder={label}
      type={type}
      onChange={(e) => setValue(e.target.value)}
      disabled={status}
      status={status}
      required
    ></Wrapper>
  );
}

const Wrapper = styled.input`
  height: 58px;
  width: 326px;
  background-color: ${(props) =>
    props.status ? "rgb(200, 200, 200)" : "white"};
  color: ${(props) => (props.status ? "rgb(40, 40, 40)" : "black")};

  font-family: "Raleway";
  font-size: 23.5px;

  border-radius: 5px;
  padding-left: 15px;

  ::placeholder {
    color: black;
  }
`;
