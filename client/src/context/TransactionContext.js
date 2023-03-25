import React, { useDebugValue, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";
import { socket } from '../socket';
import { Navigate, useNavigate } from "react-router";
import * as API from "../api/index";

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
  const [isAdmin,setIsAdmin] = useState();
  const [callCompleted,setCallCompleted] = useState(false)

  useEffect(() => {
    socket.connect();
    if (currentAccount !== "")
      socket.emit("ADDR", currentAccount);
  
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (currentAccount !== "")
      socket.emit("ADDR", currentAccount);
  }, [currentAccount]);

  const getVerifierName = (hash_id) => {
    try {
      API.getVerifierName(hash_id).then((res) => {
        console.log(res.data.result)
        setCallCompleted(true)
      })
    } catch (error) {
      console.log(error)
    }
  }

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
        // const verifierAddress = "0x27510d27b0B5c8c813A893726DcEAB6a933345da"
        const isOver18 = 1
        const isCollegeStudent = -1
        const res = await transactionsContract.addVReq(verifier,cid,name,sex,dob,mobile,email,college,isOver18,isCollegeStudent);

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
        const userList = [];
        const length = await transactionsContract.showUserVerificationReqListLength();
        console.log(length)
        let i = 0;
        while(i<length){
          const obj = {};
          const res = await transactionsContract.showUserVerificationReqList(i);
          console.log(res[0]);
          // obj.verifier = getVerifierName(res[0])
          obj.verifier = res[0]
          obj.status = res[1].toNumber()
          userList.push(obj)
          i++;
        }
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
      API.login(currentAccount).then((res) => {
        console.log(res.data.isVerifier)
            if (res.data.isVerifier) 
              setIsAdmin(true)
              else 
              setIsAdmin(false)
          });
      // console.log(accounts);  
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
