import './App.css'
import Nav from './components/nav'
import Login from './pages/login'
import Home from './pages/home'
import AddDocument from './pages/addDocument'
import Verifier from './pages/verifier'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TransactionsProvider } from './context/TransactionContext'
import React from "react";
import ReqDetails from './pages/ReqDetails'


const App = () => {
	return (
		<BrowserRouter>
			<TransactionsProvider>
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/addDocument' element={<AddDocument />} />
					<Route path='/admin' element={<Verifier />} />
					<Route path='/' exact element={<Login />} />
					<Route path='/reqDetails' element={<ReqDetails />} />
				</Routes>
			</TransactionsProvider>
		</BrowserRouter>
	)
}

export default App
