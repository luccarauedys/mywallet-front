import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NewTransaction from "./pages/NewTransaction";
import "./App.css";

const App = () => {
  const [token, setToken] = React.useState(null);
  console.log(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn setToken={setToken} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/transactions" element={<Home />} />
        <Route path="/newtransaction/:type" element={<NewTransaction />} />
        <Route path="*" element={<SignIn setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
