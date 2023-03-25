import React, { useContext, useEffect, useState } from "react";
import { create  } from "ipfs-http-client";
import { TransactionContext } from "../context/TransactionContext";
import * as API from "../api/index";
import Web3 from 'web3';
import { ethers } from "ethers";

const AddDocument = () => {
	const { submitDocument } = useContext(TransactionContext)
	const projectId = '2NTEjHeG4NfpOuXQtsMzDCN7aVy'
	const projectSecretKey = '9ac5a480614ba7885aabc99c9c3d45f4'
	const authorization =
		'Basic ' + window.btoa(projectId + ':' + projectSecretKey)

	const ipfs = create({
		url: 'https://ipfs.infura.io:5001/api/v0',
		headers: {
			authorization,
		},
	})

	const initialState = {
		name: '',
		dob: '',
		mobile: '',
		sex: '',
		college: '',
		email: '',
		verifier: '',
		cid: '',
	}

	const [formData, setFormData] = useState(initialState)
	const [application, setApplication] = useState('Select')
	const [document, setDocument] = useState('Select')
	const [isHash, setIsHash] = useState(0)

	const [fields, setFields] = useState([])
	const [selectedField, setSelectedField] = useState()

	useEffect(() => {
		if (isHash == 1) {
			const { name, dob, mobile, sex, college, email, verifier, cid } = formData
			submitDocument(verifier, cid, name, sex, dob, mobile, email, college)
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
				console.log(res.data.result)
				setFormData({ ...formData, verifier: res.data.result })
				setIsHash(1)
			})
		} catch (error) {
			console.log(error)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const form = e.target
		const docs = form[8].files

		if (!docs || docs.length === 0) {
			return alert('No files selected')
		}

		const doc = docs[0]
		const result = await ipfs.add(doc)
		setFormData((prev) => ({ ...prev.formData, cid: result.path }))
		const { verifier } = formData
		getHash(verifier)

		console.log('TODO SOLIDITY')
	}

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value)
		setFormData((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	function Field(name, type) {
		if (type === 'dob') {
			return (
				<div className='w-[40%] my-3'>
					<label>{name}</label>
					<input
						class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
						type='date'
						name={type}
						onChange={handleChange}
					/>
				</div>
			)
		}

		if (type === 'sex') {
			return (
				<div className='w-[40%] my-3'>
					<label>{name}</label>
					<select
						class='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
						name='sex'
						onChange={handleChange}
					>
						<option defaultChecked hidden>
							Select
						</option>
						<option value='Male'>Male</option>
						<option value='Female'>Female</option>
						<option value='Other'>Other</option>
					</select>
				</div>
			)
		}

		return (
			<div className='w-[40%] my-3'>
				<label>{name}</label>
				<input
					class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
					type='text'
					placeholder={name}
					name={type}
					onChange={handleChange}
				/>
			</div>
		)
	}

	console.log(formData)

	return (
		<div className='w-full h-full overflow-x-hidden'>
			<div className='w-full p-10 flex justify-between'>
				<h1 className='text-3xl font-bold'>Project Name</h1>
				<div className='flex space-x-5'>
					<a
						href='/home'
						className='p-3 bg-blue-300 hover:bg-blue-500 rounded-md'
					>
						Add Verification Request
					</a>
					<a
						href='/addDocument'
						className='p-3 bg-blue-300 hover:bg-blue-500 rounded-md'
					>
						My Requests Status
					</a>
				</div>
			</div>

			<div className='w-full flex flex-col items-center pb-20'>
				<h1 className='text-3xl font-bold m-7'>Add Verification Request</h1>

				<form
					className='w-full flex flex-col items-center'
					onSubmit={handleSubmit}
				>
					<div className='w-[40%] my-3'>
						<label>Application</label>
						<select
							class='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							placeholder='application'
							onChange={(e) => setApplication(e.target.value)}
						>
							<option>Select</option>
							<option>Student Status</option>
							<option>Identity Proof</option>
							<option>Educational Certificates</option>
						</select>
					</div>

					<div className='w-[40%] my-3'>
						<label>Type of Document</label>
						<select
							class='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							placeholder='type of document'
							onChange={(e) => setDocument(e.target.value)}
						>
							<option>Select</option>
							{documentMap[application].map((val) => (
								<option>{val}</option>
							))}
						</select>
					</div>
					<div className='w-[40%] my-3'>
						<label>Document</label>
						<input
							class='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
							id='grid-first-name'
							type='file'
							placeholder='Jane'
							name='doc'
						/>
					</div>
					<div className='w-[40%] my-3'>
						<label>Verifier</label>
						<select
							class='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							placeholder='type of document'
						>
							<option>Select</option>
							{verifierMap[document].map((val) => (
								<option value={val}>{val}</option>
							))}
						</select>
					</div>

					{fields}

					{/* ADD FIELDS */}
					<div className='w-[40%] my-3'>
						<label>Add Fields</label>
						<div className='w-full flex'>
							<select
								class='block appearance-none w-1/2 bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								placeholder='type of document'
								onChange={(e) => {
									setSelectedField(e.target.value)
								}}
							>
								<option>Select</option>
								<option>Name</option>
								<option>Date of Birth</option>
								<option>Gender</option>
								<option>Mobile</option>
								<option>Email</option>
								<option>College Name</option>
							</select>
							<button
								onClick={(e) => {
									e.preventDefault()
									console.log(selectedField)
									if (selectedField === 'Name')
										setFields([
											...fields,
											Field(selectedField, 'name', handleChange),
										])
									else if (selectedField === 'Date of Birth')
										setFields([
											...fields,
											Field(selectedField, 'dob', handleChange),
										])
									else if (selectedField === 'Gender')
										setFields([
											...fields,
											Field(selectedField, 'sex', handleChange),
										])
									else if (selectedField === 'Mobile')
										setFields([
											...fields,
											Field(selectedField, 'mobile', handleChange),
										])
									else if (selectedField === 'Email')
										setFields([
											...fields,
											Field(selectedField, 'email', handleChange),
										])
									else if (selectedField === 'College Name')
										setFields([
											...fields,
											Field(selectedField, 'college', handleChange),
										])
								}}
								className='h-[44px] ml-6 w-1/2 flex justify-center items-center bg-blue-300 rounded'
							>
								Add Field +
							</button>
						</div>
					</div>

					<div className='w-[40%] my-3 flex'>
						<button
							type='submit'
							className='w-full h-[44px] bg-blue-300 flex justify-center items-center rounded font-semibold'
						>
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
				</form>
			</div>
		</div>
	)
}

export default AddDocument
