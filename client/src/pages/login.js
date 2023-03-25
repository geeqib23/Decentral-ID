import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Navigate, useNavigate} from "react-router-dom";
import * as API from "../api/index";

const Login = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
//   const [redirectState, setRedirectState] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentAccount != "") {
		console.log(currentAccount)
      API.login(currentAccount).then((res) => {
		console.log(res.data.isVerifier)
        if (res.data.isVerifier) 
          navigate('/admin')
        else 
          navigate('/home')
      });
    }
  }, [currentAccount]);

  return (
		<div
			className='flex w-full h-full justify-center items-center bg-cover bg-no-repeat'
			style={{
				backgroundImage:
					'url("https://images.unsplash.com/photo-1568607689150-17e625c1586e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
			}}
		>
			<div className='w-1/4 h-3/5 bg-white/0.5 drop-shadow-md rounded-lg flex flex-col items-center p-5 backdrop-blur-2xl'>
				{/* {redirectState === 1 && <Navigate to="/admin" />}
        {redirectState === 2 && <Navigate to="/addDocument" />} */}
				<div className='font-bold text-2xl'>Login</div>
				<div className='w-full h-full flex justify-center items-center'>
					<div
						onClick={connectWallet}
						className='font-semibold p-3 bg-cyan-700 rounded-md text-white border-2 border-cyan-900 drop-shadow-lg hover:drop-shadow-xl hover:scale-105 transition-all cursor-pointer'
					>
						{'Login with <project-name>'}
					</div>
				</div>
			</div>
		</div>
	)
};

export default Login;
