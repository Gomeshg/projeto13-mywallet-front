import styled from "styled-components";
import WalletData from "./WalletData";
export default function Wallet({ data, setWallet }) {
  if (data.length === 0) {
    return (
      <WrapperEmpty>
        <TextDataEmpty>Não há registros de entrada ou saída</TextDataEmpty>
      </WrapperEmpty>
    );
  }

  let balance = 0;
  data.forEach((item) =>
    item.type === "input" ? (balance += item.value) : (balance -= item.value)
  );

  return (
    <Wrapper>
      <section>
        {data.map((data, index) => (
          <WalletData
            key={index}
            type={data.type}
            value={data.value}
            description={data.description}
            date={data.date}
            id={data._id}
            userID={data.userID}
            setWallet={setWallet}
          />
        ))}
      </section>

      <section>
        {data.length !== 0 ? <WalletData balance={balance} /> : ""}
      </section>
    </Wrapper>
  );
}

const WrapperEmpty = styled.div`
  height: 446px;
  width: 326px;
  padding: 15px 10px;

  background-color: white;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Wrapper = styled.div`
  height: 446px;
  width: 326px;
  padding: 15px 10px;

  background-color: white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;

  overflow: scroll;
`;

const TextDataEmpty = styled.div`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 20px;
  color: rgba(134, 134, 134, 1);
`;
