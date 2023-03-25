import { useState } from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'

const Home = () => {
	const [driving, setDriving] = useState(false)
	const [access, setAccess] = useState(false)
	const [reuqest, setRequest] = useState(false)
	const [status, setStatus] = useState(false)

	return (
		<div className='flex flex-col w-full h-full'>
			{/* NAVBAR */}
			<div className='w-full p-10 flex justify-between'>
				<h1 className='text-3xl font-bold'>Project Name</h1>
				<div className='flex space-x-5'>
					<button className='p-3 bg-blue-300 hover:bg-blue-500 rounded-md'>
						Add Verification Request
					</button>
					<button className='p-3 bg-blue-300 hover:bg-blue-500 rounded-md'>
						My Requests Status
					</button>
				</div>
			</div>

			{/* MAIN BODY */}
      <div className="w-full h-full"></div>
		</div>
	)
}

export default Home
