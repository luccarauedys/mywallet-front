import React from "react";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmation) {
      alert("As senhas não coincidem! Por favor, digite novamente.");
      return;
    }
    axios
      .post("localhost:5000/signup", { name, email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>MyWallet</h1>

      <form onSubmit={handleSubmit}>
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
      </form>

      <a href="/signin">Já possui uma conta? Faça login!</a>
    </div>
  );
}
