import React from 'react'
import { PropTypes } from 'prop-types';
import Dashboard from '../dashboard/dashboard'
import RegisterForm from '../../components/common/register-form/register-form';
import DetectMobile from "../../utils/detect-mobile";
import './register.scss';

function Register(props) {
    const {user,login,setIsLogin,setUser}= props
    const isMobile=DetectMobile();
    return (
        // (user.email !="") ? <Dashboard userName={user.username} setUser={setUser} setIsLogin={setIsLogin}/>:
        <div className="register-page">
            <div className="login-card">
                <div className="login-card_img" style={{backgroundImage:'url("/login-img.png")'}}/>
                <RegisterForm width={isMobile ? "100%":"50%"} Login={login}/>
            </div>
        </div>
    )
}
Register.propTypes = {
    setIsLogin: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired,
    login: PropTypes.bool.isRequired,
    user: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired
};
export default Register
