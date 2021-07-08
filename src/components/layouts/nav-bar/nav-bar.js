import React, { useState,useEffect } from "react";
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router,Switch,Route,Link  } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Logo from '../../common/logo';
import Button from '../../common/button/button';
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { MobileSidebarData,NavbarData } from './navbar-data';
import DetectMobile from "../../../utils/detect-mobile";
import Avatar from "../../common/avatar/avatar";
import './nav-bar.scss';
import '../../common/notification/notification.scss'

function NavBar(props){
   const {isLogin,userName}=props;
   // function to detect mobile
   const isMobile=DetectMobile();
   const history = useHistory();

    // sidebar in mobile
    const [sidebar,setSidebar]=useState(false);
    const showSidebar=() => setSidebar(!sidebar);

    return(
        <div className="navbar container">
            <Logo/>
            {
                !isMobile ? 
                    <>
                        <nav className="navbar-menu">
                            <ul className="navbar-menu-items">
                                {
                                    NavbarData.map ( (item,index) =>{
                                        return(
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        {!isLogin ?
                            <div className="navbar-buttons">
                                <Link to="/register">
                                    <Button btnName="Register"/>
                                </Link>
                                <Button btnName="Login" solid/>
                            </div>
                            : <div className="navbar-userdata">
                                <Avatar img="/avatar.png"/>
                                <p>{userName}</p>
                                <img src="/down-arrow.png"/>
                                <div class="notify">3</div>
                            </div>
                        }
                    </>
                : 
                <>
                    <div className="nav-sidebar">
                        <Link to="#" className="menu-icon">
                            <IconContext.Provider
                                value={{ color: '#191a4e', size: '20px' }}
                                >
                                <FaBars onClick={showSidebar}/>
                            </IconContext.Provider>
                        </Link>
                    </div>
                    <nav className={sidebar ? "nav-sidebar-menu active" : "nav-sidebar-menu"}>
                        <ul className="nav-sidebar-menu-items">
                            <Link to="#" className="close-icon">
                                <IconContext.Provider
                                    value={{ color: 'white', size: '20px' }}
                                    >
                                        <AiOutlineClose onClick={showSidebar}/>
                                </IconContext.Provider>
                            </Link>
                            {
                                MobileSidebarData.map ( (item,index) =>{
                                    return(
                                        <li key={index} className={item.cName+' mobile'} onClick={showSidebar}>
                                            <Link to={item.path}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </>
            }
        </div>
    )    
}
NavBar.propTypes = {
    userName:PropTypes.string.isRequired,
    isLogin:PropTypes.bool.isRequired,
};
export default NavBar;