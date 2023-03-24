export default function Nav() {
	return (
		<div className='w-full h-14 bg-zinc-900 flex justify-between p-5 items-center text-white'>
			<h1 className='font-extrabold'>Project Name</h1>
			<div className='flex space-x-3'>
				<div className='bg-slate-700 p-1 px-5 rounded-md drop-shadow-md hover:drop-shadow-lg text-sm border-transparent border-2 hover:border-slate-600'>
					<a href='/login'>Home</a>
				</div>
				<div className='bg-slate-700 p-1 px-5 rounded-md drop-shadow-md hover:drop-shadow-lg text-sm border-transparent border-2 hover:border-slate-600'>
					<a href='/login'>Login</a>
				</div>
				<div className='bg-slate-700 p-1 px-5 rounded-md drop-shadow-md hover:drop-shadow-lg text-sm border-transparent border-2 hover:border-slate-600'>
					<a href='/login'>Feature</a>
				</div>
			</div>
		</div>
	)
}
