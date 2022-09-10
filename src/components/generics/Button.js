import styled from "styled-components";

export default function Button({ submit, text, typeButton, status }) {
  {
    /* <ion-icon name="trash-outline"></ion-icon> */
  }

  if (typeButton === "rectangle") {
    return (
      <RectangleButton type={submit} disabled={status} status={status}>
        <Text typeButton={typeButton}>{text}</Text>
      </RectangleButton>
    );
  } else if (typeButton === "square") {
    return (
      <SquareButton>
        {text === "Nova Entrada" ? (
          <ion-icon name="add-circle-outline"></ion-icon>
        ) : (
          <ion-icon name="remove-circle-outline"></ion-icon>
        )}
        <Text typeButton={typeButton}>{text}</Text>
      </SquareButton>
    );
  }
}

const Text = styled.p`
  font-family: "Raleway", "Helvetica", sans-serif;
  font-size: ${(props) => (props.typeButton === "rectangle" ? "20px" : "17px")};
  font-weight: 700;
  color: white;

  text-align: start;
  width: ${(props) => {
    if (props.typeButton === "square") {
      return "50px";
    }
  }};
`;

const RectangleButton = styled.button`
  height: 46px;
  width: 326px;

  background-color: rgba(163, 40, 214, 1);
  border-radius: 5px;

  font-size: 20px;

  cursor: ${(props) => (props.status ? "wait" : "pointer")};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SquareButton = styled.button`
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
