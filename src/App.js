import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NewTransaction from "./pages/NewTransaction";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/transactions" element={<Home />} />
        <Route path="/newtransaction/:type" element={<NewTransaction />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
