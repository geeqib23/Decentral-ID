export default function AddData() {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center pt-14'>
			<div className='flex flex-col justify-center items-center bg-gray-50 p-4 rounded-lg'>
				<h1 className='text-4xl mb-10'>Add Details</h1>

				<form class='w-full max-w-lg'>
					<div class='flex flex-wrap -mx-3 mb-4'>
						<div class='w-full md:w-full px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								name
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='text'
								placeholder='Jane'
							/>
						</div>
					</div>

					<div class='flex flex-wrap -mx-3 mb-4'>
						<div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Date
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='text'
								placeholder='07'
							/>
						</div>
						<div class='w-full md:w-1/3 px-3'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-last-name'
							>
								Month
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='text'
								placeholder='05'
							/>
						</div>
						<div class='w-full md:w-1/3 px-3'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-last-name'
							>
								Year
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='text'
								placeholder='1998'
							/>
						</div>
					</div>

					<div class='flex flex-wrap -mx-3 mt-4'>
						<div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								mobile
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='text'
								placeholder='Jane'
							/>
						</div>
						<div class='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-state'
							>
								Gender
							</label>
							<div class='relative'>
								<select
									class='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									placeholder='gender'
								>
									<option>Male</option>
									<option>Male</option>
									<option>Female</option>
									<option>Other</option>
								</select>
								<div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
									<svg
										class='fill-current h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
									>
										<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
									</svg>
								</div>
							</div>
						</div>

						<div class='w-full px-3 mt-4'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								College Name
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='phone'
								placeholder='Jane'
							/>
						</div>
						<div class='w-full px-3 mt-4'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Email
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='email'
								placeholder='Jane'
							/>
						</div>
					</div>
				</form>

				<button className='w-full h-7 bg-cyan-500 mt-4 text-white p-5 flex justify-center items-center rounded font-semibold'>
					Add Data
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='25'
						height='25'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							d='M6 12.4h12M12.6 7l5.4 5.4l-5.4 5.4'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}
