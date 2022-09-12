import styled from "styled-components";

export default function Input({ initialValue, label, type, setValue, status }) {
  // LOGIC

  // UI

  if (type === "number") {
    return (
      <Wrapper
        value={initialValue}
        placeholder={label}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        disabled={status}
        status={status}
        min="0"
        required
      ></Wrapper>
    );
  } else {
    return (
      <Wrapper
        value={initialValue}
        placeholder={label}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        disabled={status}
        status={status}
        required
      ></Wrapper>
    );
  }
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
