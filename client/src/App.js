import './App.css'
import Nav from './components/nav'
import Login from './pages/login'
import Home from './pages/home'
import AddDocument from './pages/addDocument'
import Verifier from './pages/verifier'
import Access from './pages/access';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TransactionsProvider } from './context/TransactionContext'
import React from "react";
import ReqDetails from './pages/ReqDetails'


const App = () => {
	return (
		<BrowserRouter>
			<TransactionsProvider>
				<Routes>
					<Route path='/home' exact element={<Home />} />
					<Route path='/home/addDocument' exact element={<AddDocument />} />
					<Route path='/admin' element={<Verifier />} />
					<Route path='/admin/:index' exact element={<ReqDetails />} />
					<Route path='/access' exact element={<Access />} />
					<Route path='/' exact element={<Login />} />
				</Routes>
			</TransactionsProvider>
		</BrowserRouter>
	)
}

export default App
