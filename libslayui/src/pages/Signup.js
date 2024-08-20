import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faApple, faFacebook, faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {register} from "../services/apiService";
import logo from '../imgs/logo.png';
import a1 from '../imgs/10028970 1.png';
import a2 from '../imgs/Group 15.png';
import a3 from '../imgs/24122050_6904354 1.png';
import a4 from '../imgs/24122051_6778944 1.png';
import '../css/signup.css';
import {useNavigate} from "react-router-dom";

function Signup() {
    const [eyeTikTak, setEyeTikTak] = useState(true);
    const togglePasswordVisibility = () => {
        setEyeTikTak(!eyeTikTak);
    };
    const [reeyeTikTak, setReEyeTikTak] = useState(true);
    const retogglePasswordVisibility = () => {
        setReEyeTikTak(!reeyeTikTak);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    // tạo hàm
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const registerData = {email, password}
            const response = await register(registerData);
            if (response.status === 200) {
                setMessage("User Register Successfully");
                //  lưu session ở đây
                sessionStorage.getItem(response.data)
                // chuyển hướng trang home
                navigate("/contact");
            }
        } catch (error) {
            if (error.status === 400) {
                setMessage("Email already in use"); // "Email already in use."
            } else {
                setMessage("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="containerr">
            <div className="container_logo">
                <img src={logo} alt="logo" />
                <h3>LIBSLAY</h3>
            </div>

            <div className="container_form">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="welcome">
                            <h2>Welcome to LibSlay!</h2>
                            <h3>Sign Up to Continue</h3>
                        </div>

                        <div className="container_username">
                            <FontAwesomeIcon icon={faUser} />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input_username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="container_password">
                            <FontAwesomeIcon icon={faLock} />
                            <input
                                type={eyeTikTak ? "password" : "text"}
                                placeholder="Create Password"
                                className="input_password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="button" onClick={togglePasswordVisibility}>
                                {eyeTikTak ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </button>
                        </div>
                        <div className="container_repassword">
                            <FontAwesomeIcon icon={faLock} />
                            <input
                                type={reeyeTikTak ? "password" : "text"}
                                placeholder="Confirm Password"
                                className="input_password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button type="button" onClick={retogglePasswordVisibility}>
                                {reeyeTikTak ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </button>
                        </div>
                        {message && <div className="message">{message}</div>}
                        <button className="submit" type="submit">Submit</button>
                    </form>
                    <img src={a3} alt="" className="a3" />
                    <img src={a4} alt="" className="a4" />
                    <label className="label">Login with</label>
                    <div className="gafx">
                        <div>
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faApple} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faXTwitter} />
                        </div>
                    </div>
                </div>
            </div>
            <img src={a1} alt="" className="a1" />
            <img src={a2} alt="" className="a2" />
        </div>
    );
}

export default Signup;
