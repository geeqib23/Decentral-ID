import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Navigate, useNavigate} from "react-router-dom";
import * as API from "../api/index";

function Wallet(props) {
  return (
    <svg className="ml-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M22 17h2v2h-2z"></path><path fill="currentColor" d="M28 8H4V5h22V3H4a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM4 26V10h24v3h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8v3Zm24-11v6h-8v-6Z"></path></svg>
  )
}


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
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-5xl mb-3">{"<Project Name>"}</h1>
      <h3 className="italic text-2xl mb-7">{"<KYC Made Simple"}</h3>
      <button onClick={connectWallet} className="p-3 bg-blue-300 rounded-md flex items-center justify-center"> Connect Wallet <Wallet /></button>
    </div>
	)
};

export default Login;
