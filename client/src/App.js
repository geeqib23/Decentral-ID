import './App.css'
import Nav from './components/nav'

// Importing Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<div className='flex h-full w-full justify-center items-center'>
				Home page
			</div>
		),
	},
	{
		path: '/login',
		element: <Login />,
	},
])


function App() {
	return (
		<div className='w-full h-full bg-zinc-800'>
			<Nav />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
