import styled from "styled-components";
import Icon from "./iconSquareButton";
import add from "../../img/add.png";
import sub from "../../img/sub.png";

export default function Button({ text, type }) {
  if (type === "rectangle") {
    return (
      <RectangleButton>
        <Text type={type}>{text}</Text>
      </RectangleButton>
    );
  } else if (type === "square") {
    return (
      <SquareButton>
        {text === "Nova Entrada" ? (
          <Icon insideIcon={add} type="add" />
        ) : (
          <Icon insideIcon={sub} type="sub" />
        )}
        <Text type={type}>{text}</Text>
      </SquareButton>
    );
  }
}

const Text = styled.p`
  font-family: "Raleway", "Helvetica", sans-serif;
  font-size: ${(props) => (props.type === "rectangle" ? "20px" : "17px")};
  font-weight: 700;
  color: white;

  width: ${(props) => {
    if (props.type === "square") {
      return "60px";
    }
  }};
`;

const RectangleButton = styled.div`
  height: 46px;
  width: 326px;

  background-color: rgba(163, 40, 214, 1);
  border-radius: 5px;

  font-size: 20px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SquareButton = styled.div`
  height: 114px;
  width: 155px;
  padding: 10px;

  background-color: rgba(163, 40, 214, 1);
  border-radius: 5px;

  font-family: "Raleway";
  font-weight: 700;
  font-size: 20px;
  color: white;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
