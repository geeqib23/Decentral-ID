import "./App.css";
import Nav from "./components/nav";
import Login from "./pages/login";
import Home from "./pages/home";
import AddDocument from './pages/addDocument'
import Verifier from './pages/verifier'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TransactionsProvider } from './context/TransactionContext'
import React from "react";


const App = () => {
  return (
		<BrowserRouter>
			<TransactionsProvider>
				<Nav />
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/addDocument' element={<AddDocument />} />
					<Route path='/verifier' element={<Verifier />} />
					<Route path='/' exact element={<Login />} />
				</Routes>
			</TransactionsProvider>
		</BrowserRouter>
	)
}

export default App
