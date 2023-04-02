import { useContext, useEffect, useState } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/nav'

const Home = () => {
	const { currentAccount, loadUserList, userVReqList, isAdmin } = useContext(TransactionContext)
	const navigate = useNavigate()

  useEffect(() => {
      loadUserList();
  },[])


  // useEffect(() => {
  //   if (isAdmin !== undefined) {
  //       console.log("change")
  //       // console.log(currentAccount)
  //       console.log(isAdmin)
  //       if(isA)
  //           navigate('/admin')
  //     };
  //   }, [isAdmin]);

    useEffect(() => {
      console.log("SS")
        if (currentAccount != undefined && isAdmin != undefined) {
        console.log(currentAccount,isAdmin)
        if(isAdmin)
              navigate('/admin')
            else 
              navigate('/home')
          };
      }, [currentAccount]);
    
  

	return (
		<div className='w-full h-full overflow-x-hidden'>
      <Nav />

			<div className='flex flex-col items-center w-full h-full'>
				<h1 className='text-3xl font-bold m-7'>My Request Status</h1>

				<table class='w-2/4 rounded-lg border-2 border-gray'>
					<thead class='bg-blue-300'>
						<tr>
							<th scope='col' class='text-sm font-medium px-6 py-4 text-left'>
								Id
							</th>
							<th scope='col' class='text-sm font-medium px-6 py-4 text-left'>
								Verifier
							</th>
							<th scope='col' class='text-sm font-medium px-6 py-4 text-left'>
								Status
							</th>
						</tr>
					</thead>

					<tbody>
              {userVReqList.map(({ verifier, status }, index) => (
                <tr class='bg-gray-100 border-b' key={index}>
                  <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    {index}
                  </td>
                  <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    {verifier}
                  </td>
                  <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    {status == 0 && "PROCESSING"}
                    {status == 1 && "ACCEPTED"}
                    {status == -1 && "REJECTED"}
                  </td>
							   
                </tr>
              ))}
					</tbody>
				</table>
			</div>
    </div>
	)
}

export default Home
