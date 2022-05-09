import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmation) {
      alert("As senhas não coincidem! Por favor, digite novamente.");
      return;
    }
    axios
      .post("http://172.17.0.1:5000/signup", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Title>MyWallet</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />
        <button>Cadastrar</button>
      </Form>

      <a href="/signin">Já possui uma conta? Faça login!</a>
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
