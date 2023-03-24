import React, { useDebugValue, useEffect, useState } from "react";
import { ethers } from "ethers";

export const TransactionContext = React.createContext();

const { ethereum } = window

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

	return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
