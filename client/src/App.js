import './App.css'
import Nav from './components/nav'

// Importing Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import AddCard from './pages/addCard'
import 'atropos/css'
import AddData from './pages/addData'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/addCard',
		element: <AddCard />
	},
	{
		path: '/addData',
		element: <AddData />
	}
])


function App() {
	return (
		<div className='w-full h-full bg-gray-100'>
			<Nav />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
