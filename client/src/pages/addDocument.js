import React, { useContext, useEffect, useState } from "react";
import { create  } from "ipfs-http-client";
import { TransactionContext } from "../context/TransactionContext";
import Web3 from 'web3';
import { ethers } from "ethers";
import Nav from "../components/nav";
import { projectId,projectSecretKey } from "../utils/constants";

const AddDocument = () => {
	const initialState = {
		name: '',
		dob: '',
		mobile: 0,
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
	const { submitDocument, getVerifierAddress } = useContext(TransactionContext)
	
	const authorization =
		'Basic ' + window.btoa(projectId + ':' + projectSecretKey)

	const ipfs = create({
		url: 'https://ipfs.infura.io:5001/api/v0',
		headers: {
			authorization,
		},
	})
	
	useEffect(() => {
		if (isHash == 1) {
			const { name, dob, mobile, sex, college, email, verifier, cid } = formData
			submitDocument(verifier,cid,name,sex,dob,parseInt(mobile),email,college);
		}
	}, [isHash])

const getHash = (cid, name) => {
	try {
		getVerifierAddress(name).then(address => {
			setFormData({ ...formData, cid, verifier: address });
			setIsHash(1);
		});
	} catch (error) {
		console.log(error)
	}
}

const handleSubmit = async (e) => {
	e.preventDefault()
	
	const form = e.target
	
	if (!form || form.length === 0) {
		return alert('No files selected')
	}
	const doc = form[2].files[0]
	const result = await ipfs.add(doc)
	getHash(result.path, formData.verifier);
}

	
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
	const handleChange = (e) => {
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
			<Nav />

			<div className='flex flex-col items-center w-full pb-20'>
				<h1 className='text-3xl font-bold m-7'>Add Verification Request</h1>

				<form
					className='flex flex-col items-center w-full'
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
							name="verifier"
							onChange={(e)=>{
								setFormData((prev)=>{
									return {...prev,verifier:e.target.value}
								})
							}}
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
						<div className='flex w-full'>
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
