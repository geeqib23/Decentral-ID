export default function Login() {
	return (
		<div className='flex w-full h-full justify-center items-center'>
			<div className='w-1/4 h-3/5 bg-gray-200 drop-shadow-md rounded-lg flex flex-col items-center p-5'>
				<p className='font-bold text-2xl'>Login</p>
				<div className='w-full h-full flex justify-center items-center'>
					<div className='font-semibold p-3 bg-gray-400 rounded-md text-white border-2 border-zinc-400 drop-shadow-lg hover:drop-shadow-xl hover:scale-105 transition-all cursor-pointer'>
						{'Login with <project-name>'}
					</div>
				</div>
			</div>
		</div>
	)
}
