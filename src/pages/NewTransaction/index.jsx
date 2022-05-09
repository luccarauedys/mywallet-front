import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function NewTransaction() {
  const token = localStorage.getItem("token") || null;
  const { type } = useParams();
  const navigate = useNavigate();

  const [transactionValue, setTransactionValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      type,
      value: transactionValue,
      description,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://172.17.0.1:5000/transactions", body, config)
      .then((res) => {
        console.log(res);
        navigate("/transactions");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Nova {type}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Valor"
          value={transactionValue}
          onChange={(e) => setTransactionValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Salvar {type}</button>
      </form>
    </div>
  );
}
