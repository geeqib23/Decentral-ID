import Atropos from 'atropos'

export default function AddCard() {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center'>
			<h1 className='text-2xl mb-5 font-bold'>Add Card</h1>
				<div className='w-[500px] h-[280px] bg-gray-300 rounded-lg p-5'>
					<h3 className='text-lg'>Card Detail</h3>
					<div className='flex h-[70%]'></div>
					<div className='flex h-10 space-x-3'>
						<input
							type='text'
							className='rounded-lg text-center tracking-[5px]'
							maxLength={4}
						/>
						<input
							type='text'
							className='rounded-lg text-center tracking-[5px]'
							maxLength={4}
						/>
						<input
							type='text'
							className='rounded-lg text-center tracking-[5px]'
							maxLength={4}
						/>
						<input
							type='text'
							className='rounded-lg text-center tracking-[5px]'
							maxLength={4}
						/>
					</div>
				</div>
		</div>
	)
}
