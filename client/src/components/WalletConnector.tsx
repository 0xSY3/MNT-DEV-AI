import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button } from "@/components/ui/button";

// Add type declarations for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

export function WalletConnector() {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        
        try {
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0].address);
          }
        } catch (error) {
          console.error("Error checking wallet:", error);
        }
      }
    };

    checkWallet();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setProvider(provider);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <Button
      onClick={account ? undefined : connectWallet}
      className="px-6 py-2 bg-green-600/90 text-white font-semibold rounded-xl 
        shadow-lg shadow-green-500/20 hover:bg-green-500 transition-all duration-300 
        border border-green-500/30"
    >
      {account ? formatAddress(account) : "Connect Wallet"}
    </Button>
  );
}