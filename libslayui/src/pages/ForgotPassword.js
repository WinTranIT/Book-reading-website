import React from 'react';
import logo from '../imgs/logo.png';
import a1 from '../imgs/10028970 1.png';
import a2 from '../imgs/Group 15.png';
import '../css/signup.css';
import OTPInput from "../components/OTPinput";

function ForgotPassword() {
    return (
        <div className="containerr">
            <div className="container_logo">
                <img src={logo} alt="logo"/>
                <h3>LIBSLAY</h3>
            </div>

            <div className="container_form">
                <div className="form">
                    <div className="welcome">
                        <h2>Forgot password!</h2>
                    </div>

                    <OTPInput />
                </div>
            </div>
            <img src={a1} alt="" className="a1"/>
            <img src={a2} alt="" className="a2"/>
        </div>
    );
}

export default ForgotPassword;
