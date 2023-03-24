import "./App.css";
import Nav from "./components/nav";
import Login from "./pages/login";
import Home from "./pages/home";
import AddCard from "./pages/addCard";
// import "atropos/css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransactionsProvider } from './context/TransactionContext'

import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/admin" element={<AddCard />}/>
          <Route path="/" exact element={<Login />}/>
        </Routes>
      </TransactionsProvider>
    </BrowserRouter>
  )
}

export default App;
