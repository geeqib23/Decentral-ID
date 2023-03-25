import React, { useContext, useEffect, useState } from "react";
import { create  } from "ipfs-http-client";
import { TransactionContext } from "../context/TransactionContext";
import * as API from "../api/index";
import Web3 from 'web3';
import { ethers } from "ethers";

const AddDocument = () => {
	const {submitDocument} = useContext(TransactionContext)
	const projectId = '2NTEjHeG4NfpOuXQtsMzDCN7aVy';
	const projectSecretKey = '9ac5a480614ba7885aabc99c9c3d45f4';
	const authorization = "Basic " + window.btoa(projectId + ":" + projectSecretKey);

    const ipfs = create({
		url: "https://ipfs.infura.io:5001/api/v0",
		headers:{
			authorization
		}
	})

	const initialState = { name: '', dob: '', mobile: '', sex: '', college: '', email: '', verifier: '', cid: '' }

	const [formData, setFormData] = useState(initialState)
	const [application, setApplication] = useState('Select')
	const [document, setDocument] = useState('Select')
	const [isHash, setIsHash] = useState(0)

	useEffect(() => {
		if (isHash == 1) {
			const { name, dob, mobile, sex, college, email, verifier, cid } = formData;
			submitDocument(verifier,ethers.utils.hexZeroPad(Web3.utils.asciiToHex(cid), 32),name,sex,dob,parseInt(mobile),email,college);
		console.log(formData)

		}
	}, [isHash])
	

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

	const getHash = (name) => {
		try {
			API.getVerifierHash(name).then((res) => {
				console.log(res.data.result);
				setFormData({ ...formData, verifier: res.data.result });
				setIsHash(1);
			})
		} catch (error) {
			console.log(error)
		}
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const form = e.target;
		const docs = form[8].files;

		if (!docs || docs.length === 0) {
			return alert("No files selected");
		}

		const doc = docs[0];
		const result = await ipfs.add(doc);
		console.log("DENNIS", typeof result.path)
		setFormData((prev) => ({ ...prev.formData, cid: result.path }));
		const { verifier } = formData;
		getHash(verifier);


		console.log('TODO SOLIDITY')
		
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		console.log(formData)
	}

	return (
		<div className='w-full h-full flex flex-col justify-center items-center pt-[400px] overflow-x-hidden'>
			<div className='w-2/4 flex flex-col justify-center items-center bg-gray-50 p-4 rounded-lg'>
				<h1 className='text-4xl mb-10'>Add Verification Request</h1>

				<form class='w-full max-w-lg' onSubmit={handleSubmit}>
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
								name="name"
								onChange={handleChange}
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
								type='date'
								placeholder='07'
								name='dob'
								onChange={handleChange}
							/>
						</div>
						{/* <div class='w-full md:w-1/3 px-3'>
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
								name='mm'
								onChange={handleDOB}
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
								name='yyyy'
								onChange={handleDOB}
							/>
						</div> */}
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
								name='mobile'
								onChange={handleChange}
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
									name='sex'
									onChange={handleChange}
								>
									<option defaultChecked hidden>Select</option> 
									<option value='Male'>Male</option>
									<option value='Female'>Female</option>
									<option value='Other'>Other</option>
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
								name="college"
								onChange={handleChange}
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
								placeholder='abc@gmail.com'
								name="email"
								onChange={handleChange}
							/>
						</div>
					</div>

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
								name="doc"
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
									placeholder='select'
									name="verifier"
									onChange={handleChange}
								>
									<option>Select</option>
									{verifierMap[document].map((val) => (
										<option value={val}>{val}</option>
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
					<button type="submit" className='w-full h-7 bg-cyan-500 mt-4 text-white p-5 flex justify-center items-center rounded font-semibold'>
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
				</form>

			</div>
		</div>
	)
}

export default AddDocument
