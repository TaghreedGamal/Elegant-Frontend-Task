import React from "react";
import { PropTypes } from 'prop-types';
import SocialIcons from '../../common/social-icons/social-icons';
import Notification from '../../common/notification/notification';
import './top-bar.scss'

function TopBar(props){
    const {isLogin}=props;
    return(
        <div className="social-nav">
            <div className="social-nav_icons">
                <SocialIcons position="header"/>
            </div>
            <div className="social-nav_notifications">
                <Notification icon="/heart.png" title="WhishList" isLogin={isLogin} number={3} />
                <Notification icon="/wallet.png" title="Wallet" />
                <Notification icon="/car.png" title="Sell Car"/>
            </div>
        </div>
    )
}
TopBar.propTypes = {
    isLogin: PropTypes.bool,
};
export default TopBar;