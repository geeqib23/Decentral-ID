export default function Nav() {
	return (
		<div className='w-full h-14 bg-cyan-500 flex justify-between p-5 items-center text-white absolute top-0'>
			<h1 className='font-extrabold'>Project Name</h1>
			<div className='flex space-x-3'>
				<div className='bg-cyan-900 p-1 px-5 rounded-md drop-shadow-md hover:drop-shadow-lg text-sm border-transparent border-2 hover:border-cyan-700'>
					<a href='/home'>Home</a>
				</div>
				<div className='bg-cyan-900  p-1 px-5 rounded-md drop-shadow-md hover:drop-shadow-lg text-sm border-transparent border-2 hover:border-cyan-700'>
					<a href='/'>Login</a>
				</div>
				<div className='bg-cyan-900  p-1 px-5 rounded-md drop-shadow-md hover:drop-shadow-lg text-sm border-transparent border-2 hover:border-cyan-700'>
					<a href='/addDocument'>Feature</a>
				</div>
			</div>
		</div>
	)
}
