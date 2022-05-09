import React from "react";
import styled from "styled-components";

const Transactions = ({ transactions }) => {
  const values = transactions.map((transaction) => {
    return transaction.type === "entrada"
      ? transaction.value
      : `-${transaction.value}`;
  });

  const balance = values.reduce((acc, cur) => acc + parseFloat(cur), 0);

  return (
    <>
      <Container>
        {transactions.map(({ _id, time, description, type, value }) => {
          return (
            <Item key={_id} type={type}>
              <div className="leftside">
                <span className="date">{time}</span>
                <span className="description">{description}</span>
              </div>
              <div className="rightside">
                <span className={type}>R$ {value}</span>
              </div>
            </Item>
          );
        })}
      </Container>

      <Balance balance={balance.toFixed(2)}>
        <p className="title">SALDO</p>
        <p className="balance">R$ {balance.toFixed(2)}</p>
      </Balance>
    </>
  );
};

export default Transactions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`;

const Item = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    line-height: 1.2;
    display: flex;
    gap: 0.8rem;
  }
  .leftside {
    flex: 3;
  }
  .rightside {
    flex: 1;
  }

  .date {
    color: #c6c6c6;
  }
  .description {
    color: #111111;
  }
  .entrada {
    color: green;
  }
  .saída {
    color: red;
  }
`;

const Balance = styled.div`
  justify-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 500;
  }
  .title {
    font-weight: 700;
    color: #111111;
  }
  .balance {
    color: ${(props) => (props.balance > 0 ? "green" : "red")};
  }
`;
