import { useContext, useEffect, useState } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { useNavigate } from 'react-router-dom'
import * as API from '../api/index'

const Home = () => {
	const { currentAccount, loadUserList, userVReqList, checkIfWalletIsConnect } =
		useContext(TransactionContext)
	const navigate = useNavigate()

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

	useEffect(() => {
		if (currentAccount != '') {
			console.log(currentAccount)
			API.login(currentAccount).then((res) => {
				console.log(res.data.isVerifier)
				if (res.data.isVerifier) navigate('/admin')
				else navigate('/home')
			})
		}
	}, [currentAccount])

	return (
		<div className='w-full h-full overflow-x-hidden'>
			<div className='flex justify-between w-full p-10'>
				<h1 className='text-3xl font-bold'>Project Name</h1>
				<div className='flex space-x-5'>
					<a
						href='/home'
						className='p-3 bg-blue-300 rounded-md hover:bg-blue-500'
					>
						Add Verification Request
					</a>
					<a
						href='/addDocument'
						className='p-3 bg-blue-300 rounded-md hover:bg-blue-500'
					>
						My Requests Status
					</a>
				</div>
			</div>

			<div className='flex flex-col items-center w-full h-full'>
				<h1 className='text-3xl font-bold m-7'>My Request Status</h1>

				<table class='w-2/4 rounded-lg border-2 border-gray'>
					<thead class='bg-blue-300'>
						<tr>
							<th scope='col' class='text-sm font-medium px-6 py-4 text-left'>
								Id
							</th>
							<th scope='col' class='text-sm font-medium px-6 py-4 text-left'>
								Name
							</th>
							<th scope='col' class='text-sm font-medium px-6 py-4 text-left'>
								Verified
							</th>
						</tr>
					</thead>

					<tbody>
						{userVReqList.map(({ verifier, status }, index) => (
							<tr class='bg-gray-100 border-b'>
								<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
									{index}
								</td>
								<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									{verifier}
								</td>
								<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
									{status}
								</td>
							</tr>
						))}

						<tr class='bg-white border-b'>
							<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								4
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Bob
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Dillan
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home
