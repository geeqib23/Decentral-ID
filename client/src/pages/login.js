import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Navigate } from "react-router-dom";
import * as API from "../api/index";

const Login = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const [redirectState, setRedirectState] = useState(0);

  useEffect(() => {
    if (currentAccount != "") {
      API.login(currentAccount).then((res) => {
        if (res.data.isAdmin) 
          setRedirectState(1);
        else 
          setRedirectState(2);
      });
    }
  }, [currentAccount]);

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="w-1/4 h-3/5 bg-gray-200 drop-shadow-md rounded-lg flex flex-col items-center p-5">
        {redirectState === 1 && <Navigate to="/admin" />}
        {redirectState === 2 && <Navigate to="/home" />}
        <div className="font-bold text-2xl">
          Login
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div onClick={connectWallet} className="font-semibold p-3 bg-gray-400 rounded-md text-white border-2 border-zinc-400 drop-shadow-lg hover:drop-shadow-xl hover:scale-105 transition-all cursor-pointer">
            {"Login with <project-name>"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
