import { useState } from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'

export default function Home() {
	const [driving, setDriving] = useState(false)
	const [access, setAccess] = useState(false)
	const [reuqest, setRequest] = useState(false)
	const [status, setStatus] = useState(false)

	return (
		<div className='flex justify-center pt-5 space-x-5'>
			<div className='w-80 border flex flex-col items-center rounded-lg border-gray-400'>
				<div className='bg-cyan-500 w-full p-5 text-white font-bold'>
					User menu
				</div>
				<div className='w-full p-5 flex flex-col items-center transition-all'>
					<a
						onMouseEnter={() => setDriving(true)}
						onMouseLeave={() => setDriving(false)}
						href='/add/card'
						className='flex items-center justify-between w-[90%] bg-gray-200 p-3 rounded-t-lg drop-shadow border border-gray-500'
					>
						Add Driving Card {driving ? <AiOutlineDoubleRight /> : <></>}
					</a>
					<a
						onMouseEnter={() => setAccess(true)}
						onMouseLeave={() => setAccess(false)}
						href='/add/card'
						className='flex items-center justify-between relative top-[-1px] w-[90%] bg-gray-200 p-3 rounded-b-lg drop-shadow border border-gray-500'
					>
						View and Approve Access {access ? <AiOutlineDoubleRight /> : <></>}
					</a>
				</div>
			</div>
			<div className='w-80 border flex flex-col items-center rounded-lg border-gray-400'>
				<div className='bg-cyan-500 w-full p-5 text-white font-bold'>
					Institute Menu
				</div>
				<div className='w-full p-5 flex flex-col items-center'>
					<a
						onMouseEnter={() => setRequest(true)}
						onMouseLeave={() => setRequest(false)}
						href='/add/card'
						className='flex items-center justify-between w-[90%] bg-gray-200 p-3 rounded-t-lg drop-shadow border border-gray-500'
					>
						Request Access {reuqest ? <AiOutlineDoubleRight /> : <></>}
					</a>
					<a
						onMouseEnter={() => setStatus(true)}
						onMouseLeave={() => setStatus(false)}
						href='/add/card'
						className='flex items-center justify-between relative top-[-1px] w-[90%] bg-gray-200 p-3 rounded-b-lg drop-shadow border border-gray-500'
					>
						View Access Status {status ? <AiOutlineDoubleRight /> : <></>}
					</a>
				</div>
			</div>
		</div>
	)
}
