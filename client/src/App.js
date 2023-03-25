import './App.css'
import Nav from './components/nav'

// Importing Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import AddCard from './pages/addCard'
import AddData from './pages/addData'
import Status from './pages/status'

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
		element: <AddCard />,
	},
	{
		path: '/addData',
		element: <AddData />,
	},
	{
		path: '/status',
		element: <Status />,
	},
])

function App() {
	return (
		<div className='w-full h-full bg-gray-100 overflow-y-hidden overflow-x-visible'>
			<Nav />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
