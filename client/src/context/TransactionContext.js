import React, { useDebugValue, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";
import { Navigate, useNavigate } from "react-router";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const smartContract = new ethers.Contract(contractAddress, contractABI, signer);
  // console.log(smartContract)
  return smartContract;
};

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({ name: "", dob: "", verifier: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [userVReqList,setUserVReqList] = useState([]);
  const [verifierVReqList,setVerifierVReqList] = useState([]);

  const submitDocument = async (
    verifier,
    cid,
    name,
    sex,
    dob,
    mobile,
    email,
    college
  ) => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        //convert
        const verifierAddress = "0x27510d27b0B5c8c813A893726DcEAB6a933345da"
        const isOver18 = 1
        const isCollegeStudent = -1
        const res = await transactionsContract.addVReq(verifierAddress,cid,name,sex,dob,mobile,email,college,isOver18,isCollegeStudent);

        console.log(res);

        // setUserVReqList(userList);
        navigate('/home')

      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const loadUserList = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const userList = await transactionsContract.showUserVerificationReqList();

        console.log(userList);

        setUserVReqList(userList);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const loadVerifierList = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const verifierList = await transactionsContract.getVerifierVerificationReqList();

        console.log(verifierList);

        setUserVReqList(verifierList);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    window.ethereum.on('accountsChanged', accounts => {
      if (accounts.length)
        setCurrentAccount(accounts[0]);
      else
        setCurrentAccount("");
    });
  }, []);

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log(accounts);

      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };


	const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });
      console.log(accounts);  
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    window.ethereum.on('accountsChanged', accounts => setCurrentAccount(accounts[0]));
  }, []);

	return (
    <TransactionContext.Provider
      value={{
        checkIfWalletIsConnect,
        connectWallet,
        currentAccount,
        isLoading,
        formData,
        handleChange,
        loadUserList,
        loadVerifierList,
        userVReqList,
        verifierVReqList,
        submitDocument
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
