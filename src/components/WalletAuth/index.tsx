import React, { useEffect } from 'react';
import  Router  from 'next/router';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';


export default function WalletAuth(WrappedComponent:any){
  return ()=> {
    
   const { address } = useAccount()

    useEffect(()=>{
    if(address){
    }else{
        Router.push("/")
    }
    },[address])
    return <WrappedComponent/>
}
}