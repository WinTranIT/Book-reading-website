import React, { useState } from 'react';
import {login} from "../services/apiService";

const OTPInput = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    
    const handleChange = (e, index) => {
        const value = e.target.value;

        // Kiểm tra nếu giá trị nhập vào là một số hoặc rỗng
        if (/^\d$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Tự động chuyển sang ô tiếp theo nếu có giá trị và không phải ô cuối cùng
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }

            // Kiểm tra nếu tất cả các ô đã được điền
            if (newOtp.every((digit) => digit !== '')) {
                console.log('OTP:', newOtp.join(''));
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
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-[18%]">
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
        </div>
    );
};

export default OTPInput;
