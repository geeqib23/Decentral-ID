import { useState } from 'react'

const AddDocument = () => {
	const [application, setApplication] = useState('Select')
	const [document, setDocument] = useState('Select')

	const documentMap = {
		Select: [],
		'Student Status': ['College ID', 'College Result Transcript'],
		'Identity Proof': [
			'Aadhar Card',
			'Pan Card',
			'Driving License',
			'Passport',
		],
		'Educational Certificates': [
			'10th Mark sheet',
			'12th Mark sheet',
			'College Result Transcript',
		],
	}

	const verifierMap = {
		Select: [],
		'College ID': ['MNNIT A', 'NITT', 'NITK'],
		'Aadhar Card': ['UIDAI'],
		'Pan Card': ['Bank'],
		'Driving License': ['RTO'],
		Passport: ['MFA'],
		'10th Mark sheet': ['CBSE', 'ICSE', 'State Board'],
		'12th Mark sheet': ['CBSE', 'ICSE', 'State Board'],
		'College Result Transcript': ['MNNIT A', 'NITT', 'NITK'],
	}

	return (
		<div className='w-full h-full flex flex-col justify-center items-center pt-14'>
			<div className='w-1/4 flex flex-col justify-center items-center bg-gray-50 p-4 rounded-lg'>
				<h1 className='text-4xl mb-10'>Add Document</h1>

				<form class='w-full max-w-lg'>
					<div class='flex flex-wrap -mx-3 mb-4'>
						<div class='w-full md:w-full px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Application
							</label>
							<div class='relative'>
								<select
									class='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									placeholder='gender'
									onChange={(e) => setApplication(e.target.value)}
								>
									<option>Select</option>
									<option>Student Status</option>
									<option>Identity Proof</option>
									<option>Educational Certificates</option>
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
					</div>

					<div class='flex flex-wrap -mx-3 mb-4'>
						<div class='w-full md:w-full px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Type of Document
							</label>
							<div class='relative'>
								<select
									class='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									placeholder='gender'
									onChange={(e) => setDocument(e.target.value)}
								>
									<option>Select</option>
									{documentMap[application].map((val) => (
										<option>{val}</option>
									))}
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
					</div>

					<div class='flex flex-wrap -mx-3 mb-4'>
						<div class='w-full md:w-full px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Document
							</label>
							<input
								class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='file'
								placeholder='Jane'
							/>
						</div>
					</div>

					<div class='flex flex-wrap -mx-3 mb-4'>
						<div class='w-full md:w-full px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Verifier
							</label>
							<div class='relative'>
								<select
									class='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									placeholder='gender'
								>
									<option>Select</option>
									{verifierMap[document].map((val) => (
										<option>{val}</option>
									))}
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
					</div>
				</form>

				<button className='w-full h-7 bg-cyan-500 mt-4 text-white p-5 flex justify-center items-center rounded font-semibold'>
					Add Document
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

export default AddDocument
