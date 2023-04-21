import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Box, Button, useToast } from '@chakra-ui/react'
import WalletAuth from '@/components/WalletAuth'
import SideBar from '@/components/Layout/SideBar'
import HeaderBar from '@/components/Layout/HeaderBar'

const ProfileSettings = () => {


    return (
        <>
            <Head>
                <title>Profile Editor</title>
                <meta content="Profile Editor" property="og:title" />
                <meta content="Profile Editor" property="twitter:title" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content="Webflow" name="generator" />
                <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
            </Head>
            <Box>
                <Box className="body-2">
                    <div className="dashboard-wrapper">
                        <SideBar />
                        <div className="middle-panel full">
                            <div className="middle-menu settings">
                            <HeaderBar title="Settings" />
                                <div className="profile-editor-block">
                                    <div className="top-profile-section">
                                        <div className="profile-settings-list">
                                            <div className="change-profile-pic-wrapper">
                                                <div className="inner-wrapper-change-profile-pic">
                                                    <div className="profile-pic-holder">
                                                        <div className="div-block-28"></div>
                                                    </div>
                                                    <div className="div-block-27">
                                                        <div className="text-block-12">si-w00</div>
                                                        <a href="#" className="button-2 w-button">Change Profile Picture</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="div-block-419">
                                                <div className="form-block w-form">
                                                    <form id="email-form" name="email-form" data-name="Email Form" method="get"><label for="name-4" className="field-label title">Your Info</label><label for="name-5" className="field-label">Public Profile Name</label><input type="text" className="text-field w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="si-w00" id="name-4"/><label for="field-2" className="field-label">Short Bio</label><textarea placeholder="" maxlength="5000" id="field-2" name="field-2" data-name="Field 2" className="textarea w-input"></textarea><label for="field-2" className="field-label">Featured ZIPS</label>
                                                        <div className="div-block-36">
                                                            <div className="zips-featured selected">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                            <div className="zips-featured selected">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                            <div className="zips-featured">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                            <div className="zips-featured">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                            <div className="zips-featured selected">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                            <div className="zips-featured selected">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                            <div className="zips-featured">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                            <div className="zips-featured">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                            <div className="zips-featured">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                            <div className="zips-featured">
                                                                <div className="div-block-35"></div>
                                                                <div className="text-block-18">ZIPS #0123</div>
                                                            </div>
                                                        </div>
                                                        <div className="text-block-19">4/4 ZIPS Selected</div><input type="submit" value="Save" data-wait="Please wait..." className="submit-button w-button"/>
                                                        </form>
                                                        <div className="w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div className="w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="div-block-420">
                                                <div className="form-block misc-settings w-form">
                                                    <form id="email-form" name="email-form" data-name="Email Form" method="get"><label for="name-5" className="field-label title">Other Settings</label><label for="name-5" className="field-label">Set Burner Wallet for Mint</label><input type="text" className="text-field w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="0x000...." id="name-3"/><input type="submit" value="Save" data-wait="Please wait..." className="submit-button w-button"/></form>
                                                        <div className="w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div className="w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:"none", opacity:0}} className="notifcation-menu-overlay">
                                <div className="notif-menu">
                                    <div className="pop-up-menu-top">
                                        <div className="pop-up-menu-title">Notifications</div>
                                        <a data-w-id="ef9885ad-b3d1-31f6-eed7-9dae6b247d14" href="#" className="link-block w-inline-block"></a>
                                    </div>
                                    <div className="notif-item">
                                        <div className="notif-title">Sandbox avatars are now live! Visit the Metaverse tab to start playing today!</div>
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
                            <div style={{display:"none", opacity:0}} className="points-redeem-overlay">
                                <div className="div-block-46">
                                    <div className="pop-up-menu-top">
                                        <div className="pop-up-menu-title">Redeem Points</div>
                                        <a data-w-id="57000b69-818a-c316-c9eb-cf3baf44b632" href="#" className="redeem-exit-button w-inline-block"></a>
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
                        </Box>
                    </Box>
                </>
                )
}

                export default WalletAuth(ProfileSettings)