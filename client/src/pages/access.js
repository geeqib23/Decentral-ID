import { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { RxCrossCircled } from 'react-icons/rx'

export default function Access() {
	const [query, setQuery] = useState({
		name: 0,
		dob: 0,
		email: 0,
		college: 0,
		mobile: 0,
	})

	return (
		<div className='w-full h-full flex flex-col justify-center items-center'>
			<div className='h-[80%] w-[30%] flex flex-col justify-center items-center bg-gray-100 rounded-md'>
				<h1 className='text-3xl font-bold m-7'>Approval request</h1>
				<h3 className='text-2xl font-semibold m-3'>Request from: {'Amazon'}</h3>

				<div className='flex flex-col justify-start w-60 my-10 space-y-5'>
					<h1 className='underline'>Request For</h1>
					{<h3>Name: {'Some Name'}</h3>}
					{ <h3>Email: {'Some Name'}</h3>}
					{<h3>Date of Birth: {'Some Name'}</h3>}
					{<h3>College: {'Some Name'}</h3>}
					{<h3>Mobile: {'Some Name'}</h3>}
				</div>

				<div className='flex space-x-5'>
					<button className='p-2 bg-red-300 rounded flex items-center'>
						<RxCrossCircled className='mr-2' />
						Reject
					</button>
					<button className='p-2 bg-lime-300 rounded flex items-center'>
						<TiTick className='mr-2' /> Approve
					</button>
				</div>
			</div>
		</div>
	)
}
