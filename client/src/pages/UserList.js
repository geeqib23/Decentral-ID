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
            
        </div>
    );
}

export default UserList;