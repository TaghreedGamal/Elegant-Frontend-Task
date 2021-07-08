import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import IconButton from '../../common/icon-button/icon-button';
import { useHistory } from "react-router-dom";
import './register-form.scss';
import '../button/button';

function RegisterForm (props){
    const {width,Login}=props
    const [error,setError]=useState("");
    const history = useHistory();
    
    const [userData,setUserData]=useState({
        username:"",
        email:"",
        password:"",
    });
    const handelChange=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setUserData({...userData,[name]:value});
    }
    const handelSubmit=  (e)=>{
        e.preventDefault();
        if( !userData.username == "" && !userData.email == "" && !userData.password ==""){ 
            Login(userData)
            history.push("/dashboard");
        }
        else {setError("All fields are Required ")}
        
    }
    return(
        <div className="register-form" style={{width:width}}>
            <div className="register-form-container">
                <h1>Register</h1>
                <div className="login-options">
                    <IconButton icon="/google.png" btnName="Google"/>
                    <IconButton icon="/dark-fb.png" btnName="Facebook"/>
                    <p>or use Email</p>
                </div>
                <p className="errorMsg">{error}</p>
                <form className="form" onSubmit={handelSubmit} >
                    <div className="form-input">
                        <label htmlFor="username">Name</label>
                        <br/>
                        <input type="text" 
                            name="username" 
                            id="username"
                            onChange={handelChange}
                            value={userData.username} 
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input type="email" 
                            name="email" 
                            id="email"
                            onChange={handelChange}
                            value={userData.email} 
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            onChange={handelChange}
                            value={userData.password} 
                        />
                    </div>
                    <div className="form-input">
                        <p>Forgot Password ? </p>
                    </div>
                    <div className="form-input">
                        {/* <Link to="/dashboard"> */}
                        <input className="button solid" type="submit" name="submit" value="Login"/>
                        {/* </Link> */}
                    </div>
                    <p className="text">Already have an account? <a>Sign in</a></p>
                </form>
            </div>
        </div>
    )
}
RegisterForm.propTypes = {
    width:PropTypes.string.isRequired,
    Login:PropTypes.func.isRequired,
};
export default RegisterForm;