import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function SideBar() {

    const toggle_notification = () => {
        var element: any = document.getElementById("Notification");
        element.style.opacity = (1);
        element.style.display = ("flex")
        element.style.transition = ("1s ease-in")
    }

    const close_notification = () => {
        var element: any = document.getElementById("Notification");
        element.style.opacity = (0);
        element.style.display = ("none")
        element.style.transition = ("1s ease-in")
    }

    return (
        <>
            <div className="left-panel">
                <div className="left-menu">
                    <div className="left-menu-top-section">
                        <div className="profile-block">
                            <div className="profile-left">
                                <div className="profile-pic"></div>
                                <div className="name-wrapper">
                                    <div className="text-block">si-w00</div>
                                    <Link href="profile-page.html" className="link">View Profile</Link>
                                </div>
                            </div>
                            <div className="profile-right">
                                <Box cursor="pointer" onClick={toggle_notification} className="notification-button"></Box>
                                <Link href="/profile-settings" className="settings-button w-inline-block"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="left-menu-middle-section">
                        <Link href="index.html" aria-current="page" className="link-block-2 w-inline-block w--current">
                            <div className="left-menu-item selected">
                                <div className="left-menu-item-icon home"></div>
                                <div className="left-menu-item-text">Home</div>
                            </div>
                        </Link>
                        <Link href="badges-titles.html" className="link-block-2 w-inline-block">
                            <div className="left-menu-item">
                                <div className="left-menu-item-icon badges-titles"></div>
                                <div className="left-menu-item-text">Badges &amp; Titles</div>
                            </div>
                        </Link>
                        <Link href="holder-shop.html" className="link-block-2 w-inline-block">
                            <div className="left-menu-item">
                                <div className="left-menu-item-icon shop"></div>
                                <div className="left-menu-item-text">Holder Shop</div>
                            </div>
                        </Link>
                        <Link href="metaverse.html" className="link-block-2 w-inline-block">
                            <div className="left-menu-item">
                                <div className="left-menu-item-icon metaverse"></div>
                                <div className="left-menu-item-text">Metaverses</div>
                            </div>
                        </Link>
                        <Link href="profile-settings.html" className="link-block-2 w-inline-block">
                            <div className="left-menu-item">
                                <div className="left-menu-item-icon my-zips"></div>
                                <div className="left-menu-item-text">Settings</div>
                            </div>
                        </Link>
                    </div>
                    <div className="left-menu-bottom-section">
                        <div data-w-id="7c9460be-6008-68b5-e489-ef9c303f149d" className="points-balance-wrapper">
                            <div className="div-block-3">
                                <div className="user-info-icon"></div>
                                <div className="points-text">1000 Pts</div>
                            </div>
                            <div data-w-id="90361172-e622-fccb-c52d-046e77303089" className="redeem-points-button">
                                <div className="div-block-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ "display": "none", "opacity": 0 }} className="notifcation-menu-overlay" id="Notification">
                <div className="notif-menu">
                    <div className="pop-up-menu-top">
                        <div className="pop-up-menu-title">Notifications</div>
                        <Box onClick={close_notification} cursor="pointer" className="link-block w-inline-block"></Box>
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

        </>
    )
}