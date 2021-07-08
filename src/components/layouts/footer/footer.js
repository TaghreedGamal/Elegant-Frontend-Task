import React from 'react'
import Logo from '../../common/logo'
import SocialIcons from '../../common/social-icons/social-icons'
import {BiCopyright} from  'react-icons/bi';
import './footer.scss'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-container_rows">
                <div className="row">
                    <Logo/>
                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s standard </p>
                    <div className="icons">
                        <SocialIcons position="footer"/>
                    </div>
                </div>
                <div className="row">
                    <h1>Links</h1>
                    <ul className="footer-menu">
                        <li>Home</li>
                        <li>All Auctions</li>
                        <li>Category</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="row">
                    <h1>Account</h1>
                    <ul className="footer-menu">
                        <li>Login</li>
                        <li>Register</li>
                        <li>Wishlist</li>
                        <li>My Wallet</li>
                        <li>Sell Car</li>
                    </ul>
                </div>
                <div className="row">
                    <h1>Download App</h1>
                </div>
            </div>
            <div className="footer-container_copyrights">
                <p><BiCopyright/>2021 <span>Auto Gomaa.</span> All Rights Reserved. Powered by<a href="#"> Elegant Group</a></p>
            </div>
        </div>
    )
}

export default Footer
