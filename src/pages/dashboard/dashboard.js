import React from 'react'
import { PropTypes } from 'prop-types';
import VerticalDashboardTabs from '../../components/layouts/vericalDashboard-tabs/verticalDashboard-tabs';
import './dashboard.scss'

function Dashboard(props) {
    const {userName,setUser,setIsLogin}=props

    const handelLogout = ()=>{
        setUser({username:"",email:""})
        setIsLogin(false)
    }
    return (
        <div className="dashboard">
            <VerticalDashboardTabs userName={userName} setIsLogin={setIsLogin} setUser={setUser}/>
        </div>
    )
}
VerticalDashboardTabs.propTypes = {
    userName: PropTypes.string.isRequired,
    setUser: PropTypes.func.isRequired,
    setIsLogin: PropTypes.func.isRequired,
};
export default Dashboard
