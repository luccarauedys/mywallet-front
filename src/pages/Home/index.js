import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import Empty from "./../../components/Empty";
import Transactions from "./../../components/Transactions";
import styled from "styled-components";

export default function Home() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || null;
  const token = localStorage.getItem("token") || null;
  if (!token) navigate("/signin");

  const [transactions, setTransactions] = React.useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

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
    <Container>
      <Header>
        <h1>Olá, {username}!</h1>
        <FiLogOut onClick={handleLogout} />
      </Header>

      <Content>
        {transactions.length === 0 ? (
          <Empty />
        ) : (
          <Transactions transactions={transactions} />
        )}
      </Content>

      <Footer>
        <div
          onClick={() => {
            navigate("/newTransaction/entrada");
          }}
        >
          <FiPlusCircle />
          <p>
            Nova <br /> entrada
          </p>
        </div>
        <div
          onClick={() => {
            navigate("/newTransaction/saída");
          }}
        >
          <FiMinusCircle />
          <p>
            Nova <br /> saída
          </p>
        </div>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 28px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
  }
  svg {
    font-size: 28px;
  }
`;

const Content = styled.div`
  min-height: 450px;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #ffffff;
  color: #111111;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  div {
    height: 100px;
    background-color: #a328d6;
    border-radius: 0.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.5rem;
    cursor: pointer;

    p {
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      line-height: 1.2;
    }
    svg {
      font-size: 20px;
    }
  }
`;
