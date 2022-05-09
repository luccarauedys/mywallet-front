import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import Empty from "./../../components/Empty";
import Transactions from "./../../components/Transactions";

export default function Home() {
  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();
  if (!token) navigate("/signin");

  const [transactions, setTransactions] = React.useState([]);

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

  return (
    <div>
      <div>
        <h1>Olá, fulano!</h1>
        <FiLogOut />
      </div>

      {transactions.length === 0 ? (
        <Empty />
      ) : (
        <Transactions transactions={transactions} />
      )}

      <div>
        <div
          onClick={() => {
            navigate("/newTransaction/entrada");
          }}
        >
          <FiPlusCircle />
          <p>Nova entrada</p>
        </div>
        <div
          onClick={() => {
            navigate("/newTransaction/saída");
          }}
        >
          <FiMinusCircle />
          <p>Nova saída</p>
        </div>
      </div>
    </div>
  );
}
