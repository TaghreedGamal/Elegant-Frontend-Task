import React from 'react'
import { PropTypes } from 'prop-types';
import { VerticalDashboardTabsData } from  './verticalDashboardTabs-data';
import { IconContext } from "react-icons/lib";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Avatar from '../../common/avatar/avatar';
import { Link } from 'react-router-dom';
import DetectMobile from "../../../utils/detect-mobile";
import {IoStorefrontOutline} from 'react-icons/io5'
import {AiOutlineLogout} from 'react-icons/ai'
import 'react-tabs/style/react-tabs.css';
import './verticalDashboard-tabs.scss'

function VerticalDashboardTabs(props) {
    const {userName,setUser,setIsLogin}=props
    const handelLogout = ()=>{
        setUser({username:"",email:""})
        setIsLogin(false)
    }
    const isMobile=DetectMobile();
    return (
        <div className="leftbar-container">
             <Tabs>
                {isMobile &&  
                    <div className="user-info mobile">
                        <Avatar img="/avatar.png"/>
                        <div>
                            <p>{userName}</p>
                            <p className="store">
                                <IconContext.Provider value={{ size: '12px' }}>
                                    <IoStorefrontOutline/>
                                </IconContext.Provider>
                                Auto Gom3a
                            </p>
                        </div>
                    </div>
                }
                <TabList>
                    {!isMobile &&
                        <div className="user-info">
                            <Avatar img="/avatar.png"/>
                            <p>{userName}</p>
                            <p className="store">
                                <IconContext.Provider value={{ size: '12px' }}>
                                    <IoStorefrontOutline/>
                                </IconContext.Provider>
                                Auto Gom3a
                            </p>
                        </div>
                    }
                    {VerticalDashboardTabsData.map((item,index)=>{
                        return(
                            <Tab key={index}>
                                <div className="tab-content">
                                    <div className="tab-content-icon">
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            {item.icon}
                                        </IconContext.Provider>
                                    </div>
                                    <div className="tab-content-title">{item.title}</div>
                                </div>
                            </Tab>
                        )
                    })}
                    <button  className="react-tabs__tab" >
                        <Link to="/register" className="tab-content">
                            <IconContext.Provider value={{ size: '25px' }}>
                                <AiOutlineLogout className="tab-content-icon" onClick={()=>handelLogout()}/>
                            </IconContext.Provider>
                            <div className="tab-content-title" onClick={()=>handelLogout()}>Log Out</div>
                        </Link>
                    </button>
                </TabList>
                {VerticalDashboardTabsData.map((item,index)=>{
                    return(
                        <TabPanel>{item.content}</TabPanel>
                    )
                })}
            </Tabs>
        </div>
    )
}
VerticalDashboardTabs.propTypes = {
    userName:PropTypes.string.isRequired,
    setUser: PropTypes.func.isRequired,
    setIsLogin: PropTypes.func.isRequired,
};
export default VerticalDashboardTabs
