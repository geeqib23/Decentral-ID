export default function Nav() {
	return (
			<div className='w-full p-10 flex justify-between'>
				<h1 className='text-3xl font-bold'>Project Name</h1>
				<div className='flex space-x-5'>
					<a
						href='/addDocument'
						className='p-3 bg-blue-300 hover:bg-blue-500 rounded-md'
					>
						Add Verification Request
					</a>
					<a
						href='/home'
						className='p-3 bg-blue-300 hover:bg-blue-500 rounded-md'
					>
						My Requests Status
					</a>
				</div>
			</div>
	)
}
