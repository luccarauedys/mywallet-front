import React from "react";
import axios from "axios";
import { FiLogOut, FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [transactions, setTransactions] = React.useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  React.useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("http://172.17.0.1:5000/transactions", config)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  console.log(transactions);

  if (!token) return navigate("/signin");

  return (
    <div>
      <div>
        <h1>Olá, fulano!</h1>
        <FiLogOut />
      </div>

      {transactions.length === 0 ? (
        <div>
          <p>Não há registros de entrada ou saída.</p>
        </div>
      ) : (
        transactions.map((transaction) => {
          return (
            <div key={transaction._id}>
              <span>{transaction.time}</span>
              <span>{transaction.description}</span>
              <span className={transaction.type}>{transaction.value}</span>
            </div>
          );
        })
      )}

      <div>
        <div
          onClick={() => {
            navigate("/newTransaction");
          }}
        >
          <FiPlusCircle />
          <p>Nova entrada</p>
        </div>
        <div
          onClick={() => {
            navigate("/newTransaction");
          }}
        >
          <FiMinusCircle />
          <p>Nova saída</p>
        </div>
      </div>
    </div>
  );
}
