import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Box, Button, useToast } from '@chakra-ui/react'
import { useWeb3Modal } from '@web3modal/react';
import UseAuth from '@/components/UseAuth'
import { useAccount, useContract, useSigner } from 'wagmi'

 const Home= () => {

  const { open } = useWeb3Modal()

  const toast = useToast()
  
  const connect = () => {
    open()

  }

  return (
    <>
      <Head>

        <title>login</title>
        <meta content="login" property="og:title" />
        <meta content="login" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="images/webclip.png" rel="apple-touch-icon" />
      </Head>

      <Box className="body-5">
        <div className="div-block-55">
          <div className="text-block-31">SuperNormal Login</div>
    
          <Button colorScheme='#ffc20b' onClick={connect} className="button-5 w-button">Login</Button>
        </div>
      </Box>
    </>
  )
}

export default UseAuth(Home)