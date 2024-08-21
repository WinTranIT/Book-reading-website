import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import '../css/OTPinput.css';
import { changePassword, sendMail } from "../services/apiService";
import { useNavigate } from "react-router-dom";

const OTPInput = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [tiktakInputEmail, setTiktakInputEmail] = useState(true);
    const [tiktakOTP, setTiktakOTP] = useState(false);
    const [tiktok, setTiktok] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [reeyeTikTak, setReEyeTikTak] = useState(true);
    const [eyeTikTak, setEyeTikTak] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setEyeTikTak(!eyeTikTak);
    };

    const retogglePasswordVisibility = () => {
        setReEyeTikTak(!reeyeTikTak);
    };

    const generateRandomSixDigitNumber = () => {
        return Math.floor(Math.random() * 900000) + 100000;
    };

    const handleSendMail = async () => {
        const num = generateRandomSixDigitNumber();
        setMessage(num.toString()); // Gán OTP sau khi email được nhập
        const maildata = { email, message: num.toString() };
        try {
            const response = await sendMail(maildata);
            if (response.status === 200) {
                setTiktakInputEmail(false);
                setTiktakOTP(true);
            } else {
                alert("Failed! Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    const handleChangePassword = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const maildata = { email, password };
        try {
            const response = await changePassword(maildata);
            if (response.status === 200) {
                alert("Change password success!");
                navigate('/');
            } else {
                alert("Failed! Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (/^\d$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }

            if (newOtp.every((digit) => digit !== '')) {
                if (Number(message) === Number(newOtp.join(''))) {
                    setTiktakOTP(false);
                    setTiktok(true);
                } else {
                    alert("OTP code is incorrect! Please try again!");
                }
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '') {
            if (index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {tiktakInputEmail && (
                <div>
                    <div className="container_getPassword">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="input_Email w-[80%]"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button className='otp_submit'
                            onClick={handleSendMail} type='submit'
                    >
                        Submit
                    </button>
                </div>
            )}
            {tiktakOTP && (
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-[18%] z-3">
                    <h2 className="text-xl font-bold mb-4 text-center">Enter OTP</h2>
                    <div className="flex justify-between">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                value={value}
                                maxLength="1"
                                className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onFocus={(e) => e.target.select()}
                            />
                        ))}
                    </div>
                </div>
            )}
            {tiktok && (
                <div>
                    <h5 className='mt-[20%] text-cyan-700'>Change password for {email}</h5>
                    <div className="container_password">
                        <FontAwesomeIcon icon={faLock} />
                        <input
                            type={eyeTikTak ? "password" : "text"}
                            placeholder="New Password"
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
                    <button className='otp_submit'
                            onClick={handleChangePassword}
                            type='submit'
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default OTPInput;
