import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {faApple, faFacebook, faGoogle, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import logo from '../imgs/logo.png';
import a1 from '../imgs/10028970 1.png';
import a2 from '../imgs/Group 15.png';
import a3 from '../imgs/24122050_6904354 1.png';
import a4 from '../imgs/24122051_6778944 1.png'
import '../css/login.css'
import {login} from "../services/apiService";

function Login() {
    const [eyeTikTak, setEyeTikTak] = useState(true);
    const togglePasswordVisibility = () => {
        setEyeTikTak(!eyeTikTak);
    };

    // lưu trữ trạng thái thông tin người dùng nhập vào form login
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    // tạo hàm xử lí sự kiện submit
    const handleSubmit = async (e) => {
        e.preventDefault(); // Thêm dòng này

        const loginData = { email, password };
        try {
            const response = await login(loginData);
            if (response.status === 200) {
                alert("Login successful: " + response.data.email);
                // Chuyển hướng hoặc lưu session ở đây
            } else {
                alert("Login failed. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="containerr">
            <div className="container_logo">
                <img src={logo} alt="logo"/>
                <h3>LIBSLAY</h3>
            </div>

            <div className="container_form">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="welcome">
                            <h2>Welcome Back!</h2>
                            <h3>Login to Continue</h3>
                        </div>

                        <div className="container_username">
                            <FontAwesomeIcon icon={faUser}/>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input_username" required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="container_password">
                            <FontAwesomeIcon icon={faLock}/>
                            <input
                                type={eyeTikTak?"password":"text"}
                                placeholder="Enter Password"
                                className="input_password" required
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                            <button type="button" onClick={togglePasswordVisibility}>
                                {
                                    (eyeTikTak)
                                        ?
                                        <FontAwesomeIcon icon={faEyeSlash}/>
                                        :
                                        <FontAwesomeIcon icon={faEye}/>
                                }
                            </button>
                        </div>
                        <button className="submit_login" type="submit">Login</button>
                    </form>
                    <img src={a3} alt="" className="a3"/>
                    <img src={a4} alt="" className="a4"/>
                    <a className="forgoted">Forgot password</a>
                    <label className="label_login">Login with</label>
                    <div className="gafx_login">
                        <div>
                            <FontAwesomeIcon icon={faGoogle}/>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faApple}/>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faFacebook}/>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faXTwitter}/>
                        </div>
                    </div>
                </div>
                <h5>New User? <a onClick={() => alert("sign up")} className="signup">Sign Up</a></h5>
            </div>
            <img src={a1} alt="" className="a1"/>
            <img src={a2} alt="" className="a2"/>
        </div>
    );
}

export default Login;