import React from 'react';
import { PropTypes } from 'prop-types';
import "./notification.scss";

function Notification(props){
    const {icon,title,isLogin,number}=props;
    return(
        <div className="notification">
            <div className="notification-active">
                {isLogin && <div class="notify">{number}</div>}
                <img src={icon}/>
            </div>
            <p className="namme">{title}</p>
        </div>
    )
}
Notification.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
    isLogin: PropTypes.bool,
};
export default Notification;