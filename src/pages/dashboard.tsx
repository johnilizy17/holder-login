import SideBar from '@/components/Layout/SideBar';
import WalletAuth from '@/components/WalletAuth';
import { Box } from '@chakra-ui/react';
import { useWeb3Modal } from '@web3modal/react';
import moment from 'moment';
import Head from 'next/head';
import  Router  from 'next/router';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import { useAccount, useDisconnect, useBalance  } from 'wagmi';

function Dashboard() {

    const [userAddress, setUserAddress] = useState("loading.......")
    const [time, setTime] = useState("loading......")
    const [day, setDay] = useState("Good Morning")
    const { address } = useAccount()
    const [toggle, setToggle] = useState(false)
   const [balanceValue, setBalanceValue]= useState({formatted:0.0})

 const { data, isError, isLoading }:any = useBalance({
            address: address,
          })
    

    useEffect(() => {
        setTime(moment(new Date).format('h:mm a'))
        if (address) {
            setUserAddress(address[0] + address[1] + address[2] + address[3] + address[4] + address[5] + `....` + address[38] + address[39] + address[40] + address[41])
        }
        var today = new Date()
        var curHr = today.getHours()

        if (curHr < 12) {
            setDay('Good Morning')
        } else if (curHr < 18) {
            setDay('Good Afternoon')
        } else {
            setDay('Good Evening')
        }
        if (address) {
       
          setBalanceValue(data)
        }
    
    }, [])

    const toggle_element = () => {
        var element: any = document.getElementById("amount_balance");
        element.style.opacity = (1);
        element.style.height = ("auto")
        element.style.transform = ("translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)")
        var element2: any = document.getElementById("toggle_Amount");
        element2.style.transform = ("rotate(180deg)");
    element2.style.transition=("1s ease-in")
    }


    const toggle_elementOut = () => {
        var element: any = document.getElementById("amount_balance");
        element.style.opacity = (0);

        element.style.transform = ("translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)")
        setToggle(false)
        var element2: any = document.getElementById("toggle_Amount");
        element2.style.transform = ("rotate(0deg)");
    element2.style.transition=("1s ease-in")
    
    }

    
    const { disconnect } = useDisconnect()
 

  
  const Disconnect = () => {
    disconnect()
Router.push("/")
  }

    return (
        <>
            <Head>
                <title>SN Holder Login</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
            </Head>
            <Box className="body">
                <div style={{ "display": "none", "opacity": 0 }} className="points-redeem-overlay">
                    <div className="div-block-46">
                        <div className="pop-up-menu-top">
                            <div className="pop-up-menu-title">Redeem Points</div>
                            <a data-w-id="c641a603-9513-f44d-250f-27ca585efd76" href="#" className="redeem-exit-button w-inline-block"></a>
                        </div>
                        <div className="div-block-47">
                            <div className="div-block-48"></div>
                            <div className="text-block-24">1000 pts</div>
                        </div>
                        <div className="div-block-49">
                            <div className="div-block-50">
                                <div>
                                    <div className="text-block-25">Dream Girls DL</div>
                                    <div className="text-block-26">500 pts</div>
                                </div>
                                <a href="#" className="button-4 w-button">Redeem</a>
                            </div>
                        </div>
                        <div className="div-block-50">
                            <div>
                                <div className="text-block-25">Dain Yoon WL</div>
                                <div className="text-block-26">750 pts</div>
                            </div>
                            <a href="#" className="button-4 w-button">Redeem</a>
                        </div>
                        <div className="div-block-50">
                            <div>
                                <div className="text-block-25">SN Project WL</div>
                                <div className="text-block-26">1250 pts</div>
                            </div>
                            <a href="#" className="button-4 w-button">Redeem</a>
                        </div>
                        <div className="div-block-50">
                            <div>
                                <div className="text-block-25">15% Off Couture</div>
                                <div className="text-block-26">1500 pts</div>
                            </div>
                            <a href="#" className="button-4 w-button">Redeem</a>
                        </div>
                        <div className="div-block-50">
                            <div>
                                <div className="text-block-25">25% Off Couture</div>
                                <div className="text-block-26">2500 pts</div>
                            </div>
                            <a href="#" className="button-4 w-button">Redeem</a>
                        </div>
                    </div>
                </div>
                <div style={{ "display": "none", "opacity": 0 }} className="notifcation-menu-overlay">
                    <div className="notif-menu">
                        <div className="pop-up-menu-top">
                            <div className="pop-up-menu-title">Notifications</div>
                            <a data-w-id="252542e2-0814-b6bc-9001-5c6ef5b4a040" href="#" className="link-block w-inline-block"></a>
                        </div>
                        <div className="notif-item">
                            <div className="notif-title">Success! You have redeemed 2500 points. You are whitelisted for Dain Yoon.</div>
                            <div className="text-block-14">Clear</div>
                        </div>
                        <div className="notif-item">
                            <div className="notif-title">SuperNormal Couture has launched! Use promo code: Launch10 to receive 10% off your first order.</div>
                            <div className="text-block-14">Clear</div>
                        </div>
                        <div className="notif-item">
                            <div className="notif-title">ZIPS staking has arrived. Stake your zips now in your &quot;My ZIPS&quot; tab. </div>
                            <div className="text-block-14">Clear</div>
                        </div>
                        <div className="notif-item">
                            <div className="notif-title">SuperNormal is launching SN Ordinals. More details to be announced soon.</div>
                            <div className="text-block-14">Clear</div>
                        </div>
                        <div className="notif-item">
                            <div className="notif-title">Dream Girls is minting today! Be sure to follow our twitter for latest updates.</div>
                            <div className="text-block-14">Clear</div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-wrapper">
                    <SideBar />
                    <div style={{ "width": "60%" }} className="middle-panel">
                        <div className="middle-menu">
                            <div className="middle-menu-top-section">
                                <div className="text-block-4">{day}</div>
                                <div>
                                    <div className="time">{time}</div>
                                    <div className="location">PST</div>
                                </div>
                            </div>
                            <div data-w-id="f5509dca-1532-b12d-10da-0fcae9fcfe01" style={{ "display": "none" }} className="div-block-69">
                                <div className="div-block-70"></div>
                            </div>
                            <div data-current="Tab 2" data-easing="ease" data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
                                <div className="tabs-menu w-tab-menu">
                                    <a data-w-tab="Tab 1" className="tab-link w-inline-block w-tab-link">
                                        <div>Main</div>
                                    </a>
                                    <a data-w-tab="Tab 2" className="tab-link w-inline-block w-tab-link w--current">
                                        <div>My ZIPS</div>
                                    </a>
                                </div>
                                <div className="w-tab-content">
                                    <div data-w-tab="Tab 1" className="w-tab-pane">
                                        <div className="middle-menu-bottom-section">
                                            <div className="banner">
                                                <div data-w-id="6a85ad7e-5e36-e58e-7f7f-d8b494e5253a" className="div-block-22"></div>
                                                <div style={{ "display": "none", "opacity": 0 }} className="div-block-23">
                                                    <div className="text-block-9">Select Image</div>
                                                </div>
                                            </div>
                                            <div className="statistics-wrapper">
                                                <div className="div-block-17">
                                                    <div className="stats-icon"></div>
                                                    <div className="stats-item">
                                                        <div className="statistic">Diamond</div>
                                                        <div className="stat-title-text">Holder Rank</div>
                                                    </div>
                                                </div>
                                                <div className="stats-v2">
                                                    <div className="stats-icon badges"></div>
                                                    <div className="stats-item">
                                                        <div className="statistic">6 Badges</div>
                                                        <div className="stat-title-text">Badges Earned</div>
                                                    </div>
                                                </div>
                                                <div className="stats-v2 right">
                                                    <div className="stats-icon titles"></div>
                                                    <div className="stats-item">
                                                        <div className="statistic">4 Titles</div>
                                                        <div className="stat-title-text">Titles Earned</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="div-block-21">
                                                <div className="stats-wrapper left">
                                                    <div className="stats-item bottom">
                                                        <div className="small-stats">January 29, 2022</div>
                                                        <div className="div-block-9">
                                                            <div className="stat-title-text bottom">Holder Since</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stats-wrapper right">
                                                    <div className="stats-item bottom">
                                                        <div className="small-stats">8 ZIPS</div>
                                                        <div className="div-block-9">
                                                            <div className="stat-title-text bottom">Number of ZIPS held</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-w-tab="Tab 2" className="tab-pane-tab-2 w-tab-pane w--tab-active">
                                        <div className="div-block-30">
                                            <div className="text-block-15">Your Collection</div>
                                        </div>
                                        <div className="w-row">
                                            <div className="w-col w-col-3">
                                                <div className="zips-card-2">
                                                    <div className="zips-image staked"></div>
                                                    <div className="zips-title-wrapper-2">
                                                        <div className="token-id">ZIPS #0134</div>
                                                        <div className="text-block-17">View</div>
                                                    </div>
                                                    <div className="staked-indicator-wrapper-2">
                                                        <div className="staked-2">HARVESTING</div>
                                                        <div className="staked-lock-icon-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-3">
                                                <div className="zips-card-2">
                                                    <div className="zips-image staked"></div>
                                                    <div className="zips-title-wrapper-2">
                                                        <div className="token-id">ZIPS #0134</div>
                                                        <div className="text-block-17">View</div>
                                                    </div>
                                                    <div className="staked-indicator-wrapper-2">
                                                        <div className="staked-2">HARVESTING</div>
                                                        <div className="staked-lock-icon-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-3">
                                                <div className="zips-card-2">
                                                    <div className="zips-image staked"></div>
                                                    <div className="zips-title-wrapper-2">
                                                        <div className="token-id">ZIPS #0134</div>
                                                        <div className="text-block-17">View</div>
                                                    </div>
                                                    <div className="staked-indicator-wrapper-2">
                                                        <div className="staked-2">HARVESTING</div>
                                                        <div className="staked-lock-icon-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-3">
                                                <div className="zips-card-2">
                                                    <div className="zips-image staked"></div>
                                                    <div className="zips-title-wrapper-2">
                                                        <div className="token-id">ZIPS #0134</div>
                                                        <div className="text-block-17">View</div>
                                                    </div>
                                                    <div className="staked-indicator-wrapper-2">
                                                        <div className="staked-2">HARVESTING</div>
                                                        <div className="staked-lock-icon-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="columns w-row">
                                            <div className="w-col w-col-3">
                                                <div className="zips-card-2">
                                                    <div className="zips-image staked"></div>
                                                    <div className="zips-title-wrapper-2">
                                                        <div className="token-id">ZIPS #0134</div>
                                                        <div className="text-block-17">View</div>
                                                    </div>
                                                    <div className="staked-indicator-wrapper-2">
                                                        <div className="staked-2">HARVESTING</div>
                                                        <div className="staked-lock-icon-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-3">
                                                <div className="zips-card-2">
                                                    <div className="zips-image staked"></div>
                                                    <div className="zips-title-wrapper-2">
                                                        <div className="token-id">ZIPS #0134</div>
                                                        <div className="text-block-17">View</div>
                                                    </div>
                                                    <div className="staked-indicator-wrapper-2">
                                                        <div className="staked-2">HARVESTING</div>
                                                        <div className="staked-lock-icon-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-3">
                                                <div className="zips-card-2">
                                                    <div className="zips-image staked"></div>
                                                    <div className="zips-title-wrapper-2">
                                                        <div className="token-id">ZIPS #0134</div>
                                                        <div className="text-block-17">View</div>
                                                    </div>
                                                    <div className="staked-indicator-wrapper-2">
                                                        <div className="staked-2">HARVESTING</div>
                                                        <div className="staked-lock-icon-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-3">
                                                <div className="zips-card-2">
                                                    <div className="zips-image staked"></div>
                                                    <div className="zips-title-wrapper-2">
                                                        <div className="token-id">ZIPS #0134</div>
                                                        <div className="text-block-17">View</div>
                                                    </div>
                                                    <div className="staked-indicator-wrapper-2">
                                                        <div className="staked-2">HARVESTING</div>
                                                        <div className="staked-lock-icon-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-panel">
                        <div onMouseEnter={toggle_element} onMouseLeave={toggle_elementOut} className="right-panel-top">
                            <div className="wallet-address-wrapper">
                                <div data-hover="true" data-delay="0" data-w-id="a22f25f9-9d2b-e307-dee6-c548f27ead5c" className="wallet-dropdown w-dropdown">
                                    <div className="dropdown-toggle-3 w-dropdown-toggle w--open">
                                        <div className="dropdown-icon w-icon-dropdown-toggle" id="toggle_Amount" ></div>
                                        <div className="wallet-address-display"><span className="wallet-address">{userAddress}</span></div>
                                    </div>
                                    <nav id="amount_balance" style={{ "height": "0px", "opacity": 0, "WebkitTransform": "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transition: "1s ease-in" }} className="dropdown-menu w-dropdown-list">
                                        <div className="wallet-info-wrapper">
                                            <div className="wallet-info">Balance: {balanceValue.formatted} ETH</div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="wallet-info-wrapper"></div>
                                        <div className="wallet-info-wrapper" onClick={Disconnect}>
                                            <button className="button-3 w-button">Disconnect</button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="promo-block">
                            <div className="text-block-5">Earn Bonus Points</div>
                            <div className="bonus-point-amount">+200 Pts</div>
                            <div className="div-block-15">
                                <div className="div-block-14">
                                    <div className="text-block-6">Candy Hoodie</div>
                                    <a href="#" className="button w-button">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="promo-block">
                            <div className="text-block-5">Dream Girls Reveal</div>
                            <div className="bonus-point-amount">March 28</div>
                            <div className="div-block-15">
                                <div className="div-block-14">
                                    <div className="text-block-6">Pick one up today</div>
                                    <a href="#" className="button w-button">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="promo-block">
                            <div className="text-block-5">SuperNormal Couture</div>
                            <div className="bonus-point-amount">&quot;LAUNCH&quot;</div>
                            <div className="div-block-15">
                                <div className="div-block-14">
                                    <div className="text-block-6">Code for 10% off</div>
                                    <a href="#" className="button w-button">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div data-w-id="09881024-2aa1-f619-08a0-4560a142a0d9" className="div-block-67">
                            <div className="text-block-33">Minimize</div>
                            <div className="div-block-68"></div>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default WalletAuth(Dashboard)