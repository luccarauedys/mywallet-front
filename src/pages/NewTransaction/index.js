import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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
    <Container>
      <Title>Nova {type}</Title>
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
  }
`;
