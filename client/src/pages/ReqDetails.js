import React, { useContext, useEffect, useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import { useParams } from 'react-router';
import { TransactionContext } from '../context/TransactionContext';
import { Link, useNavigate } from "react-router-dom";

function ReqDetails() {
    const navigate = useNavigate();

    let {index} = useParams();
    index--;
    const [vreq, setVreq] = useState(null);
    const { verifierVReqList, loadVerifierList, verify, currentAccount, checkIfWalletIsConnect } = useContext(TransactionContext);
    
    useEffect(() =>{
        checkIfWalletIsConnect();
        if (index >= verifierVReqList.length)
		    loadVerifierList();
        else
            setVreq(verifierVReqList[index]);
	}, []);

    useEffect(() =>{
        console.log("fewfew", verifierVReqList)
        if (index < verifierVReqList.length)
            setVreq(verifierVReqList[index]);
	}, [verifierVReqList]);

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
        {vreq !== null && <div className='h-[80%] w-[50%] flex flex-col justify-center items-center bg-gray-100 rounded-md'>
            <h1 className='text-3xl font-bold m-7'>Approval request</h1>
            <h3 className='m-3 text-2xl font-semibold'>Request from: {vreq.user}</h3>

            <div className='flex flex-col justify-start my-10 space-y-5 w-60'>
                <h1 className='underline'>Request For</h1>
                {vreq.name !== "" && <h3>name: {vreq.name}</h3>}
                {vreq.dob !== "" && <h3>Data of Birth: {vreq.dob}</h3>}
                {vreq.college !== "" && <h3>College: {vreq.college}</h3>}
                {vreq.email !== "" && <h3>Email: {vreq.email}</h3>}
                {vreq.isCollegeStudent !== 0 && <h3>Is College Student?: {vreq.isCollegeStudent}</h3>}
                {vreq.isOver18 !== 0 && <h3>Is Over 18?: {vreq.isOver18}</h3>}
                {vreq.mobile !== 0 && <h3>Mobile: {vreq.mobile}</h3>}
                {vreq.sex !== "" && <h3>Sex: {vreq.sex}</h3>}
                <Link to={`https://ecmaniacs-hack36.infura-ipfs.io/ipfs/${vreq.cid}`} target="_blank">View File</Link>
            </div>

            <div className='flex space-x-5'>
                <button className='flex items-center p-2 bg-red-300 rounded' onClick={async () => {
                    await verify(currentAccount, index, false);
                    navigate('/admin');
                }}>
                    <RxCrossCircled className='mr-2' />
                    Reject
                </button>
                <button className='flex items-center p-2 rounded bg-lime-300' onClick={async () => {
                    await verify(currentAccount, index, true);
                    navigate('/admin');
                }}>
                    <TiTick className='mr-2' /> Approve
                </button>
            </div>
        </div>}
        </div>
    );
}

export default ReqDetails;