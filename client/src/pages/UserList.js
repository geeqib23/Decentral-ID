import React, { useContext, useEffect } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function UserList() {

    const {loadUserList,userVReqList} = useContext(TransactionContext)

    useEffect(() => {
        loadUserList();
    },[])

    return (
            <div className='w-full h-full p-5 pt-20 flex flex-col justify-center items-center'>
			
            <h1 className="text-4xl pb-10">MY REQUEST STATUS</h1>
            <table class='w-2/4 rounded-lg border-2 border-gray'>
                <thead class='bg-cyan-500'>
                    <tr>
                        <th
                            scope='col'
                            class='text-sm font-medium text-white px-6 py-4 text-left'
                            >
                            Id
                        </th>
                        <th
                            scope='col'
                            class='text-sm font-medium text-white px-6 py-4 text-left'
                            >
                            Name
                        </th>
                        <th
                            scope='col'
                            class='text-sm font-medium text-white px-6 py-4 text-left'
                            >
                            Verified
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                    userVReqList.map(({verifier, status}) =>   
                            (<tr class='bg-gray-100 border-b'>
                                <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                    1
                                </td>
                                <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    {verifier}
                                </td>
                                <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    {status}
                                </td>
                            </tr> )
                            )
                    }
                   
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
    );
}

export default UserList;