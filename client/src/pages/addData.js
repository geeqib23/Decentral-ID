export default function AddData() {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center'>
			<div className='flex flex-col justify-center items-center bg-gray-50 p-10 rounded-lg'>
				<h1 className='text-4xl mb-10'>Add Details</h1>

				<form class='w-full max-w-lg'>
					<div class='flex flex-wrap -mx-3 mb-6'>
						<div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								First Name
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='text'
								placeholder='Jane'
							/>
						</div>
						<div class='w-full md:w-1/2 px-3'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-last-name'
							>
								Last Name
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='text'
								placeholder='Doe'
							/>
						</div>
					</div>

					<div class='flex flex-wrap -mx-3 mb-6'>
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

					<div class='flex flex-wrap -mx-3 mb-2'>
						<div class='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-city'
							>
								City
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-city'
								type='text'
								placeholder='Albuquerque'
							/>
						</div>
						<div class='w-full md:w-2/4 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-state'
							>
								State
							</label>
							<div class='relative'>
								<select
									class='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									placeholder='state'
								>
									<option>Select</option>
									<option>Andhra Pradesh</option>
									<option>Arunachal Pradesh</option>
									<option>Assam</option>
									<option>Bihar</option>
									<option>Chhattisgarh</option>
									<option>Goa</option>
									<option>Gujarat</option>
									<option>Haryana</option>
									<option>Himachal Pradesh</option>
									<option>Kerala</option>
									<option>Madhya Pradesh</option>
									<option>Maharashtra</option>
									<option>Manipur Tripura</option>
									<option>Meghalaya</option>
									<option>Mizoram</option>
									<option>Nagaland</option>
									<option>Odisha</option>
									<option>Punjab</option>
									<option>Rajasthan</option>
									<option>Karnataka</option>
									<option>Sikkim</option>
									<option>Tamil Nadu</option>
									<option>Tripura</option>
									<option>Uttar pradesh</option>
									<option>Uttarakhand</option>
									<option>West Bengal</option>
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
						<div class='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-zip'
							>
								Zip
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-zip'
								type='text'
								placeholder='90210'
							/>
						</div>
					</div>
				</form>

				<button className='w-full h-7 bg-cyan-500 my-6 text-white p-5 flex justify-center items-center rounded font-semibold'>
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
