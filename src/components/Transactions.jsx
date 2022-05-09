import React from "react";

const Transactions = ({ transactions }) => {
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
        <p>R$ 0</p>
      </div>
    </div>
  );
};

export default Transactions;
