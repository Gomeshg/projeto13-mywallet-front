import styled from "styled-components";

export default function WalletData({
  userID,
  type,
  value,
  description,
  date,
  balance,
}) {
  if (balance) {
    console.log(balance.toString());
  }

  if (!balance) {
    return (
      <Wrapper>
        <section>
          <Date>{date}</Date>
          <Description>{description}</Description>
        </section>
        <Value value={type}>{`${value.toFixed(2).toString()}`}</Value>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <TextBalance>SALDO</TextBalance>
        <Balance balance={balance}>{`${balance
          .toFixed(2)
          .toString()}`}</Balance>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: 30px;
  max-height: min-content;
  font-family: "Raleway", "Helvetica", sans-serif;
  font-size: 16px;
  font-weight: 400;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  section {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }
`;

const Date = styled.p`
  color: rgba(198, 198, 198, 1);
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 1);
  text-align: start;
  word-break: break-word;
`;

const Value = styled.p`
  text-align: right;
  color: ${(props) =>
    props.value === "input" ? "rgba(3, 172, 0, 1)" : "rgba(199, 0, 0, 1)"};
`;

const TextBalance = styled.p`
  font-weight: 700;
  font-size: 17px;
`;
const Balance = styled.p`
  text-align: right;
  color: ${(props) => {
    if (props.balance >= 0) {
      return "rgba(3, 172, 0, 1)";
    } else {
      return "rgba(199, 0, 0, 1)";
    }
  }};
`;
