import React from "react";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://172.17.0.1:5000/signin", { email, password })
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
      </form>

      <a href="/signup">Primeira vez? Cadastre-se</a>
    </div>
  );
}
