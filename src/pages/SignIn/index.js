import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignIn({ setToken }) {
  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();
  if (token) navigate("/transactions");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://172.17.0.1:5000/signin", { email, password })
      .then((res) => {
        console.log(res);
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Title>MyWallet</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Entrar</button>
      </Form>

      <a href="/signup">Primeira vez? Cadastre-se</a>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  a {
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-weight: normal;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  input {
    width: 100%;
  }
`;
