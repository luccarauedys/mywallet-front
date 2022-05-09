import React from "react";

const Transactions = ({ transactions }) => {
  const values = transactions.map((transaction) => {
    return transaction.type === "entrada"
      ? transaction.value
      : `-${transaction.value}`;
  });

  const balance = values.reduce((acc, cur) => acc + parseFloat(cur), 0);

  return (
    <div>
      <div>
        {transactions.map(({ _id, time, description, type, value }) => {
          return (
            <div key={_id}>
              <span>{time}</span>
              <span>{description}</span>
              <span className={type}>{value}</span>
            </div>
          );
        })}
      </div>

      <div>
        <p>SALDO</p>
        <p>R$ {balance}</p>
      </div>
    </div>
  );
};

export default Transactions;
